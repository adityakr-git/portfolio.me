export interface SkillItem {
  id: string;
  name: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Database' | 'Core';
  icon: string;
  summary: string;
  technologies: string[];
  strengths: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info';
}
