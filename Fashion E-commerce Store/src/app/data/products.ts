export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women' | 'shoes';
  subcategory: string;
  image: string;
  images: string[];
  sizes: string[];
  trending?: boolean;
  description: string;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: 'M001',
    name: 'Premium Formal Suit',
    price: 12500,
    category: 'men',
    subcategory: 'Suits',
    image: 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmb3JtYWwlMjBzdWl0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI4MTg4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmb3JtYWwlMjBzdWl0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI4MTg4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1626872640220-e5f4454198b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjBzdWl0JTIwbmF2eSUyMGJsdWV8ZW58MXx8fHwxNzcyODY1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    trending: true,
    description: 'Elegant formal suit perfect for business meetings and special occasions'
  },
  {
    id: 'M002',
    name: 'Casual Streetwear Set',
    price: 4500,
    category: 'men',
    subcategory: 'Casual',
    image: 'https://images.unsplash.com/photo-1741698464215-0dc2c5a5aac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBzdHJlZXR3ZWFyJTIwb3V0Zml0fGVufDF8fHx8MTc3MjgxODgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1741698464215-0dc2c5a5aac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBzdHJlZXR3ZWFyJTIwb3V0Zml0fGVufDF8fHx8MTc3MjgxODgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772521239245-844fe3a0d66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBzdHJlZXR3ZWFyJTIwaG9vZGllfGVufDF8fHx8MTc3Mjg2NTc5MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
    description: 'Modern streetwear for everyday comfort and style'
  },
  {
    id: 'M003',
    name: 'Leather Jacket',
    price: 8900,
    category: 'men',
    subcategory: 'Jackets',
    image: 'https://images.unsplash.com/photo-1711477270962-5bd8fd212540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI3NDc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1711477270962-5bd8fd212540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI3NDc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1675877879221-871aa9f7c314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwamFja2V0JTIwc3R5bGVkfGVufDF8fHx8MTc3Mjg2NTc5MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    trending: true,
    description: 'Premium leather jacket with modern cut'
  },
  {
    id: 'M004',
    name: 'Denim Jeans',
    price: 3200,
    category: 'men',
    subcategory: 'Pants',
    image: 'https://images.unsplash.com/photo-1772521226580-c3c7e20b1537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkZW5pbSUyMGplYW5zJTIwY2FzdWFsfGVufDF8fHx8MTc3MjgxODgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1772521226580-c3c7e20b1537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkZW5pbSUyMGplYW5zJTIwY2FzdWFsfGVufDF8fHx8MTc3MjgxODgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1596766443408-5bf0fd6c0810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkZW5pbSUyMGplYW5zJTIwb3V0Zml0fGVufDF8fHx8MTc3Mjg2NTc5MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Classic denim jeans for any occasion'
  },
  {
    id: 'M005',
    name: 'Cotton T-Shirt',
    price: 1500,
    category: 'men',
    subcategory: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1666358085449-a10a39f33942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0c2hpcnQlMjBjYXN1YWwlMjB3ZWFyfGVufDF8fHx8MTc3MjgxODgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1666358085449-a10a39f33942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0c2hpcnQlMjBjYXN1YWwlMjB3ZWFyfGVufDF8fHx8MTc3MjgxODgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1699275303970-ec11772452e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjb3R0b24lMjB0c2hpcnQlMjBjb2xvcnN8ZW58MXx8fHwxNzcyODY1NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Soft cotton t-shirt for daily wear'
  },
  {
    id: 'M006',
    name: 'Summer Shorts',
    price: 2200,
    category: 'men',
    subcategory: 'Shorts',
    image: 'https://images.unsplash.com/photo-1766113492895-2d8711c4b126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzaG9ydHMlMjBzdW1tZXIlMjBjYXN1YWx8ZW58MXx8fHwxNzcyODE4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1766113492895-2d8711c4b126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzaG9ydHMlMjBzdW1tZXIlMjBjYXN1YWx8ZW58MXx8fHwxNzcyODE4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1769072059326-c30e71d46970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdW1tZXIlMjBzaG9ydHMlMjBiZWlnZXxlbnwxfHx8fDE3NzI4NjU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight shorts perfect for summer'
  },
  {
    id: 'M007',
    name: 'Hoodie Streetwear',
    price: 3800,
    category: 'men',
    subcategory: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1622866654199-d36cf0709720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3MjgxMzQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1622866654199-d36cf0709720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3MjgxMzQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637185766875-b64f2c6fff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBob29kaWUlMjBibGFjayUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzcyODY1NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    trending: true,
    description: 'Trendy hoodie for street style'
  },
  {
    id: 'M008',
    name: 'Polo Shirt',
    price: 2800,
    category: 'men',
    subcategory: 'Polo',
    image: 'https://images.unsplash.com/photo-1759596450534-0a960be607e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBwb2xvJTIwc2hpcnQlMjBjYXN1YWx8ZW58MXx8fHwxNzcyODE4ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1759596450534-0a960be607e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBwb2xvJTIwc2hpcnQlMjBjYXN1YWx8ZW58MXx8fHwxNzcyODE4ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759596450534-0a960be607e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBwb2xvJTIwc2hpcnQlMjBjYXN1YWwlMjB3ZWFyfGVufDF8fHx8MTc3Mjg2NTc5MXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic polo shirt for casual elegance'
  },
  {
    id: 'M009',
    name: 'Bomber Jacket',
    price: 6500,
    category: 'men',
    subcategory: 'Jackets',
    image: 'https://images.unsplash.com/photo-1662624080599-dd453fbe6cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBib21iZXIlMjBqYWNrZXQlMjBzdHlsZXxlbnwxfHx8fDE3NzI4MTg4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1662624080599-dd453fbe6cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBib21iZXIlMjBqYWNrZXQlMjBzdHlsZXxlbnwxfHx8fDE3NzI4MTg4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1541956529211-44115013f6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBib21iZXIlMjBqYWNrZXQlMjBzdHJlZXR8ZW58MXx8fHwxNzcyODY1NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Stylish bomber jacket for any season'
  },
  {
    id: 'M010',
    name: 'Athletic Tank Top',
    price: 1800,
    category: 'men',
    subcategory: 'Activewear',
    image: 'https://images.unsplash.com/photo-1600026453239-1d702d3e5e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0YW5rJTIwdG9wJTIwZml0bmVzc3xlbnwxfHx8fDE3NzI4MTg4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1600026453239-1d702d3e5e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0YW5rJTIwdG9wJTIwZml0bmVzc3xlbnwxfHx8fDE3NzI4MTg4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0YW5rJTIwdG9wJTIwZ3ltfGVufDF8fHx8MTc3Mjg2NTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Performance tank top for workouts'
  },
  {
    id: 'M011',
    name: 'Chino Pants',
    price: 3600,
    category: 'men',
    subcategory: 'Pants',
    image: 'https://images.unsplash.com/photo-1764816657611-8b1bd2d72cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjaGlub3MlMjBwYW50cyUyMGNhc3VhbHxlbnwxfHx8fDE3NzI4MTg4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1764816657611-8b1bd2d72cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjaGlub3MlMjBwYW50cyUyMGNhc3VhbHxlbnwxfHx8fDE3NzI4MTg4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768696081520-76c372aa0d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjaGlubyUyMHBhbnRzJTIwc3R5bGVkfGVufDF8fHx8MTc3Mjg2NTc5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Comfortable chinos for smart casual look'
  },
  {
    id: 'M012',
    name: 'Cardigan Sweater',
    price: 4200,
    category: 'men',
    subcategory: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1673168869484-dce7ec2d0499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXJkaWdhbiUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzcyODE4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1673168869484-dce7ec2d0499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXJkaWdhbiUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzcyODE4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1672306922100-d8f81ccdbd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXJkaWdhbiUyMHN3ZWF0ZXIlMjBjYXN1YWx8ZW58MXx8fHwxNzcyODY1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Cozy cardigan for layering'
  },
  {
    id: 'M013',
    name: 'Formal Vest',
    price: 3900,
    category: 'men',
    subcategory: 'Vests',
    image: 'https://images.unsplash.com/photo-1768809249510-4f84f9b16c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB2ZXN0JTIwZm9ybWFsfGVufDF8fHx8MTc3MjgxODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1768809249510-4f84f9b16c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB2ZXN0JTIwZm9ybWFsfGVufDF8fHx8MTc3MjgxODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1765175094470-ed3bef04ed40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjB2ZXN0JTIwc3VpdHxlbnwxfHx8fDE3NzI4NjU3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic vest for formal occasions'
  },
  {
    id: 'M014',
    name: 'Windbreaker Jacket',
    price: 5200,
    category: 'men',
    subcategory: 'Jackets',
    image: 'https://images.unsplash.com/photo-1602609075707-0265c6ac2bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB3aW5kYnJlYWtlciUyMGphY2tldHxlbnwxfHx8fDE3NzI4MTg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1602609075707-0265c6ac2bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB3aW5kYnJlYWtlciUyMGphY2tldHxlbnwxfHx8fDE3NzI4MTg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1634340454019-43e7119900c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB3aW5kYnJlYWtlciUyMGphY2tldCUyMHNwb3J0eXxlbnwxfHx8fDE3NzI4NjU3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Lightweight windbreaker for outdoor activities'
  },
  {
    id: 'M015',
    name: 'Henley Shirt',
    price: 2400,
    category: 'men',
    subcategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1565128354282-a6390fc125b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBoZW5sZXklMjBzaGlydCUyMGNhc3VhbHxlbnwxfHx8fDE3NzI4MTg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1565128354282-a6390fc125b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBoZW5sZXklMjBzaGlydCUyMGNhc3VhbHxlbnwxfHx8fDE3NzI4MTg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1565128354282-a6390fc125b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBoZW5sZXklMjBzaGlydCUyMGxheWVyZWR8ZW58MXx8fHwxNzcyODY1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable henley for casual days'
  },
  {
    id: 'M016',
    name: 'Track Jacket',
    price: 3500,
    category: 'men',
    subcategory: 'Activewear',
    image: 'https://images.unsplash.com/photo-1543594013-8fa6fe509dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0cmFjayUyMGphY2tldCUyMHNwb3J0c3xlbnwxfHx8fDE3NzI4MTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1543594013-8fa6fe509dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0cmFjayUyMGphY2tldCUyMHNwb3J0c3xlbnwxfHx8fDE3NzI4MTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1608196678348-10054f50c499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0cmFjayUyMGphY2tldCUyMGF0aGxldGljfGVufDF8fHx8MTc3Mjg2NTgwMHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Athletic track jacket for sports'
  },
  {
    id: 'M017',
    name: 'Flannel Shirt',
    price: 2900,
    category: 'men',
    subcategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1660648188736-b71c67e86f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmbGFubmVsJTIwc2hpcnQlMjBwbGFpZHxlbnwxfHx8fDE3NzI4MTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1660648188736-b71c67e86f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmbGFubmVsJTIwc2hpcnQlMjBwbGFpZHxlbnwxfHx8fDE3NzI4MTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1702628907361-818e77fc05c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmbGFubmVsJTIwc2hpcnQlMjBwbGFpZCUyMHBhdHRlcm58ZW58MXx8fHwxNzcyODY1ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Classic plaid flannel shirt'
  },

  // Women's Clothing
  {
    id: 'W001',
    name: 'Elegant Evening Dress',
    price: 8900,
    category: 'women',
    subcategory: 'Dresses',
    image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tZW4lMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODE4ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    trending: true,
    description: 'Sophisticated dress for special occasions'
  },
  {
    id: 'W002',
    name: 'Summer Fashion Set',
    price: 4800,
    category: 'women',
    subcategory: 'Casual',
    image: 'https://images.unsplash.com/photo-1768289222419-255b80c65259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1bW1lciUyMGZhc2hpb24lMjBjbG90aGluZ3xlbnwxfHx8fDE3NzI4MTg4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
    description: 'Light and breezy summer outfit'
  },
  {
    id: 'W003',
    name: 'Professional Blazer',
    price: 7200,
    category: 'women',
    subcategory: 'Blazers',
    image: 'https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJsYXplciUyMHByb2Zlc3Npb25hbCUyMG91dGZpdHxlbnwxfHx8fDE3NzI4MTg4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    trending: true,
    description: 'Tailored blazer for the modern professional'
  },
  {
    id: 'W004',
    name: 'Designer Handbag',
    price: 15600,
    category: 'women',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhhbmRiYWclMjBhY2Nlc3NvcmllcyUyMGx1eHVyeXxlbnwxfHx8fDE3NzI4MTg4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['One Size'],
    description: 'Luxury handbag for the fashion-forward'
  },
  {
    id: 'W005',
    name: 'Silk Blouse',
    price: 3600,
    category: 'women',
    subcategory: 'Tops',
    image: 'https://images.unsplash.com/photo-1761117228880-df2425bd70da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJsb3VzZSUyMGZhc2hpb24lMjBlbGVnYW50fGVufDF8fHx8MTc3MjgxODgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Premium silk blouse for elegant styling'
  },
  {
    id: 'W006',
    name: 'Modern Skirt',
    price: 2800,
    category: 'women',
    subcategory: 'Skirts',
    image: 'https://images.unsplash.com/photo-1760264555154-6cbe62e12594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNraXJ0JTIwZmFzaGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzI4MTg4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Trendy skirt for versatile styling'
  },
  {
    id: 'W007',
    name: 'Cozy Cardigan',
    price: 3900,
    category: 'women',
    subcategory: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1646178071014-bc9d3abebcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhcmRpZ2FuJTIwY296eSUyMGZhc2hpb258ZW58MXx8fHwxNzcyODE4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Soft cardigan for comfortable warmth'
  },
  {
    id: 'W008',
    name: 'Trendy Jumpsuit',
    price: 5600,
    category: 'women',
    subcategory: 'Jumpsuits',
    image: 'https://images.unsplash.com/photo-1768803968265-1385a31e2be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGp1bXBzdWl0JTIwZmFzaGlvbiUyMHRyZW5keXxlbnwxfHx8fDE3NzI4MTg4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    trending: true,
    description: 'Fashionable jumpsuit for effortless style'
  },
  {
    id: 'W009',
    name: 'Yoga Pants',
    price: 2400,
    category: 'women',
    subcategory: 'Activewear',
    image: 'https://images.unsplash.com/photo-1768929096095-8f379b34278b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHlvZ2ElMjBwYW50cyUyMGF0aGxldGljfGVufDF8fHx8MTc3MjgxODgzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Comfortable yoga pants for active lifestyle'
  },
  {
    id: 'W010',
    name: 'Trench Coat',
    price: 9800,
    category: 'women',
    subcategory: 'Coats',
    image: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRyZW5jaCUyMGNvYXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MjgxODgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic trench coat for timeless elegance'
  },
  {
    id: 'W011',
    name: 'Crop Top',
    price: 1800,
    category: 'women',
    subcategory: 'Tops',
    image: 'https://images.unsplash.com/photo-1760551600405-54c70e6d7f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNyb3AlMjB0b3AlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODE4ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Modern crop top for summer vibes'
  },
  {
    id: 'W012',
    name: 'Active Leggings',
    price: 2600,
    category: 'women',
    subcategory: 'Activewear',
    image: 'https://images.unsplash.com/photo-1596641211273-938aeaf926a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGxlZ2dpbmdzJTIwZmFzaGlvbiUyMGFjdGl2ZXxlbnwxfHx8fDE3NzI4MTg4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'High-performance leggings for workouts'
  },
  {
    id: 'W013',
    name: 'Turtleneck Sweater',
    price: 4100,
    category: 'women',
    subcategory: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1760552069049-600f71fa5bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHR1cnRsZW5lY2slMjBzd2VhdGVyfGVufDF8fHx8MTc3MjgxODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Elegant turtleneck for cool weather'
  },
  {
    id: 'W014',
    name: 'Winter Poncho',
    price: 5400,
    category: 'women',
    subcategory: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1704915049592-d41831fb93c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHBvbmNobyUyMHdpbnRlciUyMGZhc2hpb258ZW58MXx8fHwxNzcyODE4ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['One Size'],
    description: 'Stylish poncho for winter warmth'
  },
  {
    id: 'W015',
    name: 'Luxury Sunglasses',
    price: 4500,
    category: 'women',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1762706334838-ea8425b43116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1bmdsYXNzZXMlMjBmYXNoaW9uJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjgxODgzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['One Size'],
    description: 'Designer sunglasses for sun protection'
  },
  {
    id: 'W016',
    name: 'Crossbody Bag',
    price: 3800,
    category: 'women',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1654111081532-68b96326f24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNyb3NzYm9keSUyMGJhZyUyMHNtYWxsfGVufDF8fHx8MTc3MjgxODg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['One Size'],
    description: 'Compact crossbody bag for essentials'
  },
  {
    id: 'W017',
    name: 'Maxi Dress',
    price: 5900,
    category: 'women',
    subcategory: 'Dresses',
    image: 'https://images.unsplash.com/photo-1698648438550-9a3a9a292fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1heGklMjBkcmVzcyUyMHN1bW1lcnxlbnwxfHx8fDE3NzI4MTg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Flowing maxi dress for summer elegance'
  },
  {
    id: 'W018',
    name: 'Fashion Bodysuit',
    price: 3200,
    category: 'women',
    subcategory: 'Bodysuits',
    image: 'https://images.unsplash.com/photo-1627676369435-31bc4b8f00be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJvZHlzdWl0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzI4MTg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Sleek bodysuit for layering or solo wear'
  },
  {
    id: 'W019',
    name: 'Midi Skirt',
    price: 3400,
    category: 'women',
    subcategory: 'Skirts',
    image: 'https://images.unsplash.com/photo-1616226784481-fe333408ae3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1pZGklMjBza2lydCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODE4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Elegant midi skirt for refined style'
  },
  {
    id: 'W020',
    name: 'Summer Kimono',
    price: 2900,
    category: 'women',
    subcategory: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1640622487951-3ee7249bb845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGtpbW9ubyUyMHN1bW1lciUyMGxpZ2h0fGVufDF8fHx8MTc3MjgxODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['One Size'],
    description: 'Light kimono for summer layering'
  },

  // Shoes
  {
    id: 'S001',
    name: 'Luxury White Sneakers',
    price: 7800,
    category: 'shoes',
    subcategory: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1543652711-77eeb35ae548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2VycyUyMHNob2VzJTIwd2hpdGV8ZW58MXx8fHwxNzcyODE4ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    trending: true,
    description: 'Premium white sneakers for everyday style'
  },
  {
    id: 'S002',
    name: 'High Heels',
    price: 6500,
    category: 'shoes',
    subcategory: 'Heels',
    image: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhpZ2glMjBoZWVscyUyMHNob2VzfGVufDF8fHx8MTc3MjgxODgyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    trending: true,
    description: 'Elegant high heels for special occasions'
  },
  {
    id: 'S003',
    name: 'Leather Boots',
    price: 9200,
    category: 'shoes',
    subcategory: 'Boots',
    image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBib290cyUyMGxlYXRoZXIlMjBzaG9lc3xlbnwxfHx8fDE3NzI4MTg4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    description: 'Durable leather boots for all seasons'
  },
  {
    id: 'S004',
    name: 'Summer Sandals',
    price: 3400,
    category: 'shoes',
    subcategory: 'Sandals',
    image: 'https://images.unsplash.com/photo-1732708862549-714f7478ca31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNhbmRhbHMlMjBzdW1tZXIlMjBzaG9lc3xlbnwxfHx8fDE3NzI3Mzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    description: 'Comfortable sandals for warm weather'
  },
  {
    id: 'S005',
    name: 'Athletic Sneakers',
    price: 5600,
    category: 'shoes',
    subcategory: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1763775468707-573c7cd6b0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBhdGhsZXRpYyUyMHNuZWFrZXJzfGVufDF8fHx8MTc3Mjc5MzYxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    trending: true,
    description: 'Performance sneakers for running'
  },
  {
    id: 'S006',
    name: 'Ankle Boots',
    price: 7600,
    category: 'shoes',
    subcategory: 'Boots',
    image: 'https://images.unsplash.com/photo-1761052720710-32349209f6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFua2xlJTIwYm9vdHMlMjBmYXNoaW9ufGVufDF8fHx8MTc3MjgxODgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    description: 'Fashionable ankle boots for versatile styling'
  },
  {
    id: 'S007',
    name: 'Oxford Dress Shoes',
    price: 8400,
    category: 'shoes',
    subcategory: 'Formal',
    image: 'https://images.unsplash.com/photo-1651777940532-e6e7b9e2ff6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBveGZvcmQlMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc3MjgxODgzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    description: 'Classic oxford shoes for formal wear'
  },
  {
    id: 'S008',
    name: 'Ballet Flats',
    price: 3900,
    category: 'shoes',
    subcategory: 'Flats',
    image: 'https://images.unsplash.com/photo-1758542988664-49951c5b1999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZsYXRzJTIwYmFsbGV0JTIwc2hvZXN8ZW58MXx8fHwxNzcyODE4ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    description: 'Comfortable ballet flats for everyday wear'
  },
  {
    id: 'S009',
    name: 'Loafers',
    price: 6800,
    category: 'shoes',
    subcategory: 'Loafers',
    image: 'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsb2FmZXJzJTIwZHJlc3MlMjBzaG9lc3xlbnwxfHx8fDE3NzI4MTg4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    description: 'Stylish loafers for smart casual look'
  },
  {
    id: 'S010',
    name: 'Wedge Shoes',
    price: 5200,
    category: 'shoes',
    subcategory: 'Wedges',
    image: 'https://images.unsplash.com/photo-1566499003412-4736d6099504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdlZGdlcyUyMHNob2VzJTIwc3VtbWVyfGVufDF8fHx8MTc3MjgxODgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    description: 'Comfortable wedges for added height'
  }
];
