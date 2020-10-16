import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useQuery, gql } from '@apollo/client'
// import Image from 'material-ui-image'
import { Paper } from '@material-ui/core'

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
    <Paper className={classes.root}>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.qrcode}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        qrcode found
      </Typography>
    </Paper>
  )
}
