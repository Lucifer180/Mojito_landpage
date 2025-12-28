import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Box } from '@mui/material'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
   <main>
    <Navbar />
    <Hero />
    <Box className="h-screen"></Box>
   </main>
  )
}

export default App
