import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useQuery, gql } from '@apollo/client'
// import Image from 'material-ui-image'
import { Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    depositContext: {
      flex: 1,
    },
    root: {
      maxWidth: 700,
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      margin: 'auto',
    },
  }
})

const GET_QRCODE = gql`
  {
    qrcode
  }
`

export default function Qrcode() {
  const classes = useStyles()
  console.log('qrcode')
  const { loading, error, data } = useQuery(GET_QRCODE)
  if (error) return <p>Sign in to view</p>
  return (
    <Card className={classes.root}>
      <img src={loading ? '' : data.qrcode} alt="qrcode" />
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : 'scan to login'}
      </Typography>
    </Card>
  )
}
