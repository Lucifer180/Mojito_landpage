import {Box, Typography} from "@mui/material"
import { navLinks } from '../constants';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import logo from '../../public/public/images/logo.png'
const Navbar = () => {
  useGSAP(()=>{
  const navTween=gsap.timeline({
    scrollTrigger:{
      trigger:"nav",
      start:"bottom top",

    }
  });

  navTween.fromTo('nav',{
    backgroundColor:"transparent",
  },{
    backgroundColor:"#00000050",
    backgroundFilter:"blur(10px)",
    duration:1,
    ease:'power1.inOut'
  })
  },[])
  return (
    <nav>
    <Box>
      <a href="#home" className='flex items-center gap-2'>
      <img src={logo} alt="" />
        <Typography variant="body1">Velvet Pour</Typography>
      </a>
      <ul>
        {navLinks.map((link:any)=>(
           <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
           </li>
        ))}
      </ul>
    </Box>
    </nav>
  )
}

export default Navbar
