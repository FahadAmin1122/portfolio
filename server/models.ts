
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  githubUrl: String,
  liveUrl: String
});

const skillSchema = new mongoose.Schema({
  name: String,
  level: Number,
  category: String
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Message = mongoose.model('Message', messageSchema);
