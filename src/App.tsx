import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import {Box}from "@mui/material"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <Box className='flex-center h-screen'>
   <h1 className='text-3xl text-indigo-300'>Hello World</h1>
    </Box>
  )
}

export default App
