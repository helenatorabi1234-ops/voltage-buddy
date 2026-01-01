export interface Product {
  id: number;
  name: string;
  category: string;
  voltage: number;
  wattage: number;
  amperage: number;
  icon: string;
  powerFactor: number;
  efficiency: 'A++' | 'A+' | 'A' | 'B' | 'C' | 'D';
  avgUsageHours: number;
  description?: string;
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
  { id: 1, name: 'یخچال', category: 'home', voltage: 220, wattage: 150, amperage: 0.68, icon: '🧊', powerFactor: 0.85, efficiency: 'A+', avgUsageHours: 24, description: 'یخچال خانگی متوسط' },
  { id: 2, name: 'فریزر', category: 'home', voltage: 220, wattage: 200, amperage: 0.91, icon: '🥶', powerFactor: 0.85, efficiency: 'A', avgUsageHours: 24, description: 'فریزر عمودی' },
  { id: 3, name: 'ماشین لباس‌شویی', category: 'home', voltage: 220, wattage: 500, amperage: 2.27, icon: '🧺', powerFactor: 0.75, efficiency: 'A++', avgUsageHours: 1, description: 'ماشین لباسشویی ۸ کیلویی' },
  { id: 4, name: 'ماشین ظرف‌شویی', category: 'home', voltage: 220, wattage: 1800, amperage: 8.18, icon: '🍽️', powerFactor: 0.9, efficiency: 'A', avgUsageHours: 1.5, description: 'ماشین ظرفشویی ۱۴ نفره' },
  { id: 5, name: 'جاروبرقی', category: 'home', voltage: 220, wattage: 1400, amperage: 6.36, icon: '🧹', powerFactor: 0.95, efficiency: 'B', avgUsageHours: 0.5, description: 'جاروبرقی با قدرت مکش بالا' },
  { id: 6, name: 'اتو برقی', category: 'home', voltage: 220, wattage: 2000, amperage: 9.09, icon: '👔', powerFactor: 1.0, efficiency: 'C', avgUsageHours: 0.5, description: 'اتو بخار' },
  { id: 7, name: 'مایکروویو', category: 'home', voltage: 220, wattage: 1000, amperage: 4.55, icon: '📦', powerFactor: 0.65, efficiency: 'B', avgUsageHours: 0.25, description: 'مایکروویو ۲۵ لیتری' },
  { id: 8, name: 'کتری و چای‌ساز برقی', category: 'home', voltage: 220, wattage: 2200, amperage: 10, icon: '☕', powerFactor: 1.0, efficiency: 'C', avgUsageHours: 0.5, description: 'کتری برقی استیل' },
  
  // الکترونیکی
  { id: 9, name: 'تلویزیون', category: 'electronic', voltage: 220, wattage: 100, amperage: 0.45, icon: '📺', powerFactor: 0.9, efficiency: 'A+', avgUsageHours: 6, description: 'تلویزیون LED 55 اینچ' },
  { id: 10, name: 'کامپیوتر و لپ‌تاپ', category: 'electronic', voltage: 220, wattage: 300, amperage: 1.36, icon: '💻', powerFactor: 0.85, efficiency: 'A', avgUsageHours: 8, description: 'کامپیوتر رومیزی' },
  { id: 11, name: 'مودم و روتر', category: 'electronic', voltage: 12, wattage: 12, amperage: 1, icon: '📡', powerFactor: 0.9, efficiency: 'A++', avgUsageHours: 24, description: 'مودم ADSL/فیبر' },
  { id: 12, name: 'تلفن همراه (شارژر)', category: 'electronic', voltage: 5, wattage: 20, amperage: 4, icon: '📱', powerFactor: 0.9, efficiency: 'A+', avgUsageHours: 2, description: 'شارژر فست‌چارج' },
  { id: 26, name: 'کنسول بازی', category: 'electronic', voltage: 220, wattage: 200, amperage: 0.91, icon: '🎮', powerFactor: 0.85, efficiency: 'A', avgUsageHours: 3, description: 'کنسول نسل جدید' },
  { id: 27, name: 'سیستم صوتی', category: 'electronic', voltage: 220, wattage: 150, amperage: 0.68, icon: '🔊', powerFactor: 0.8, efficiency: 'B', avgUsageHours: 4, description: 'سیستم صوتی خانگی' },
  
  // گرمایشی / سرمایشی
  { id: 13, name: 'کولر گازی', category: 'hvac', voltage: 220, wattage: 2500, amperage: 11.36, icon: '❄️', powerFactor: 0.85, efficiency: 'A', avgUsageHours: 8, description: 'کولر گازی ۲۴۰۰۰ BTU' },
  { id: 14, name: 'کولر آبی', category: 'hvac', voltage: 220, wattage: 250, amperage: 1.14, icon: '💨', powerFactor: 0.75, efficiency: 'B', avgUsageHours: 10, description: 'کولر آبی بزرگ' },
  { id: 15, name: 'بخاری برقی', category: 'hvac', voltage: 220, wattage: 2000, amperage: 9.09, icon: '🔥', powerFactor: 1.0, efficiency: 'C', avgUsageHours: 6, description: 'بخاری برقی فن‌دار' },
  { id: 16, name: 'پنکه', category: 'hvac', voltage: 220, wattage: 75, amperage: 0.34, icon: '🌀', powerFactor: 0.7, efficiency: 'A', avgUsageHours: 8, description: 'پنکه ایستاده' },
  { id: 28, name: 'کولر پرتابل', category: 'hvac', voltage: 220, wattage: 1500, amperage: 6.82, icon: '🧊', powerFactor: 0.8, efficiency: 'B', avgUsageHours: 6, description: 'کولر قابل حمل' },
  { id: 29, name: 'رادیاتور برقی', category: 'hvac', voltage: 220, wattage: 1500, amperage: 6.82, icon: '🌡️', powerFactor: 1.0, efficiency: 'C', avgUsageHours: 5, description: 'رادیاتور روغنی' },
  
  // روشنایی
  { id: 17, name: 'لامپ LED', category: 'lighting', voltage: 220, wattage: 10, amperage: 0.045, icon: '💡', powerFactor: 0.9, efficiency: 'A++', avgUsageHours: 6, description: 'لامپ LED کم‌مصرف' },
  { id: 18, name: 'لامپ کم‌مصرف', category: 'lighting', voltage: 220, wattage: 20, amperage: 0.091, icon: '🔆', powerFactor: 0.6, efficiency: 'A+', avgUsageHours: 6, description: 'لامپ CFL' },
  { id: 30, name: 'نوار LED', category: 'lighting', voltage: 12, wattage: 24, amperage: 2, icon: '✨', powerFactor: 0.9, efficiency: 'A+', avgUsageHours: 4, description: 'نوار LED تزئینی ۵ متری' },
  { id: 31, name: 'لوستر چندشاخه', category: 'lighting', voltage: 220, wattage: 100, amperage: 0.45, icon: '💫', powerFactor: 0.9, efficiency: 'A', avgUsageHours: 4, description: 'لوستر ۱۰ شاخه LED' },
  
  // اداری
  { id: 19, name: 'پرینتر', category: 'office', voltage: 220, wattage: 500, amperage: 2.27, icon: '🖨️', powerFactor: 0.65, efficiency: 'B', avgUsageHours: 2, description: 'پرینتر لیزری' },
  { id: 20, name: 'دستگاه کپی', category: 'office', voltage: 220, wattage: 1500, amperage: 6.82, icon: '📄', powerFactor: 0.8, efficiency: 'C', avgUsageHours: 4, description: 'دستگاه کپی اداری' },
  { id: 32, name: 'اسکنر', category: 'office', voltage: 220, wattage: 50, amperage: 0.23, icon: '📠', powerFactor: 0.8, efficiency: 'A', avgUsageHours: 1, description: 'اسکنر رومیزی' },
  { id: 33, name: 'دستگاه پروژکتور', category: 'office', voltage: 220, wattage: 300, amperage: 1.36, icon: '📽️', powerFactor: 0.75, efficiency: 'B', avgUsageHours: 3, description: 'پروژکتور اداری' },
  
  // صنعتی / تأسیساتی
  { id: 21, name: 'پمپ آب برقی', category: 'industrial', voltage: 220, wattage: 750, amperage: 3.41, icon: '💧', powerFactor: 0.8, efficiency: 'B', avgUsageHours: 2, description: 'پمپ آب خانگی' },
  { id: 22, name: 'الکتروموتور', category: 'industrial', voltage: 380, wattage: 3000, amperage: 4.56, icon: '⚡', powerFactor: 0.85, efficiency: 'B', avgUsageHours: 8, description: 'الکتروموتور سه‌فاز' },
  { id: 23, name: 'دستگاه جوش', category: 'industrial', voltage: 220, wattage: 5000, amperage: 22.73, icon: '🔧', powerFactor: 0.7, efficiency: 'D', avgUsageHours: 2, description: 'دستگاه جوش اینورتر' },
  { id: 34, name: 'کمپرسور باد', category: 'industrial', voltage: 220, wattage: 2200, amperage: 10, icon: '💨', powerFactor: 0.8, efficiency: 'C', avgUsageHours: 2, description: 'کمپرسور ۵۰ لیتری' },
  
  // حمل‌ونقل
  { id: 24, name: 'خودرو برقی', category: 'transport', voltage: 400, wattage: 11000, amperage: 27.5, icon: '🚗', powerFactor: 0.95, efficiency: 'A++', avgUsageHours: 3, description: 'شارژ خودرو برقی' },
  { id: 25, name: 'اسکوتر برقی', category: 'transport', voltage: 48, wattage: 500, amperage: 10.42, icon: '🛴', powerFactor: 0.9, efficiency: 'A+', avgUsageHours: 2, description: 'شارژ اسکوتر برقی' },
  { id: 35, name: 'دوچرخه برقی', category: 'transport', voltage: 36, wattage: 300, amperage: 8.33, icon: '🚲', powerFactor: 0.9, efficiency: 'A+', avgUsageHours: 2, description: 'شارژ دوچرخه برقی' },
];

export const voltageRanges = [
  { label: '۵ ولت (USB)', min: 5, max: 5, icon: '🔌' },
  { label: '۱۲ ولت (DC)', min: 12, max: 12, icon: '🔋' },
  { label: '۳۶-۴۸ ولت (باتری)', min: 36, max: 48, icon: '⚡' },
  { label: '۲۲۰ ولت (خانگی)', min: 220, max: 220, icon: '🏠' },
  { label: '۳۸۰-۴۰۰ ولت (صنعتی)', min: 380, max: 400, icon: '🏭' },
];

export const efficiencyLabels: Record<string, { label: string; color: string }> = {
  'A++': { label: 'فوق‌العاده', color: 'text-emerald-400' },
  'A+': { label: 'عالی', color: 'text-green-400' },
  'A': { label: 'خوب', color: 'text-lime-400' },
  'B': { label: 'متوسط', color: 'text-yellow-400' },
  'C': { label: 'ضعیف', color: 'text-orange-400' },
  'D': { label: 'پرمصرف', color: 'text-red-400' },
};

export const electricityPrice = 800; // تومان برای هر کیلووات ساعت
