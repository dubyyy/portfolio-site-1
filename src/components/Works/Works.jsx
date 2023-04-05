import React from 'react'
import worksCss from './Works.module.scss'
import {motion} from 'framer-motion'
import {workExp} from '../../utils/data.js'
function Works(){
     return(
       <div className={`paddings ${worksCss.wrapper}`}>
               
               <a className="anchor" id="experience"></a>
              <div className={worksCss.container}>
              <span className='primaryText yPaddings flexCenter'>My Work Experience</span>
              <div className={worksCss.experience} >
             {workExp.map((w,i)=>{
                            return <motion.div 
                            initial={{ y: 50,opacity: 0,}}
                            whileInView={{y:0,opacity:1,transition: {
                                          type: "spring",
                                          duration: 1.25,
                                          delay:(i+1)*0.5,
                                        }}}
                            className={worksCss.exp} key={i}>
                                 <div className={worksCss.post}>
                                          <h1 className='primaryText'>{w.place}</h1>
                                          <p className='secondaryText'>{w.tenure}</p>
                                 </div>
                                 <div className={worksCss.role}>
                                          <h1 className='primaryText'>{w.role}</h1>
                                          <p className='secondaryText'>{w.detail}</p>
                                 </div>
                             </motion.div>
                            
              })
}                    <div className={worksCss.progressbar}>
                            <div className={worksCss.line}></div>
                            
                            <div><div className={worksCss.circle1} style={{background:'#286F6C'}}></div></div>
                            <div><div className={worksCss.circle2} style={{background:'#F2704E'}}></div></div>
                            <div><div className={worksCss.circle3} style={{background:'#EEC048'}}></div></div>
                            
                     </div>
              </div>
              </div>
       </div>
)
}
export default Works