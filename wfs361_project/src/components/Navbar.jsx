import { hover } from 'framer-motion';
import React from 'react';


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
    hover,
        
   },
    a:{
        


   }
};
function Navbar() {
  return (
    
    <div style={{height:"60px"}} className="bg-neutral-400">
        <section id="home">
        <nav  style={styles.nav}>
            <nav style={styles.position}>
                <a href="a" style={styles.title}>Home</a>
            </nav>
            <nav style={styles.position}>
                <a a href="#b" style={styles.title}>About</a>
            </nav>
            <nav style={styles.position}>
                <a href="#c" style={styles.title}>Projects</a>
            </nav>
            <nav style={styles.position}>
                <a href="d" style={styles.title}>Contact</a>
            </nav>
        </nav>
        </section>

    </div>
    
  )
}

export default Navbar