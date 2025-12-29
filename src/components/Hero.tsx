import { useGSAP } from '@gsap/react'
import HeroLeft from '../../public/public/images/hero-left-leaf.png'
import HeroRight from '../../public/public/images/hero-right-leaf.png'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { Box } from '@mui/material';
import { useMediaQuery } from "react-responsive"
import gsap from 'gsap'
import video from "../../public/public/videos/output.mp4"
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {
      type: 'chars,words',
    });
    const paragraphSplit = new SplitText('.subtitle', { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.05,
      ease: "expo.out",
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,

      }
    }).to('.right-leaf', { y: 200, }, 0)
      .to('.left-leaf', { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";

    const endValue = isMobile ? "120% 50%" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        scrub: true,
        pin: true,
        start: startValue,
        end: endValue
      }
    });
    if (!videoRef.current) return;

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
       
      });
    };
  }, [])
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src={HeroLeft} alt="left-leaf" className='left-leaf' />
        <img src={HeroRight} alt="right-leaf" className='right-leaf' />

        <Box className='body'>
          <Box className="content">
            <Box className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className='subtitle'>
                Sip the Spirit <br />of summer
              </p>
            </Box>
            <Box className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </Box>
          </Box>
        </Box>
      </section>
      <div className="video absolute inset-0">
        <video src={video} muted playsInline preload='auto' ref={videoRef} />
      </div>
    </>

  )
}

export default Hero
