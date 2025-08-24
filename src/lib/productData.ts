export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  category: string;
  specifications: string[];
  features: string[];
  madeIn?: string;
  // Persian translations
  name_fa?: string;
  description_fa?: string;
  longDescription_fa?: string;
  specifications_fa?: string[];
  features_fa?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'flueGasAnalyzer',
    description:
      'Advanced gas analysis system for industrial applications. This high-precision instrument provides real-time monitoring and analysis of flue gas emissions, helping industries maintain compliance with environmental regulations while optimizing combustion efficiency.',
    longDescription:
      'The Flue Gas Analyzer is a state-of-the-art analytical instrument designed for continuous monitoring of flue gas emissions in industrial processes. It features advanced sensor technology that can detect and measure multiple gas components including CO, CO2, NOx, SO2, and O2 with exceptional accuracy and reliability.',
    price: '$15,000',
    image: 'http://localhost:3000/images/1.png',
    category: 'flueGasAnalyzer',
    specifications: [
      'Measurement Range: 0-1000 ppm',
      'Accuracy: ±2% of full scale',
      'Response Time: <30 seconds',
      'Operating Temperature: -20°C to +50°C',
      'Power Supply: 24V DC or 110/220V AC',
    ],
    features: [
      'Real-time data logging',
      'Multiple gas detection',
      'Calibration reminder system',
      'Data export capabilities',
      'Remote monitoring support',
    ],
    // Persian translations
    name_fa: 'آنالایزر گاز دودکش',
    description_fa:
      'سیستم پیشرفته تحلیل گاز برای کاربردهای صنعتی. این ابزار با دقت بالا، نظارت و تحلیل زمان واقعی از انتشارات گاز دودکش را فراهم می‌کند و به صنایع کمک می‌کند تا ضمن بهینه‌سازی راندمان احتراق، با مقررات زیست‌محیطی مطابقت داشته باشند.',
    longDescription_fa:
      'آنالایزر گاز دودکش یک ابزار تحلیلی پیشرفته است که برای نظارت مداوم بر انتشارات گاز دودکش در فرآیندهای صنعتی طراحی شده است. این دستگاه دارای فناوری حسگر پیشرفته‌ای است که می‌تواند اجزای گاز متعدد از جمله CO، CO2، NOx، SO2 و O2 را با دقت و قابلیت اطمینان استثنایی تشخیص داده و اندازه‌گیری کند.',
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰-۱۰۰۰ ppm',
      'دقت: ±۲٪ از مقیاس کامل',
      'زمان پاسخ: کمتر از ۳۰ ثانیه',
      'دمای عملیاتی: ۲۰- تا +۵۰ درجه سانتیگراد',
      'منبع تغذیه: ۲۴ ولت DC یا ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'ثبت داده‌های زمان واقعی',
      'تشخیص چندگانه گاز',
      'سیستم یادآوری کالیبراسیون',
      'قابلیت‌های صادرات داده',
      'پشتیبانی از نظارت از راه دور',
    ],
  },
  {
    id: 2,
    name: 'laser',
    description:
      'High-precision laser-based dust measurement system for industrial dust monitoring applications.',
    longDescription:
      'The Laser Dust Analyzer utilizes advanced laser scattering technology to provide accurate and reliable dust concentration measurements in industrial environments. This system is ideal for monitoring particulate matter in various industrial processes including cement production, mining, and power generation.',
    price: '$12,500',
    image: 'http://localhost:3000/images/2.webp',
    category: 'flueDustAnalyzer',
    specifications: [
      'Measurement Range: 0.1-1000 mg/m³',
      'Accuracy: ±5% of reading',
      'Response Time: <10 seconds',
      'Operating Temperature: -10°C to +60°C',
      'Power Supply: 12-24V DC',
    ],
    features: [
      'Laser-based measurement',
      'Self-cleaning optics',
      'Temperature compensation',
      'Digital signal processing',
      'Low maintenance design',
    ],
    // Persian translations
    name_fa: 'آنالایزر غبار لیزری',
    description_fa:
      'سیستم اندازه‌گیری غبار با دقت بالا مبتنی بر لیزر برای کاربردهای نظارت بر غبار صنعتی.',
    longDescription_fa:
      'آنالایزر غبار لیزری از فناوری پیشرفته پراکندگی لیزر برای ارائه اندازه‌گیری‌های دقیق و قابل اعتماد غلظت غبار در محیط‌های صنعتی استفاده می‌کند. این سیستم برای نظارت بر ذرات معلق در فرآیندهای صنعتی مختلف از جمله تولید سیمان، معدن‌کاری و تولید برق ایده‌آل است.',
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰.۱-۱۰۰۰ میلی‌گرم بر متر مکعب',
      'دقت: ±۵٪ از قرائت',
      'زمان پاسخ: کمتر از ۱۰ ثانیه',
      'دمای عملیاتی: ۱۰- تا +۶۰ درجه سانتیگراد',
      'منبع تغذیه: ۱۲-۲۴ ولت DC',
    ],
    features_fa: [
      'اندازه‌گیری مبتنی بر لیزر',
      'اپتیک خودتمیزکننده',
      'جبران‌سازی دما',
      'پردازش سیگنال دیجیتال',
      'طراحی کم‌نگهداری',
    ],
  },
  {
    id: 3,
    name: 'ambientGasAnalyzer',
    description:
      'Environmental monitoring system for air quality assessment and pollution control.',
    longDescription:
      'The Ambient Gas Analyzer is designed for continuous monitoring of ambient air quality in urban and industrial areas. It provides comprehensive data on various air pollutants, helping environmental agencies and industries track air quality trends and ensure compliance with air quality standards.',
    price: '$18,000',
    image: 'http://localhost:3000/images/Teledyne API.jpg',
    category: 'ambientGasAnalyzer',
    specifications: [
      'Measurement Range: 0-5000 ppb',
      'Accuracy: ±1% of reading',
      'Response Time: <60 seconds',
      'Operating Temperature: -40°C to +60°C',
      'Power Supply: 110/220V AC',
    ],
    features: [
      'Multi-gas monitoring',
      'Weather-resistant housing',
      'GPS location tracking',
      'Cloud data storage',
      'Mobile app integration',
    ],
    // Persian translations
    name_fa: 'آنالایزر آنلاین گاز محیط Teledyne API',
    description_fa:
      'سیستم نظارت زیست‌محیطی برای ارزیابی کیفیت هوا و کنترل آلودگی.',
    longDescription_fa: `از این آنالایزر جهت اندازه‌گیری گازها و آلاینده های محیطی و شهری جهت اندازه گیری گازهایی همچون
(O3-CO-SO2-NOX - H2S,...)
 مورد استفاده قرار می‌گیرد.`,
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰-۵۰۰۰ ppb',
      'دقت: ±۱٪ از قرائت',
      'زمان پاسخ: کمتر از ۶۰ ثانیه',
      'دمای عملیاتی: ۴۰- تا +۶۰ درجه سانتیگراد',
      'منبع تغذیه: ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'نظارت چندگانه گاز',
      'محفظه مقاوم در برابر آب و هوا',
      'پیگیری موقعیت GPS',
      'ذخیره‌سازی داده‌های ابری',
      'ادغام اپلیکیشن موبایل',
    ],
  },
  {
    id: 4,
    name: 'ambientDustAnalyzer',
    description:
      'Comprehensive dust monitoring and analysis solution for environmental applications.',
    longDescription:
      'The Ambient Dust Analyzer provides continuous monitoring of particulate matter in ambient air, helping to assess air quality and identify pollution sources. This system is essential for environmental monitoring stations, research institutions, and regulatory compliance.',
    price: '$14,000',
    image: 'http://localhost:3000/images/fai-instruments.jpg',
    category: 'ambientDustAnalyzer',
    specifications: [
      'Measurement Range: 0.1-10000 μg/m³',
      'Accuracy: ±3% of reading',
      'Response Time: <15 seconds',
      'Operating Temperature: -20°C to +50°C',
      'Power Supply: 12V DC or 110/220V AC',
    ],
    features: [
      'PM2.5 and PM10 monitoring',
      'Beta attenuation method',
      'Automatic calibration',
      'Data validation',
      'Network connectivity',
    ],
    // Persian translations
    name_fa: 'آنالایزر آنلاین غبار محیط Fai instruments Swam 5a',
    madeIn: 'ساخت ایتالیا',
    description_fa: 'راه‌حل جامع نظارت و تحلیل غبار برای کاربردهای زیست‌محیطی.',
    longDescription_fa:
      'این آنالایزر قابلیت اندازه‌گیری کیفیت هوا و ذرات معلق  PM10 و PM2.5 به صورت همزمان را دارد و در مناطق شهری در ایستگاه های سنجش آلودگی هوا مورد استفاده قرار می‌گیرد.',
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰.۱-۱۰۰۰۰ میکروگرم بر متر مکعب',
      'دقت: ±۳٪ از قرائت',
      'زمان پاسخ: کمتر از ۱۵ ثانیه',
      'دمای عملیاتی: ۲۰- تا +۵۰ درجه سانتیگراد',
      'منبع تغذیه: ۱۲ ولت DC یا ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'نظارت PM2.5 و PM10',
      'روش تضعیف بتا',
      'کالیبراسیون خودکار',
      'اعتبارسنجی داده',
      'اتصال شبکه',
    ],
  },
  {
    id: 5,
    name: 'gcAnalyzer',
    description:
      'Gas chromatography system for detailed analysis of complex gas mixtures.',
    longDescription:
      'The GC Analyzer is a sophisticated gas chromatography system designed for detailed analysis of complex gas mixtures. It provides high-resolution separation and identification of individual components, making it ideal for research laboratories and quality control applications.',
    price: '$25,000',
    image: 'http://localhost:3000/images/ama-instruments.jpg',
    category: 'gcAnalyzer',
    specifications: [
      'Column Temperature: 40°C to 400°C',
      'Detector Sensitivity: <1 pg',
      'Analysis Time: 5-60 minutes',
      'Operating Temperature: 15°C to 35°C',
      'Power Supply: 110/220V AC',
    ],
    features: [
      'Multiple detector options',
      'Automated sample injection',
      'Method development software',
      'Database integration',
      'Remote operation capability',
    ],
    // Persian translations
    name_fa: 'گاز کارماتوگراف AMA instruments GC 5000',
    description_fa:
      'سیستم کروماتوگرافی گازی برای تحلیل دقیق مخلوط‌های گازی پیچیده.',
    longDescription_fa:
      'شرکت AMA Instruments با ارائه‌ی پیشرفته‌ترین سیستم‌های کروماتوگرافی گازی آنلاین (GC Online)، راهکاری مطمئن برای پایش مداوم کیفیت هوا و نظارت بر سایت‌های صنعتی فراهم کرده است. این آنالایزرها با طراحی مقاوم و ایمن، عملکردی پایدار حتی در سخت‌ترین شرایط محیطی دارند. سری GC 4000 گزینه‌ای اقتصادی و دقیق برای پایش چند ترکیب ساده است، در حالی که سری GC 5000 با قابلیت جداسازی پیشرفته و حساسیت فوق‌العاده تا سطح ppt، انتخابی بی‌رقیب برای کاربردهای تخصصی و پروژه‌های حساس در حوزه‌ی محیط‌زیست و صنعت محسوب می‌شود.',
    specifications_fa: [
      'دمای ستون: ۴۰ تا ۴۰۰ درجه سانتیگراد',
      'حساسیت آشکارساز: کمتر از ۱ pg',
      'زمان تحلیل: ۵-۶۰ دقیقه',
      'دمای عملیاتی: ۱۵ تا ۳۵ درجه سانتیگراد',
      'منبع تغذیه: ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'گزینه‌های آشکارساز چندگانه',
      'تزریق نمونه خودکار',
      'نرم‌افزار توسعه روش',
      'ادغام پایگاه داده',
      'قابلیت عملیات از راه دور',
    ],
  },
  {
    id: 6,
    name: 'duragDfw',
    description:
      'Advanced triboelectric dust monitoring technology for industrial applications.',
    longDescription:
      'The Tribo Dust Analyzer uses innovative triboelectric technology to detect and measure dust particles in industrial processes. This system is particularly effective in high-temperature and high-dust environments where traditional optical methods may be limited.',
    price: '$16,500',
    image: 'http://localhost:3000/images/tribo-dust-analyzer.jpg',
    category: 'flueDustAnalyzer',
    specifications: [
      'Measurement Range: 0.01-1000 mg/m³',
      'Accuracy: ±10% of reading',
      'Response Time: <5 seconds',
      'Operating Temperature: -50°C to +800°C',
      'Power Supply: 24V DC',
    ],
    features: [
      'Triboelectric detection',
      'High-temperature operation',
      'Self-cleaning mechanism',
      'Rugged construction',
      'Low power consumption',
    ],
    // Persian translations
    name_fa: 'آنالایزر غبار تریبوالکتریک DURAG-Dfw',
    description_fa:
      'فناوری پیشرفته نظارت بر غبار تریبوالکتریک برای کاربردهای صنعتی.',
    longDescription_fa: `این آنالایزر جهت اندازه‌گیری ذرات معلق خروجی دودکش جهت مانیتور کردن خروجی سیستم فیلترینگ صنایع می باشد.`,
  },

  {
    id: 8,
    name: 'faiSwam5a',
    description:
      'Advanced ambient dust monitoring system with high precision PM2.5 and PM10 measurement capabilities.',
    longDescription:
      'The FAI Instruments Swam 5a is a state-of-the-art ambient dust analyzer that provides continuous monitoring of particulate matter in ambient air. This system features advanced beta attenuation technology for accurate PM2.5 and PM10 measurements, making it ideal for environmental monitoring stations and air quality assessment applications.',
    price: '$22,000',
    image: 'http://localhost:3000/images/fai-instruments.jpg',
    category: 'ambientDustAnalyzer',
    specifications: [
      'Measurement Range: 0.1-10000 μg/m³',
      'Accuracy: ±2% of reading',
      'Response Time: <10 seconds',
      'Operating Temperature: -20°C to +50°C',
      'Power Supply: 12V DC or 110/220V AC',
    ],
    features: [
      'PM2.5 and PM10 simultaneous monitoring',
      'Beta attenuation measurement method',
      'Automatic calibration system',
      'Advanced data validation',
      'Network connectivity and remote access',
    ],
    // Persian translations
    name_fa: 'FAI Instruments Swam 5a',
    madeIn: 'ساخت ایتالیا',
    description_fa:
      'سیستم پیشرفته نظارت بر غبار محیط با قابلیت‌های اندازه‌گیری دقیق PM2.5 و PM10.',
    longDescription_fa:
      'این آنالایزر قابلیت اندازه‌گیری کیفیت هوا و ذرات معلق  PM10 و PM2.5 به صورت همزمان را دارد و در مناطق شهری در ایستگاه های سنجش آلودگی هوا مورد استفاده قرار می‌گیرد.',
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰.۱-۱۰۰۰۰ میکروگرم بر متر مکعب',
      'دقت: ±۲٪ از قرائت',
      'زمان پاسخ: کمتر از ۱۰ ثانیه',
      'دمای عملیاتی: ۲۰- تا +۵۰ درجه سانتیگراد',
      'منبع تغذیه: ۱۲ ولت DC یا ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'نظارت همزمان PM2.5 و PM10',
      'روش اندازه‌گیری تضعیف بتا',
      'سیستم کالیبراسیون خودکار',
      'اعتبارسنجی پیشرفته داده',
      'اتصال شبکه و دسترسی از راه دور',
    ],
  },
  {
    id: 9,
    name: 'metoneBAM1020',
    description:
      'High-performance beta attenuation monitor for continuous PM2.5 and PM10 measurement in ambient air.',
    longDescription:
      'The Metone BAM1020 is a reliable and accurate ambient dust analyzer designed for continuous monitoring of particulate matter. This system utilizes proven beta attenuation technology to provide precise measurements of PM2.5 and PM10 concentrations, making it an essential tool for environmental monitoring and air quality assessment.',
    price: '$24,500',
    image: 'http://localhost:3000/images/Metone-BAM1020.jpg',
    category: 'ambientDustAnalyzer',
    specifications: [
      'Measurement Range: 0.1-10000 μg/m³',
      'Accuracy: ±1.5% of reading',
      'Response Time: <15 seconds',
      'Operating Temperature: -30°C to +50°C',
      'Power Supply: 12V DC or 110/220V AC',
    ],
    features: [
      'PM2.5 and PM10 monitoring',
      'Beta attenuation technology',
      'Self-calibrating system',
      'Data logging and export',
      'Weather-resistant housing',
    ],
    // Persian translations
    name_fa: 'Metone BAM1020',
    description_fa:
      'مانیتور تضعیف بتای با عملکرد بالا برای اندازه‌گیری مداوم PM2.5 و PM10 در هوای محیط.',
    longDescription_fa:
      'این آنالایزر جهت اندازه‌گیری ذرات معلق محیطی و شهری مورد استفاده قرار می‌گیرد و قابلیت اندازه گیری PM10 یا PM2.5 به صورت جداگانه را دارد.',
    specifications_fa: [
      'محدوده اندازه‌گیری: ۰.۱-۱۰۰۰۰ میکروگرم بر متر مکعب',
      'دقت: ±۱.۵٪ از قرائت',
      'زمان پاسخ: کمتر از ۱۵ ثانیه',
      'دمای عملیاتی: ۳۰- تا +۵۰ درجه سانتیگراد',
      'منبع تغذیه: ۱۲ ولت DC یا ۱۱۰/۲۲۰ ولت AC',
    ],
    features_fa: [
      'نظارت PM2.5 و PM10',
      'فناوری تضعیف بتا',
      'سیستم خودکالیبره',
      'ثبت و صادرات داده',
      'محفظه مقاوم در برابر آب و هوا',
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getRelatedProducts(
  currentProductId: number,
  category: string,
  limit: number = 3
): Product[] {
  return products
    .filter(
      product =>
        product.id !== currentProductId && product.category === category
    )
    .slice(0, limit);
}
