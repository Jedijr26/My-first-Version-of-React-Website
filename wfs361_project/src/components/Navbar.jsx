//import { hover } from 'framer-motion';
import React from 'react';
import {motion} from 'framer-motion';
import {useState} from 'react';




const styles={
    nav:{
        display: "flex",
        marginLeft: "700px",
      

    },
   position:{
    flex:1,
    marginTop:"15px",
   },
   title:{
    fontWeight:"bold",
    overFlow:"clip", border:"2px solid black",borderRadius:"0.5rem",color:"white", backgroundColor:"limegreen",padding:"5px",
   
        
   },
    
};
function Navbar() {
    const [isHover, setIsHover] = useState(false);
  return (
    
    <div style={{height:"60px"}} className="bg-neutral-400">
        <section id="#a">
        <section id="home">
        <nav onMouseEnter={(e) =>setIsHover(true)}
                                    onMouseLeave={(e) =>setIsHover(false)}  style={styles.nav}>
       
            <motion.nav  animate ={{scale: isHover?1.2:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }} style={styles.position}>
               
                <a href="a" style={styles.title}>Home</a>
                
            </motion.nav>
            <motion.nav  animate ={{scale: isHover?1.2:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }} style={styles.position}>
                <a href="#b" style={styles.title}>About</a>
            </motion.nav>
            <motion.nav  animate ={{scale: isHover?1.2:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }} style={styles.position}>
                <a href="#c" style={styles.title}>Projects</a>
            </motion.nav>
            <motion.nav  animate ={{scale: isHover?1.2:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }} style={styles.position}>
                <a href="#d" style={styles.title}>Contact</a>
            </motion.nav>
         
        </nav>
        </section>
        </section>

    </div>
    
  )
}

export default Navbar