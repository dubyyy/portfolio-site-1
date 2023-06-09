import React, { useState } from 'react';
import headcss from "./Header.module.scss"
import {motion} from 'framer-motion'
import {FaAlignJustify} from 'react-icons/fa'
import getMenuStyles from '../../utils/motion'
import { IconContext } from 'react-icons/lib';
function Header(){
             const [menuOpened,setmenuOpened]=useState(false);
             
              return(
                <motion.div initial={{opacity: 0,
                  y: -50, transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 140,
                  }}}
                   whileInView={{opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      delay: .5,
                    }
                  }}
                  viewport={{once:false}}
                  className={headcss.wrapper}>
                   <div className={`flexCenter paddings ${headcss.container}`}>
                       <div className={headcss.name}>Binijan</div>
                       <ul className={`flexStart ${headcss.menu}`} style={getMenuStyles(menuOpened)}>
                            <li><a href='#services'>SERVICES</a></li>
                            <li><a href='#experience'>EXPERIENCE</a></li>
                            <li><a href='#'>PORTFOLIO</a></li>
                            <li><a href='#'>TESTIMONIALS</a></li>
                            <li><p>+234(0)90737027</p></li>
                       </ul>
                   </div>
                   <IconContext.Provider value={{size:'25px'}}>
                   <div className={headcss.menuIcon} onClick={()=>{setmenuOpened(!menuOpened)}}>
                    <FaAlignJustify/>
                    
                   </div>
                   </IconContext.Provider>
                </motion.div>
              )
}
export default Header