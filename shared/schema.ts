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
  color: { type: String, required: true }
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

// MongoDB Models
export const Project = mongoose.model('Project', projectSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Message = mongoose.model('Message', messageSchema);