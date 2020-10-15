import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Paper, Typography } from '@material-ui/core'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated && (
      <Paper>
        <Avatar src={user.picture} alt={user.name}></Avatar>
        <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </Paper>
    )
  )
}
export default Profile
