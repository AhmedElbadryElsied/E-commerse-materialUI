import  {  useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Dialog, IconButton, Rating, Stack } from '@mui/material';
import { AddShoppingCart, Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';



function Cardes({item}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 

  return (
    <Box>


      

      <Card 
      className='card-animation' 
      sx={{mt:5, maxWidth: "100%" ,"&:hover .animat": {
      scale:"1.1",
      rotate:"2deg",
    }, }}>
    <CardMedia
      className='animat'
      sx={{ height:"350px" ,transition:"0.5s"}}
      image= {item.imgs[0]}
      title="green iguana"
    />
    <CardContent>


    <Stack
    
    direction="row"
    justifyContent= "space-between"
    alignItems="center"
    >

    <Typography 
      sx={{
        fontSize:"22px",
      }}
      gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
    <Typography 
      sx={{
        fontSize:"17px",
      }}
      gutterBottom variant="h5" component="div">
       ${item.price}
      </Typography>

    </Stack>

      



      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {item.describtion}
      </Typography>




    </CardContent>



    <CardActions
    
    sx={{
        justifyContent:"space-between"
    }}
    
    >
      <Button size="small"
      
      onClick={handleClickOpen}
      
      >

      <AddShoppingCart 
      
      fontSize='small'
      sx={{
        mr:"10px"
      }}
      
      />

      Add To Cart 

      </Button>


      <Rating sx={{fontSize:"18px"}} name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
      
    </CardActions>
  </Card>


  <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "90%", md: "800px" },
              position: "relative",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
              "&:hover": {
                color: "red",
                rotate: "180deg",
                transition: " 0.3s ",
              },
            }}
          >
            <Close />
          </IconButton>

          <ProductDetails  item={item} handleClose={handleClose}/>
        </Dialog>



    </Box>
  )
}

export default Cardes