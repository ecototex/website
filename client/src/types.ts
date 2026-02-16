export interface Bag {
  code: string;
  name: string;
  material: string;
  weight: string;
  price: string;
  whatsappProductId?: string;
  plasticOffset: number;
  imagePath: string;
  colors: string[];
  dimensions: string;
  capacityKg: number;
  features: {
    [key: string]: boolean;
  };
  pocketCount: number;
  description: string;
  sustainabilityStory: string;
}
