//import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
//import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Mail } from "lucide-react";
import imageFour from './imageFour.png';
import React from "react";

export default function Frame() {
  // Navigation links data
  const navLinks = [
    { title: "About", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Contacts", href: "#" },
  ];

  // Project data
  const projects = [
    {
      name: "Project Name",
      description:
        "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      imagePosition: "right",
      imageSrc: "", // Placeholder for pexelsEllyFairytale38232071
    },
    {
      name: "Project Name",
      description:
        "What was your role, your deliverables, if the project was personal, freelancing.",
      imagePosition: "left",
      imageSrc: "", // Placeholder for rectangle7
    },
    {
      name: "Project Name",
      description:
        "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      imagePosition: "right",
      imageSrc: "", // Placeholder for rectangle72
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Instagram className="w-12 h-12" />, href: "#" },
    { icon: <Linkedin className="w-12 h-12" />, href: "#" },
    { icon: <Mail className="w-12 h-12" />, href: "#" },
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px]">
        <div className="relative bg-blue-50">
          {/* Hero Section */}
          <div className="w-full h-[629px] relative">
            <div className="w-full h-[629px] relative">
              <img src={imageFour} alt="Myself"className="absolute w-1/2 h-[629px] top-0 right-0 bg-[100%_100%]"/>
              

              <header className="absolute w-full h-14 top-0 left-0 bg-transparent flex justify-between px-[120px] items-center">
              <div className="flex items-center h-[50px]">
              <h1 className="font-sans text-[40px] leading-[50px] tracking-[0]">
                <section id="c">
                <span className="font-bold text-[#286f6c]">J</span>
                <span className="font-normal text-[#1e1e1e]">R</span></section>
                
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
              <div className="relative self-stretch font-['Nunito-Bold',Helvetica] font-bold text-indigo-600 text-xl tracking-[0] leading-normal">
                SOFTWARE/FRONTEND DEVELOPER
              </div>

              <div className="flex flex-col items-start gap-8">
                <h1 className="w-[486px] font-title-h1 font-[number:var(--title-h1-font-weight)] text-font-high-emphasis text-[length:var(--title-h1-font-size)] tracking-[var(--title-h1-letter-spacing)] leading-[var(--title-h1-line-height)]">
                  Hello,&nbsp;&nbsp;my name is Jedidah Ravhuhali
                </h1>

                <p className="w-[486px] font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-2xl leading-9 tracking-[0]">
                  Short text with details about you, what you do or your
                  professional career. You can add more information on the about
                  page.
                </p>

                <div className="flex items-start gap-3">
                  <button className="bg-brand-yellow text-font-high-emphasis rounded-lg px-6 py-2 h-auto">
                    <span className="font-['Roboto-Medium',Helvetica] font-medium text-lg leading-[27px]">
                      Projects
                    </span>
                    
                  </button>

                  <button
                    variant="outline"
                    className="border-2 border-bg-line text-font-high-emphasis rounded-lg px-6 py-2 h-auto"
                  >
                    <span className="font-['Roboto-Medium',Helvetica] font-medium text-lg leading-[27px]">
                      LinkedIn
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex flex-col items-center justify-center gap-20 py-20 px-[120px]">
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center leading-[var(--title-h2-line-height)] text-indigo-600">
                Projects
              </h2>
              
              <separator className="w-[100px] h-1 bg-brand-yellow rounded-sm" />
              <a href="#home">Want to go back to home page?</a>
            </div>

            {projects.map((project, index) => (
              <nav
                key={index}
                className="flex w-full max-w-[992px] h-[524px] rounded-3xl overflow-hidden shadow-[0px_6px_64px_#7090b01a] border-none"
              >
                {project.imagePosition === "left" && (
                  <img
                    className="w-1/2 h-full object-cover"
                    alt={project.name}
                    src={project.imageSrc}
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
                    
                  </div>
                </nav>

                {project.imagePosition === "right" && (
                  <img
                    className="w-1/2 h-full object-cover"
                    alt={project.name}
                    src={project.imageSrc}
                  />
                )}
              </nav>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center justify-center gap-8 py-16">
            <div className="flex items-start gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-font-high-emphasis"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="font-['Nunito-Regular',Helvetica] font-normal text-font-medium-emphasis text-base">
              Jedidiah Ravhuhali 2025
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}