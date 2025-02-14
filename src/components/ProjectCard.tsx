import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import LiveVideo from "./LiveVideo";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isLive, setIsLive] = useState(false);

  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-bold">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-7 ">
        {liveUrl && (
          <Button variant="outline" size="sm" onClick={() => setIsLive(true)} className=" hover:text-[#64FFDA]">
            <ExternalLink className="w-4 h-4 mr-2 " />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" className="hover:text-[#64FFDA]" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {isLive && <LiveVideo videoUrl={liveUrl!} onClose={() => setIsLive(false)} />}
      </CardFooter>
    </Card>
  );
}

// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import LiveVideo from "./LiveVideo";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// export default function ProjectCard({
//   title,
//   description,
//   image,
//   tags,
//   liveUrl,
//   githubUrl,

 

// }: ProjectCardProps) {
  
//   return (
//     <Card className="overflow-hidden group">
//       <div className="relative aspect-video overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-muted-foreground mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <Badge key={tag} variant="secondary">
//               {tag}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="gap-2">
//         {liveUrl && (
//           <Button variant="outline" size="sm" asChild onClick={ViewVideo}>
            
//           </Button>
//         )}
//         {/* {liveUrl && (
//           <Button variant="outline" size="sm" asChild>
//             <a href={liveUrl} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="w-4 h-4 mr-2" />
//               Live Demo
//             </a>
//           </Button>
//         )} */}
//         {githubUrl && (
//           <Button variant="outline" size="sm" asChild>
//             <a href={githubUrl} target="_blank" rel="noopener noreferrer">
//               <Github className="w-4 h-4 mr-2" />
//               Code
//             </a>
//           </Button>
//         )}
//         {isLive &&<LiveVideo />}
//       </CardFooter>
//     </Card>
//   );
// }
