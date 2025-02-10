
import type { Express, Request, Response } from "express";
import { createServer } from "http";
import { Project, Skill, Message } from './models';
import { insertProjectSchema, insertSkillSchema, insertMessageSchema } from '../shared/schema';
import { z } from "zod";

export function registerRoutes(app: Express) {
  // Projects routes
  app.get("/api/projects", async (_req: Request, res: Response) => {
    try {
      const projects = await Project.find().sort({ createdAt: -1 });
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.post("/api/projects", async (req: Request, res: Response) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const project = await Project.create(projectData);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create project" });
      }
    }
  });

  // Skills routes
  app.get("/api/skills", async (_req: Request, res: Response) => {
    try {
      const skills = await Skill.find().sort({ name: 1 });
      res.json(skills);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch skills" });
    }
  });

  app.post("/api/skills", async (req: Request, res: Response) => {
    try {
      const skillData = insertSkillSchema.parse(req.body);
      const skill = await Skill.create(skillData);
      res.status(201).json(skill);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create skill" });
      }
    }
  });

  // Messages route
  app.post("/api/messages", async (req: Request, res: Response) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await Message.create(messageData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create message" });
      }
    }
  });

  const server = createServer(app);
  return server;
}
