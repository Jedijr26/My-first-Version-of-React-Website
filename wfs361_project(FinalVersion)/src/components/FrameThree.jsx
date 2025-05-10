//import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
//import { Separator } from "@/components/ui/separator";
//import { Instagram, Linkedin, Mail } from "lucide-react";
//import imageFour from './Projects.jpg';
import projectOne from './Prg 262 Group Projectv2.mp4';
import projectTwo from './Prg261 Group Project.mp4';
import projectThree from './Wpr261 Groupproject.mp4';
import { useState } from 'react';
import {motion} from 'framer-motion';
import React from "react";




export default function Frame () {

const [isHover, setIsHover] = useState(false);

  // Navigation links data
  const navLinks = [
    { title: "", href: "#" },
    { title: "", href: "#" },
    { title: "", href: "#" },
  ];
 
  const articles={
    nav:{
         display: "flex",
         marginLeft:"1100px",
         marginTop:"50px",
         gap:"4rem",
    },
    title:{
      flex:1,
    },
    value1:{
       overFlow:"clip", borderRadius:"1rem", width:"100px", height:"30px",marginTop:"60px", border:"2px solid black"
    }
  };
  // Project data
  const projects = [
    {
      name: "Windows-based application",
      description:
        "In this project we created a Windows-based application for a local gym to manage member information which includes a graphical user interface built with Windows Forms alongside CRUD functions",
      languages: "Languages: C#",  
      imagePosition: "right",
      imageSrc: "", // Placeholder for pexelsEllyFairytale38232071
    },
    {
      name: "CMD Application",
      description:
        "A command prompt application that determines the list of students who have qualified for high performing student discount with input records that contains student’s information.",
        languages: "Languages: C#", 
      imagePosition: "left",
      imageSrc: "", // Placeholder for rectangle7
    },
    {
      name: "Recipe website",
      description:
        "an interactive recipe website that allow users to search for recipes, view details, and interact with the recipe content.",
        languages: "Languages: JavaScript", 
      imagePosition:"bottom",
      imageSrc: "", // Placeholder for rectangle72
    },
  ];


  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1940px]">
        <div className="relative bg-slate-800">
          {/* Hero Section */}
          <div className="w-full h-[629px] relative">
            <div className="w-full h-[629px] relative">
             

            <div>
                    <nav style={articles.nav} >
                      <nav style={articles.title} onMouseEnter={(e) =>setIsHover(true)}
                            onMouseLeave={(e) =>setIsHover(false)}>
                        <motion.nav className=" bg-teal-500" style={articles.value1} animate ={{scale: isHover?1.5:1,}} transition={{ease: 'easeIn', duration:0.2,
                         }}><a href="a" style={{color:"white", marginLeft:"25px"}}>Home</a></motion.nav>
                      </nav>
            
                    </nav>
                    </div>
              

              <header className="absolute w-full h-14 top-0 left-0 bg-transparent flex justify-between px-[120px] items-center">
              <div className="flex items-center h-[50px]">
              <h1 style={{marginTop:"40px"}} className="font-sans text-[40px] leading-[50px] tracking-[0]">
                <section id="c">
                  
                <span className="font-bold text-[#286f6c]">J</span>
                <span className="font-normal text-[#1e1e1e]">R</span>
                </section>
                
              </h1>
            </div>

                <nav className="flex items-center gap-12">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="font-body-18px text-font-high-emphasis text-[length:var(--body-18px-font-size)] tracking-[var(--body-18px-letter-spacing)] leading-[var(--body-18px-line-height)]"
                    >
                      {link.title}
                    </a>
                  ))}
                </nav>
              </header>
            </div>

            <div className="flex flex-col w-[486px] items-start gap-3 absolute top-[110px] left-[120px]">
            <h2 style={{marginLeft:"-20%"}} className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center leading-[var(--title-h2-line-height)] text-indigo-600">
                Projects
              </h2>

              <div className="flex flex-col items-start gap-8">
                <h1 className="w-[486px] font-title-h1 font-[number:var(--title-h1-font-weight)] text-font-high-emphasis text-[length:var(--title-h1-font-size)] tracking-[var(--title-h1-letter-spacing)] leading-[var(--title-h1-line-height)]">
                  
                </h1>

                <p className="w-[486px] font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-2xl leading-9 tracking-[0]">
                  
                </p>

                
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div style={{marginTop:"-38%"}}className="flex flex-col items-center justify-center gap-20 py-20 px-[120px]">
            <div className="flex flex-col items-center justify-center gap-1">
              
              
              <separator className="w-[1000px] h-1 bg-teal-500 rounded-sm" />
              
            </div>

            {projects.map((project, index) => (
              <nav
                key={index}
                className="flex w-full max-w-[992px] h-[524px] rounded-3xl overflow-hidden shadow-[0px_6px_64px_#7090b01a] border-none"
              >
                {/*Second project*/}
                {project.imagePosition === "left" && (
                  <video
                    className="w-1/2 h-full object-cover"
                    
                    src={projectTwo} autoPlay loop muted
                  />
                )}

                <nav className="w-1/2 h-full bg-bg-white p-0">
                  <div className="flex flex-col w-[407px] items-start gap-6 p-[50px] mt-[96px]">
                    <h3 className="self-stretch font-['Playfair_Display-Bold',Helvetica] font-bold text-font-high-emphasis text-[40px] leading-[60px] tracking-[0]">
                      {project.name}
                    </h3>
                    <p className="self-stretch font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-lg leading-[27px] tracking-[0]">
                      {project.description}
                    </p>
                    <p className="self-stretch font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-lg leading-[27px] tracking-[0]">
                      {project.languages}
                    </p>
                    
                  </div>
                </nav>
                   {/*Last Project project*/}
                {project.imagePosition === "bottom" && (
                  <video
                    className="w-1/9 h-full object-cover"
                    
                    src={projectThree} autoPlay loop muted
                  />
                )}
                   {/*First project*/}
                {project.imagePosition === "right" && (
                  <video
                    className="w-1/9 h-full object-cover"
                    
                    src={projectOne} autoPlay loop muted
                  />
                )}
              </nav>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center justify-center gap-8 py-16">
            
            <div className="font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-base">
              Jedidiah Ravhuhali 2025
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}