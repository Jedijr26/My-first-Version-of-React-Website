//import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";

//import { Instagram, Linkedin, Mail } from "lucide-react";
import {motion} from 'framer-motion';
import {useState} from 'react';
import React from "react";

export default function AboutWithForm() {
  const[isHover, setIsHover]=useState(false);

  const articles={
    nav:{
         display: "flex",
         marginLeft:"1100px",
         marginTop:"100px",
        
         gap:"4rem",
    },
    title:{
      flex:1,
    },
    value1:{
       overFlow:"clip", borderRadius:"1rem", width:"100px", height:"30px", border:"2px solid black",
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "270d92ab-bb43-4514-8a82-53deca9ac82a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

 

  // Form fields data
 

  return (
    <div className="bg-[#bdc7fa] flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] relative">

        {/* Header */}
        <div>
        <nav  id ="d" style={articles.nav} >
          <nav style={articles.title} onMouseEnter={(e) =>setIsHover(true)}
                onMouseLeave={(e) =>setIsHover(false)}>
            <motion.nav className=" bg-teal-500" style={articles.value1} animate ={{scale: isHover?1.5:1,}} transition={{ease: 'easeIn', duration:0.2,
             }}><a href="a" style={{color:"white", marginLeft:"25px"}}>Home</a></motion.nav>
             
          </nav>
          
        </nav>
        </div>
        
        <header style={{marginBottom:"90px"}} className="w-full h-14 py-3.5 px-[120px] flex justify-between items-center">
        <div className="flex items-center h-[50px]">
              <h1 className="font-sans text-[40px] leading-[50px] tracking-[0]">

                
                <span className="font-bold text-[#286f6c]">J</span>
                <span className="font-normal text-[#1e1e1e]">R</span>
              </h1>
            </div>

          
        </header>

        {/* About Section */}
        <div className="flex flex-row justify-between px-[120px] mt-[200px]">
          <div className="flex flex-col w-[588px] items-start gap-8">
            <h1 style={{marginTop:"-30%"}} className="w-[486px] [font-family:'Playfair_Display-Bold',Helvetica] font-bold text-[#333333] text-5xl tracking-[0] leading-[62.4px]">
              Contact
              
            </h1>
            <separator className="w-[1000px] h-1 bg-teal-500 rounded-sm" />
            

           
          </div>

          {/*<div className="w-[524px] h-[524px] bg-[#fdc435] rounded-[262px]  bg-[100%_100%]" />*/}
        </div>

        {/* Skills Section */}
        <div className="w-full mt-[468px]">
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center leading-[var(--title-h2-line-height)] tracking-[var(--title-h2-letter-spacing)] [font-style:var(--title-h2-font-style)]">
            
            </h2>
            
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-center justify-center gap-14 mt-14">
            <div style={{marginTop:"-40%"}}  className="border-none shadow-none bg-transparent">
              <section className="p-0">

                <form onSubmit={onSubmit} className="flex flex-col items-end justify-center gap-6">

                  <label for="Name" style={{marginRight:"600px"}}className="[font-family:'Nunito-SemiBold',Helvetica] font-semibold text-font-high text-base">Name:</label>
                <input type="text" name="name"  className="flex flex-col items-start gap-2 w-full h-10 bg-bg-white rounded-lg border border-solid border-[#e7ebf4]"/>
                      
                <label for="Email" style={{marginRight:"600px"}} className="[font-family:'Nunito-SemiBold',Helvetica] font-semibold text-font-high text-base">Email:</label>
                <input type="text" name="email"  className="flex flex-col items-start gap-2 w-full h-10 bg-bg-white rounded-lg border border-solid border-[#e7ebf4]"/>
                
                
                <label for="message" style={{marginRight:"600px"}}  className="[font-family:'Nunito-SemiBold',Helvetica] font-semibold text-font-high text-base">Message:</label>   
                <textarea name="message"  className=" h-40 bg-bg-white w-full rounded-lg border border-solid border-[#e7ebf4]"></textarea>


                


<div style={{backgroundColor:"white", overFlow:"clip", borderRadius:"1rem", width:"100px", height:"30px"}} onMouseEnter={(e) =>setIsHover(true)}
                onMouseLeave={(e) =>setIsHover(false)}>
                  <motion.button type="submit" style={{ borderRadius:"1rem",width:"100px", height:"30px",paddingBottom:"35px", border:"2px solid black"}} animate ={{scale: isHover?2:1,}} transition={{ease: 'easeIn', duration:0.2,
             }} className="h-auto px-6 py-2 bg-blue-500 rounded-lg" >
                    
                     
                     
                     
                      Send
                   
                  </motion.button></div>
                </form>
              </section>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center justify-center gap-8">
              

              <div style={{marginTop:"200px", marginBottom:"100px"}}className="[font-family:'Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-base tracking-[0]">
                Jedidiah Ravhuhali 2025
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}