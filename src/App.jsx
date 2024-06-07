import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Leftbar from './components/Leftbar'
import { Box, Stack, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@emotion/react'
import { DarkMode } from '@mui/icons-material'

function App() {

  const [Mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: Mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme} >
            <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar Mode={Mode} setMode={setMode}/>
    <Feed/>
    <Leftbar/>
    </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default App
