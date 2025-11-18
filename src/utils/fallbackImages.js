// Curated Unsplash URLs for consistent product images
export const fallbackImages = {
  // Fruits & Vegetables
  fruits: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
  vegetables: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
  apples: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
  tomatoes: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
  potatoes: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
  onions: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
  bananas: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",

  // Dairy & Eggs
  milk: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
  eggs: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
  dairy: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
  cheese: "https://images.unsplash.com/photo-1552767057-3f9d0c6e79ec?w=400&h=300&fit=crop",

  // Bakery
  bread: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
  bakery: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",

  // Snacks & Chips
  chips: "https://images.unsplash.com/photo-1566479969036-67b281ccef53?w=400&h=300&fit=crop",
  snacks: "https://images.unsplash.com/photo-1584990347447-8b66b0d83c1f?w=400&h=300&fit=crop",
  kurkure: "https://images.unsplash.com/photo-1584990347447-8b66b0d83c1f?w=400&h=300&fit=crop",
  bingo: "https://images.unsplash.com/photo-1584990347447-8b66b0d83c1f?w=400&h=300&fit=crop",
  lays: "https://images.unsplash.com/photo-1566479969036-67b281ccef53?w=400&h=300&fit=crop",

  // Beverages
  beverages: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
  coke: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
  pepsi: "https://images.unsplash.com/photo-1603398938373-e54da0bb5e48?w=400&h=300&fit=crop",
  fanta: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
  slice: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",

  // Personal Care
  personal: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
  soap: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
  shampoo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
  toothpaste: "https://images.unsplash.com/photo-1626575241382-76d7dec3cc83?w=400&h=300&fit=crop",
  detergent: "https://images.unsplash.com/photo-1600857062245-0bd3fef8a9be?w=400&h=300&fit=crop",

  // Home Care
  home: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
  cleaner: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
  glass: "https://images.unsplash.com/photo-1586023492125-27b3c0f8d5f7?w=400&h=300&fit=crop",

  // Staples
  rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
  dal: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
  oil: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",

  // Default fallback
  default: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop"
};

// Function to get appropriate fallback image based on product name
export const getFallbackImage = (productName) => {
  const name = productName.toLowerCase();
  
  if (name.includes('apple') || name.includes('fruit')) return fallbackImages.fruits;
  if (name.includes('tomato') || name.includes('vegetable')) return fallbackImages.vegetables;
  if (name.includes('potato')) return fallbackImages.potatoes;
  if (name.includes('onion')) return fallbackImages.onions;
  if (name.includes('banana')) return fallbackImages.bananas;
  if (name.includes('milk') || name.includes('dairy')) return fallbackImages.milk;
  if (name.includes('egg')) return fallbackImages.eggs;
  if (name.includes('bread') || name.includes('bakery')) return fallbackImages.bread;
  if (name.includes('chip') || name.includes('snack') || name.includes('lays') || name.includes('kurkure') || name.includes('bingo')) return fallbackImages.chips;
  if (name.includes('coke') || name.includes('pepsi') || name.includes('fanta') || name.includes('slice') || name.includes('beverage')) return fallbackImages.beverages;
  if (name.includes('soap') || name.includes('shampoo') || name.includes('personal')) return fallbackImages.personal;
  if (name.includes('toothpaste')) return fallbackImages.toothpaste;
  if (name.includes('cleaner') || name.includes('detergent')) return fallbackImages.cleaner;
  if (name.includes('rice')) return fallbackImages.rice;
  if (name.includes('dal')) return fallbackImages.dal;
  if (name.includes('oil')) return fallbackImages.oil;
  
  return fallbackImages.default;
};