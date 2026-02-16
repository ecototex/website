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
    waterResistant: boolean;
    laptopSleeve: boolean;
    usbPort: boolean;
  };
  pocketCount: number;
  description: string;
  sustainabilityStory: string;
}
