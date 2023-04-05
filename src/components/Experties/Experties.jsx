import React from "react";
import expertiesCss from './Experties.module.scss';
//import projectExperience from '../../utils/data.js'
//import WhatDoIHelp from '../../utils/data.js'
import {projectExperience,WhatDoIHelp} from '../../utils/data.js'
import {motion} from 'framer-motion'
function Experties(){
   return(   
               <div className={expertiesCss.wrapper}> 
                   <a className='anchor' id='services' ></a>
                 <div className={`innerWidth flexCenter yPaddings paddings ${expertiesCss.container}`}>
                  <div className={expertiesCss.left}>
                            {projectExperience.map((exp,i)=>{
                                          return <motion.div 
                                          initial={{x:-100,opacity:0}}
                                          whileInView={{x:0,opacity:1,transition:{type:"tween",delay:(i+1)*0.2}}}
                                          whileHover={{scale:1.1}}
                                          whileTap={{scale:0.7}}
                                          className={expertiesCss.exp} key={i}>
                                              <div className="flexCenter">

                                              </div>
                                              <div>
                                                     <span className="primaryText">{exp.name}</span>
                                                     <span className="secondaryText">{exp.projects}</span>   
                                              </div>
                                          </motion.div>
                            })}
                  </div>
             <motion.div className={`paddings ${expertiesCss.right}`}
                   initial={{x:100,opacity:0}}
                   whileInView={{x:0,opacity:1,transition:{type:"spring",delay:0.5}}}
             
             >
                            <span className="primaryText">What do i help</span>
                            
                            {WhatDoIHelp.map((p,i)=>{
                                          return <span className="secondaryText" key={i}>{p}</span>
                                          
                            })}
                            <div className={expertiesCss.stats}>
                              <div className={expertiesCss.stat}>
                                <div className="primaryText">285+</div>
                                <div>
                                  <span>projects</span>
                                  <span>completed</span>
                                </div>
                              </div>
                              <div className={expertiesCss.stat}>
                                <div className="primaryText">190+</div>
                                <div>
                                  <span>Happy</span>
                                  <span>Clients</span>
                                </div>
                              </div>
                            </div>
                            
                            
                  </motion.div>
                 </div>
               </div>
               
)
}
export default Experties