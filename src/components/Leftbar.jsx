import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box sx={{position:"fixed",width:"300"}}>
<Typography  variant='h6'>Online Friends</Typography>

<AvatarGroup max={5} sx={{display:"flex", justifyContent:"flex-end",mt:'30px'}}>
  <Avatar src='https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?w=184&h=183&c=7&r=0&o=5&pid=1.7'/>
  <Avatar src='https://th.bing.com/th/id/OIP.wYmBKaXZqgIBPkDdGk0H6AHaFj?w=640&h=480&rs=1&pid=ImgDetMain'/>
  <Avatar src='https://propakistani.pk/wp-content/uploads/2021/01/Babar-Azam-2.png'/>
  <Avatar src='https://th.bing.com/th/id/OIP.mkA8HAQ8-Z2C5AIyFMpJ1wEsEs?w=183&h=183&c=7&r=0&o=5&pid=1.7'/>
  <Avatar src='https://th.bing.com/th/id/OIP.oNXrZdRt4aVDO3WHQY7JAAHaLH?w=122&h=183&c=7&r=0&o=5&pid=1.7'/>
  <Avatar src='https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?w=184&h=183&c=7&r=0&o=5&pid=1.7'/>
  <Avatar src='https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?w=184&h=183&c=7&r=0&o=5&pid=1.7'/>
  <Avatar src='https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?w=184&h=183&c=7&r=0&o=5&pid=1.7'/>


</AvatarGroup>
<ImageList sx={{mt:"20px"}}  cols={3} rowHeight={100} gap={6}>
<ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
         
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.EAzMf4436BdR-LVn7u_TOAHaJ4?w=132&h=180&c=7&r=0&o=5&pid=1.7" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://www.pcb.com.pk/timthumb.php?src=images/news_images/featured_images/f281bf334461.jpeg&w=675" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Leftbar
