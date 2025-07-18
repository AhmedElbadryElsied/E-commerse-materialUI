import { Box, useTheme } from '@mui/material'
import React from 'react'
import Hero from '../Components/Hero/Hero'
import Main from '../Components/mainContent/Main'

function Home() {

    const theme = useTheme()

  return (
    <Box
      bgcolor={theme.palette.bg.main}
      >
      <Hero  />


     <Main />

      </Box>
  )
}

export default Home