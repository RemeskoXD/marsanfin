import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  logoUrl?: string; // Optional if we use text placeholders
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
}

export interface DocumentItem {
  title: string;
  type: 'PDF' | 'DOCX';
  date: string;
}