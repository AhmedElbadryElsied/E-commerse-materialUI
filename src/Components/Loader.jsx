import { CircularProgress, Stack } from '@mui/material'

function Loader() {



    
  return (
   <Stack 
   sx={{ 

    height:"100vh",
    alignItems:"center",
    justifyContent:"center"

    }} 
   
   direction="row"
   >
    
      <CircularProgress color="error" />
    </Stack>
  )
}

export default Loader