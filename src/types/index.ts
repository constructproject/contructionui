export interface ConsultationFormData {
  name: string;
  number: string;
  city: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: 'projects' | 'ongoing' | 'customers' | 'area' | 'team';
}