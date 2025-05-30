//import Button from "./components/Button";
//import  Card  from "./components/Card";
import  imageOne from './imageOne.png';
import imageTwo from './Media.jpg';
//import {NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,} from "./components/NavigationMenu";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from 'react';
import {motion} from 'framer-motion';
import React from "react";




export default function FrameOne() {
  // Navigation items data
 const [isHover, setIsHover] = useState(false);

  // Review profiles data
  //const reviewProfiles = [1, 2, 3, 4, 5]; // Representing the 5 profile images

  return (
    
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1792px]">
        <div className="relative min-h-screen bg-blue-50">
          <header className="flex items-center justify-between w-full max-w-[1243px] h-14 mx-auto pt-[45px]">
            {/* Logo */}
            <div className="flex items-center h-[50px]">
              <h1 className="font-sans text-[40px] leading-[50px] tracking-[0]">

                
                <span className="font-bold text-[#286f6c]">J</span>
                <span className="font-normal text-[#1e1e1e]">R</span>
              </h1>
            </div>

           
            
            
            
          </header>

          <main className="flex flex-col w-full max-w-[1245px] mx-auto mt-[224px]">
            <div className="flex justify-between">
              {/* Left Content */}
              <div className="max-w-[883px]">
                {/* Intro Text */}
                <div className="flex flex-col items-start">
                  <h2 className="font-['Bubblegum_Sans-Regular',Helvetica] text-5xl text-x-5 leading-[58px] tracking-[0]">
                    Hello, there! I'm
                  </h2>
                  
                  <h1 className="font-h1 font-semibold text-indigo-600 text-[48px] leading-[58px] tracking-[0]">
                    Jedidiah Ravhuhali.
                  </h1>
          
                </div>



             {/* Vector Image Placeholder */}
             <div className="relative mt-20">
               <img
                 src={imageOne}
                 alt="Decorative vector"
                 className="w-[509px] h-[229px]"
               />
               
             </div>




                

                {/* Experience */}
                <div style={{marginBottom:"100px"}}className="flex items-center gap-2.5 mt-16">
                  <span className="font-semibold text-x-2 text-4xl leading-[46px] tracking-[0]">
                    02
                  </span>
                  <span className="font-medium text-x-5 text-base leading-[26px] tracking-[0]">
                    YEARS
                    <br />
                    EXPERIENCE
                  </span>
                </div>

              
              </div>

              {/* Center - Profile Image  */}
              <div style={{ overFlow:"clip"}} onMouseEnter={(e) =>setIsHover(true)}
                onMouseLeave={(e) =>setIsHover(false)}>
              <div className="absolute left-1/2 transform -translate-x-1/4 top-[345px]">
                <div className="relative">
                  <div className="w-[482px] h-[482px] rounded-full bg-x-2/10"></div>
                  <motion.div animate ={{scale: isHover?1.2:1,}} transition={{ease: 'easeIn', duration:0.2,}} className="absolute top-[5px] left-[15px] w-[472px] h-[471px] rounded-full overflow-hidden">
                    <img
                      src={imageTwo}
                      alt="John Deo profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                </div>
              </div></div>

              {/* Right Content */}
              <div className="flex flex-col items-end">
                {/* Tagline */}
                <p className="font-normal text-x-5 text-lg text-right leading-7 tracking-[0] max-w-[347px]">
                  I code and draw.
                </p>

                {/* Reviews Card */}
                {/*<Card className="w-[310px] h-[126px] mt-[316px] bg-[#ffffffe6] rounded-[10px] shadow-[10px_24px_30px_#0000001a]"></Card>*/}

                {/* Designer Title */}
                <div className="mt-[179px] text-right">
                  <p className="font-['Corvetta_Personal_Use-Regular',Helvetica] text-x-5 text-[26px] leading-9">
                    Software &
                  </p>
                  <p className="font-semibold text-x-2 text-[26px] leading-9 ml-[106px]">
                    frontend developer.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}