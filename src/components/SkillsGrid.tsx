import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiGithub
} from "react-icons/si";


const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
      {skills.map(({ name, icon: Icon, color }) => (
        <Card key={name} className="group hover:border-primary transition-colors bg-[#003d3d] border border-[#7d7d7d]">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-sm text-[#FCFCFC]">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Icon
              className="w-12 h-12 transition-transform group-hover:scale-110"
              style={{ color  }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
