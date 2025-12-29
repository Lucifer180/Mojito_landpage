import { Box } from "@mui/material"
import CLeftLeaf from "../../public/public/images/cocktail-left-leaf.png"
import CRightLeaf from "../../public/public/images/cocktail-right-leaf.png"
import { cocktailLists ,mockTailLists} from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Cocktails = () => {
    useGSAP(()=>{
      const parallaxTimeline=gsap.timeline({
        scrollTrigger:{
            trigger:"#cocktails",
            start:"top 30%",
            end:"bottom 80%",
            scrub:true
        }
      });
      parallaxTimeline
      .from("#c-left-leaf",{
        x:-100,y:100
      })
      .from("#c-right-leaf",{
        x:100,y:100
      })
    },[])
  return (
    <section id='cocktails' className='noisy'>
        <img src={CLeftLeaf} alt="l-leaf" id="c-left-leaf" />
        <img src={CRightLeaf} alt="r-leaf" id="c-right-leaf" />

     <Box className="list">
      <Box className="popular">
        <h2>Popular Cocktails</h2>

        <ul>
            {cocktailLists.map(({name,country,detail,price})=>(
                <li key={name}>
                    <Box className="md:me-28">
                        <h3>{name}</h3>
                        <p>{country}|{detail}</p>
                    </Box>
                    <span>-{price}</span>
                </li>
            ))}
        </ul>
      </Box>
      <Box className="loved">
        <h2>Most Loved mocktails:</h2>
        <ul>
{mockTailLists.map(({name,country,detail,price})=>(
    <li key={name}>
        <Box className="me-28">
              <h3>{name}</h3>
                        <p>{country}|{detail}</p>
        </Box>
        <span>-{price}</span>
    </li>
))}
        </ul>
      </Box>
     </Box>
    </section>
  )
}

export default Cocktails
