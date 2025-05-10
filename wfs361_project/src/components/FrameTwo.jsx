//import { Button } from "@/components/ui/button";
//import {NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,} from "@/components/ui/navigation-menu";
//import { Separator } from "@/components/ui/separator";
import imgThree from "./programming.jpg";
import gaming from "./gaming.jpg";
import art from "./art.jpg";
import git from "./github.jpg";
import mail from "./mail.png";
import { Instagram, Linkedin, Mail } from "lucide-react";
import {motion} from 'framer-motion';
import {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import React from "react";


export default function FrameTwo() {
  // Navigation items data
  const [isHover, setIsHover] = useState(false);

  const articles={
    nav:{
         display: "flex",
         marginLeft:"1100px",
         marginTop:"90px",
         marginBottom:"-8%",
         gap:"4rem",
    },
    title:{
      flex:1,
    },
    value1:{
       overFlow:"clip", border:"2px solid black",borderRadius:"1rem", width:"100px", height:"30px",marginTop:"40px"
    }
  };
  
  // Social media icons data


  return (
    <div className="bg-orange-400 flex flex-row justify-center w-full h-[1004px]">
      <div className="bg-orange-400 w-full max-w-[1840px] min-h-[144px] relative">
        {/* Header */}

         <div>
                            <nav style={articles.nav} >
                              <nav style={articles.title} onMouseEnter={(e) =>setIsHover(true)}
                                    onMouseLeave={(e) =>setIsHover(false)}>
                                <motion.nav className=" bg-teal-500" style={articles.value1} animate ={{scale: isHover?1.5:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }}><a href="a" style={{color:"white", marginLeft:"25px"}}>Home</a></motion.nav>
                              </nav>
     <BrowserRouter> 
     <nav style={articles.title} onMouseEnter={(e) =>setIsHover(true)}
                                    onMouseLeave={(e) =>setIsHover(false)}>
     <motion.nav  animate ={{scale: isHover?1.5:1,}} transition={{ease: 'easeIn', duration:0.2,
                                 }}>                                   
<Link to="https://github.com/Jedijr26">
<img src={git} style={{width:"35px", height:"30px", borderRadius:"8rem", marginTop:"40px",marginRight:"60px"}} alt="Myself" /></Link></motion.nav> </nav></BrowserRouter>
                            </nav>
                            </div>
        <header className="w-full h-14 py-3.5 px-[120px] flex justify-between items-center">
        <div className="flex items-center h-[50px]">
              <h1 className="font-sans text-[40px] leading-[50px] tracking-[0]">
                <span className="font-bold text-[#286f6c]">J</span>
                <span className="font-normal text-[#1e1e1e]">R</span>
              </h1>
            </div>

          
                      
    
        </header>

        {/* Main content */}
        <main className="flex flex-row justify-between px-[120px] pt-[199px]">
          {/* About section */}
          
          <div className="flex flex-col w-[588px] items-start gap-8">
          
            <h1 style={{marginTop:"-30%"}} className="self-stretch font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] [font-style:var(--title-h2-font-style)] text-indigo-600">
              <section id="b" >About me</section>
              
            </h1>
            
            
<form style={{backgroundColor:"white", border:"3px solid black", borderRadius:"1rem", padding:"20px", width:"1000px"}}>
            <p style={{color:"black"}} className="self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-2xl leading-9">
            Jedidiah "Jedi" for short who resides in Bronkhorstspruit.
He loves drawing and sometimes expresses his inner feelings by putting colour onto paper.
He has a place in his heart for gaming as well.
His dream is to become a software/frontend devloper where he would specialise in designing applications & websites.
<hr>
</hr>
<h2>Education</h2>
<p>High school: Hoerskool Erasmus(2016 - 2020)</p>
<p>University: Diploma at Belgium Campus ITversity(2022 - current)</p>
<hr></hr>
<h2>Experience</h2>
<p>(2023- current) software/frontend designer </p>
<hr></hr>
<h2>Skills & IDE's</h2>
<p>Python, Java, JavaScript, C#, IntelliJ, NetBeans,Pycharm</p>
<hr></hr>
<h1>Link me up via</h1>

<img src={mail} style={{width:"35px", height:"30px", borderRadius:"8rem", marginTop:"-1px",marginLeft:"90px"}} alt="Myself" />
<p>Jedidiah.rav@gmail.com</p>
            </p>
            </form>
              
          </div>

          {/* Profile image */}
          <img  src={imgThree} style={{border:"2px dashed ",marginBottom:"-1000px",marginRight:"-100px"}} alt="Myself"className="w-[200px] h-[200px] bg-brand-yellow rounded-[262px] bg-[100%_100%]" />
        </main>
        <motion.img whileInView={{scale:[1,2,1] , rotate:360}} transition={{duration:2}}src={gaming} style={{border:"2px dashed ",marginLeft:"200px", marginTop:"50px"}} alt="Myself"className="w-[200px] h-[200px] bg-brand-yellow rounded-[262px] bg-[100%_100%]" />
        
        {/* Footer */}
        <footer style={{marginRight:"-600px"}} className="flex flex-col items-center justify-center gap-8 absolute bottom-[50px] left-0 right-0">
          <div className="flex items-center gap-6">
          <motion.img whileInView={{scale:[1,2,1] , rotate:360}} transition={{duration:2}} src={art} style={{border:"2px dashed ",marginRight:"20px", marginTop:"50px"}} alt="Myself"className="w-[200px] h-[200px] bg-brand-yellow rounded-[262px] bg-[100%_100%]" />
          </div>

          
        </footer>
      </div>
    </div>
  );
}