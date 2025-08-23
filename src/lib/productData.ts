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
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Flue Gas Analyzer',
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
  },
  {
    id: 2,
    name: 'Laser Dust Analyzer',
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
  },
  {
    id: 3,
    name: 'hello',
    description:
      'Environmental monitoring system for air quality assessment and pollution control.',
    longDescription:
      'The Ambient Gas Analyzer is designed for continuous monitoring of ambient air quality in urban and industrial areas. It provides comprehensive data on various air pollutants, helping environmental agencies and industries track air quality trends and ensure compliance with air quality standards.',
    price: '$18,000',
    image: 'http://localhost:3000/images/1.png',
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
  },
  {
    id: 4,
    name: 'Ambient Dust Analyzer',
    description:
      'Comprehensive dust monitoring and analysis solution for environmental applications.',
    longDescription:
      'The Ambient Dust Analyzer provides continuous monitoring of particulate matter in ambient air, helping to assess air quality and identify pollution sources. This system is essential for environmental monitoring stations, research institutions, and regulatory compliance.',
    price: '$14,000',
    image: 'http://localhost:3000/images/2.webp',
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
  },
  {
    id: 5,
    name: 'GC Analyzer',
    description:
      'Gas chromatography system for detailed analysis of complex gas mixtures.',
    longDescription:
      'The GC Analyzer is a sophisticated gas chromatography system designed for detailed analysis of complex gas mixtures. It provides high-resolution separation and identification of individual components, making it ideal for research laboratories and quality control applications.',
    price: '$25,000',
    image: 'http://localhost:3000/images/1.png',
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
  },
  {
    id: 6,
    name: 'Tiribo Dust Analyzer',
    description:
      'Advanced triboelectric dust monitoring technology for industrial applications.',
    longDescription:
      'The Tiribo Dust Analyzer uses innovative triboelectric technology to detect and measure dust particles in industrial processes. This system is particularly effective in high-temperature and high-dust environments where traditional optical methods may be limited.',
    price: '$16,500',
    image: 'http://localhost:3000/images/2.webp',
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
