export interface Product {
  id: number;
  name: string;
  category: string;
  voltage: number;
  wattage: number;
  amperage: number;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'home', name: 'لوازم خانگی', icon: '🏠', color: 'from-blue-500 to-cyan-400' },
  { id: 'electronic', name: 'الکترونیکی', icon: '💻', color: 'from-purple-500 to-pink-400' },
  { id: 'hvac', name: 'گرمایشی / سرمایشی', icon: '❄️', color: 'from-cyan-500 to-teal-400' },
  { id: 'lighting', name: 'روشنایی', icon: '💡', color: 'from-yellow-400 to-orange-400' },
  { id: 'office', name: 'اداری', icon: '🖨️', color: 'from-gray-400 to-slate-500' },
  { id: 'industrial', name: 'صنعتی / تأسیساتی', icon: '⚙️', color: 'from-orange-500 to-red-500' },
  { id: 'transport', name: 'حمل‌ونقل', icon: '🚗', color: 'from-green-500 to-emerald-400' },
];

export const products: Product[] = [
  // لوازم خانگی
  { id: 1, name: 'یخچال', category: 'home', voltage: 220, wattage: 150, amperage: 0.68, icon: '🧊' },
  { id: 2, name: 'فریزر', category: 'home', voltage: 220, wattage: 200, amperage: 0.91, icon: '🥶' },
  { id: 3, name: 'ماشین لباس‌شویی', category: 'home', voltage: 220, wattage: 500, amperage: 2.27, icon: '🧺' },
  { id: 4, name: 'ماشین ظرف‌شویی', category: 'home', voltage: 220, wattage: 1800, amperage: 8.18, icon: '🍽️' },
  { id: 5, name: 'جاروبرقی', category: 'home', voltage: 220, wattage: 1400, amperage: 6.36, icon: '🧹' },
  { id: 6, name: 'اتو برقی', category: 'home', voltage: 220, wattage: 2000, amperage: 9.09, icon: '👔' },
  { id: 7, name: 'مایکروویو', category: 'home', voltage: 220, wattage: 1000, amperage: 4.55, icon: '📦' },
  { id: 8, name: 'کتری و چای‌ساز برقی', category: 'home', voltage: 220, wattage: 2200, amperage: 10, icon: '☕' },
  
  // الکترونیکی
  { id: 9, name: 'تلویزیون', category: 'electronic', voltage: 220, wattage: 100, amperage: 0.45, icon: '📺' },
  { id: 10, name: 'کامپیوتر و لپ‌تاپ', category: 'electronic', voltage: 220, wattage: 300, amperage: 1.36, icon: '💻' },
  { id: 11, name: 'مودم و روتر', category: 'electronic', voltage: 12, wattage: 12, amperage: 1, icon: '📡' },
  { id: 12, name: 'تلفن همراه (شارژر)', category: 'electronic', voltage: 5, wattage: 20, amperage: 4, icon: '📱' },
  
  // گرمایشی / سرمایشی
  { id: 13, name: 'کولر گازی', category: 'hvac', voltage: 220, wattage: 2500, amperage: 11.36, icon: '❄️' },
  { id: 14, name: 'کولر آبی', category: 'hvac', voltage: 220, wattage: 250, amperage: 1.14, icon: '💨' },
  { id: 15, name: 'بخاری برقی', category: 'hvac', voltage: 220, wattage: 2000, amperage: 9.09, icon: '🔥' },
  { id: 16, name: 'پنکه', category: 'hvac', voltage: 220, wattage: 75, amperage: 0.34, icon: '🌀' },
  
  // روشنایی
  { id: 17, name: 'لامپ LED', category: 'lighting', voltage: 220, wattage: 10, amperage: 0.045, icon: '💡' },
  { id: 18, name: 'لامپ کم‌مصرف', category: 'lighting', voltage: 220, wattage: 20, amperage: 0.091, icon: '🔆' },
  
  // اداری
  { id: 19, name: 'پرینتر', category: 'office', voltage: 220, wattage: 500, amperage: 2.27, icon: '🖨️' },
  { id: 20, name: 'دستگاه کپی', category: 'office', voltage: 220, wattage: 1500, amperage: 6.82, icon: '📄' },
  
  // صنعتی / تأسیساتی
  { id: 21, name: 'پمپ آب برقی', category: 'industrial', voltage: 220, wattage: 750, amperage: 3.41, icon: '💧' },
  { id: 22, name: 'الکتروموتور', category: 'industrial', voltage: 380, wattage: 3000, amperage: 4.56, icon: '⚡' },
  { id: 23, name: 'دستگاه جوش', category: 'industrial', voltage: 220, wattage: 5000, amperage: 22.73, icon: '🔧' },
  
  // حمل‌ونقل
  { id: 24, name: 'خودرو برقی', category: 'transport', voltage: 400, wattage: 11000, amperage: 27.5, icon: '🚗' },
  { id: 25, name: 'اسکوتر برقی', category: 'transport', voltage: 48, wattage: 500, amperage: 10.42, icon: '🛴' },
];

export const voltageRanges = [
  { label: '۵ ولت (USB)', min: 5, max: 5 },
  { label: '۱۲ ولت (DC)', min: 12, max: 12 },
  { label: '۴۸ ولت (باتری)', min: 48, max: 48 },
  { label: '۲۲۰ ولت (خانگی)', min: 220, max: 220 },
  { label: '۳۸۰ ولت (صنعتی)', min: 380, max: 400 },
];
