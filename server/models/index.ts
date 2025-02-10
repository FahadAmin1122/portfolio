
import mongoose from 'mongoose';
import { z } from 'zod';

// MongoDB Schemas
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  liveUrl: String,
  githubUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Zod Validation Schemas
export const insertProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional()
});

export const insertSkillSchema = z.object({
  name: z.string(),
  icon: z.string(),
  color: z.string()
});

export const insertMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
});

// MongoDB Models
export const Project = mongoose.model('Project', projectSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Message = mongoose.model('Message', messageSchema);

// TypeScript Types
export type ProjectType = mongoose.InferSchemaType<typeof projectSchema>;
export type SkillType = mongoose.InferSchemaType<typeof skillSchema>;
export type MessageType = mongoose.InferSchemaType<typeof messageSchema>;
