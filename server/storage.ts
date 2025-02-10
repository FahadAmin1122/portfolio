import { users, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { Project, Skill, Message } from './models';


// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // Projects
  getProjects(): Promise<ProjectType2[]>;
  getProject(id: string): Promise<ProjectType2 | null>;
  createProject(project: Partial<ProjectType2>): Promise<ProjectType2>;

  // Skills
  getSkills(): Promise<SkillType2[]>;
  getSkill(id: string): Promise<SkillType2 | null>;
  createSkill(skill: Partial<SkillType2>): Promise<SkillType2>;

  // Messages
  createMessage(message: Partial<MessageType2>): Promise<MessageType2>;
  getMessages(): Promise<MessageType2[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  //Projects
  async getProjects(): Promise<ProjectType2[]> {
    throw new Error("Method not implemented.");
  }
  async getProject(id: string): Promise<ProjectType2 | null> {
    throw new Error("Method not implemented.");
  }
  async createProject(project: Partial<ProjectType2>): Promise<ProjectType2> {
    throw new Error("Method not implemented.");
  }
  //Skills
  async getSkills(): Promise<SkillType2[]> {
    throw new Error("Method not implemented.");
  }
  async getSkill(id: string): Promise<SkillType2 | null> {
    throw new Error("Method not implemented.");
  }
  async createSkill(skill: Partial<SkillType2>): Promise<SkillType2> {
    throw new Error("Method not implemented.");
  }
  //Messages
  async createMessage(message: Partial<MessageType2>): Promise<MessageType2> {
    throw new Error("Method not implemented.");
  }
  async getMessages(): Promise<MessageType2[]> {
    throw new Error("Method not implemented.");
  }
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<ProjectType[]> {
    return await Project.find().sort({ createdAt: 1 });
  }

  async getProject(id: string): Promise<ProjectType | null> {
    return await Project.findById(id);
  }

  async createProject(project: Partial<ProjectType>): Promise<ProjectType> {
    return await Project.create(project);
  }

  async getSkills(): Promise<SkillType[]> {
    return await Skill.find().sort({ name: 1 });
  }

  async getSkill(id: string): Promise<SkillType | null> {
    return await Skill.findById(id);
  }

  async createSkill(skill: Partial<SkillType>): Promise<SkillType> {
    return await Skill.create(skill);
  }

  async createMessage(message: Partial<MessageType>): Promise<MessageType> {
    return await Message.create(message);
  }

  async getMessages(): Promise<MessageType[]> {
    return await Message.find().sort({ createdAt: 1 });
  }
  async getUser(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: InsertUser): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export const storage = new DatabaseStorage();