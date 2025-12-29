import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
   <main>
    <Navbar />
    <Hero />
    {/* <Box className="h-screen"></Box> */}
    <Cocktails />
   </main>
  )
}

export default App
