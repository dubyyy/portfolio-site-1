import React from "react";
//import './Hero.module.scss'
import herocss from './Hero.module.scss'
import {motion} from 'framer-motion'

function Hero(){
              return(
              <div className={herocss.wrapper} >
                  <div className={`paddings ${herocss.container}`}>
                 
                     <motion.div 
                     initial={{x:-100,opacity:0}}
                     whileInView={{x:0,opacity:1,
                     transition:{
                            type:"tween",
                            delay:0.5,
                            duration:1,
                            ease: "easeOut",
                     }
                     }}
                     className={herocss.upperElements}>
                            <span className="primaryText">Hey There <br/>im Dubem</span>
                            <span className="secondaryText">i design build simple <br/> Frontend projects And i love what i do</span>
                     </motion.div>
             {/*   image at the middle*/}
                            <div className={herocss.person}>
                                <motion.img 
                                initial={{y:100,opacity:0}}
                                whileInView={{y:0,opacity:1,
                                   transition:{
                                   type:'tween',
                                   delay:0.5,
                                   duration:1,
                                   ease: "easeOut",
                                }}}
                                src="person.png" alt=""></motion.img>

                            </div>

             {/*   image at the middle*/}
             {/* Link  */}
             <a href="Chidubem.chukwuafu@gmail.com">Chidubem.chukwuafu@gmail.com</a>
             {/* Link  */}
                     <motion.div className={herocss.lowerElements}
                     
                     initial={{x:100,opacity:0}}
                     whileInView={{x:0,opacity:1,
                     transition:{
                            type:"tween",
                            delay:0.5,
                            duration:1,
                            ease: "easeOut",
                     }
                     }}
                     
                     >
                            <div className={herocss.experience}>
                                   <div className="primaryText">3+</div>
                                   <div className="secondaryText">
                                          <div>years</div>
                                          <div>experience</div>
                                   </div>
                            </div>
                            <div className={herocss.certificate}>
                                  <span>certified Frontend</span>
                                  <span>Frontend developer</span>
                            </div>
                            
                            </motion.div>

                            
                     </div> 
                     

                     </div>
                 
                  


              
              )

}
export default Hero