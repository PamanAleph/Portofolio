"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { GlareCard } from "@/components/ui/glare-card";
import { projectData } from "@/lib/data";
import Image from "next/image";
import PhotoProfile from "@/assets/PP.jpg";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section className="bg-black h-screen overflow-x-hidden">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Muhammad Alief Firmanda Dev
      </motion.h1>
    </LampContainer>
      {/* Project Display  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
        {projectData.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]">
              <h1 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-slate-100">
                PUFA Computing Website
              </h1>
              <div className="text-base !m-0 !p-0 font-normal text-center">
                <span className="text-slate-500">{project.status}</span>
              </div>
              <p className="text-slate-400 text-base !m-0 pt-2 font-normal text-justify">
                {project.description}
              </p>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}
