import { ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}  >
    <Post image="https://th.bing.com/th/id/OIP.1x07SxnqyMzM-vrWHp8r-wHaE8?w=313&h=180&c=7&r=0&o=5&pid=1.7" src="https://th.bing.com/th/id/OIP.hXNvtHl-ifxHLCtiM_xx-AHaI4?w=217&h=186&c=7&r=0&o=5&pid=1.7"/>
    <Post image="https://th.bing.com/th/id/OIP.WKEYkERBRkBe8Ph7k6A-LgHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7" src="https://th.bing.com/th/id/OIP.h_SWAoj5tw44YwJnJ2XN3QHaEz?w=287&h=186&c=7&r=0&o=5&pid=1.7"/>
    <Post image="https://th.bing.com/th/id/OIP.mBi3pgZMmHtbmlScJcL8NQHaFj?w=194&h=180&c=7&r=0&o=5&pid=1.7" src="https://th.bing.com/th/id/OIP.g9FCVHA6inzoUok2lRRb8AHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7"/>
    <Post image="https://th.bing.com/th/id/OIP.iucCiogGQJfKZJBHB-wtWwHaEo?w=272&h=180&c=7&r=0&o=5&pid=1.7" src="https://th.bing.com/th/id/OIP.mYn_IRtNahCHoy5y_-BuRwHaF7?w=206&h=180&c=7&r=0&o=5&pid=1.7"/>
    </Box>
  )
}

export default Feed
