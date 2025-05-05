//import { Button } from "@/components/ui/button";
//import {NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,} from "@/components/ui/navigation-menu";
//import { Separator } from "@/components/ui/separator";
import imgThree from "./imageThree.png";
import { Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";


export default function FrameTwo() {
  // Navigation items data
  

  // Social media icons data
  const socialIcons = [
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Mail, label: "Email" },
  ];

  return (
    <div className="bg-[#f9faff] flex flex-row justify-center w-full">
      <div className="bg-blue-50 w-full max-w-[1440px] min-h-[944px] relative">
        {/* Header */}
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
          
            <h1 className="self-stretch font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] [font-style:var(--title-h2-font-style)] text-indigo-600">
              <section id="b" >About me</section>
              
            </h1>
            <a href="#home">Want to go back to home page?</a>
            

            <p className="self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-2xl leading-9">
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis
              tortor neque auctor dis ipsum. Pretium cras amet odio amet
              eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet
              sit.
            </p>

              
          </div>

          {/* Profile image */}
          <img src={imgThree} alt="Myself"className="w-[524px] h-[524px] bg-brand-yellow rounded-[262px] bg-[100%_100%]" />
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-center gap-8 absolute bottom-[50px] left-0 right-0">
          <div className="flex items-center gap-6">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <IconComponent
                  key={index}
                  className="w-12 h-12 text-font-high-emphasis"
                  aria-label={social.label}
                />
              );
            })}
          </div>

          <div className="[font-family:'Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-base">
          Jedidiah Ravhuhali 2025
          </div>
        </footer>
      </div>
    </div>
  );
}