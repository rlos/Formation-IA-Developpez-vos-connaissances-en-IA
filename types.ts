
export interface FrameworkField {
  id: string;
  label: string;
  description: string; // Description courte
  detailedWhy: string; // Explication pédagogique "Pourquoi"
  examples: string[]; // 3 exemples concrets
  placeholder?: string; // Gardé pour compatibilité mais non utilisé dans la nouvelle vue
  lines?: number;
}

export interface Framework {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  whyUse: string;
  concreteExample: string;
  icon: string;
  fields: FrameworkField[];
  template: (values: Record<string, string>) => string;
  // Nouveau champ pour l'exemple final complet
  finalCompletePrompt: {
    scenario: string;
    text: string;
  };
}

export interface FormData {
  [key: string]: string;
}
