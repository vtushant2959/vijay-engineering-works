import { machineryImages, factoryImages, stitchingImages, warehouseImages, pick } from './images';

export interface Product {
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  industries: string[];
  badge?: 'Best Seller' | 'New' | 'Popular';
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'shoe-making-machines', name: 'Shoe Making Machines', description: 'Complete range of machinery for shoe production from cutting to finishing.' },
  { id: 'sole-press-machines', name: 'Sole Press Machines', description: 'Hydraulic sole pressing machines for optimal bonding and durability.' },
  { id: 'hydraulic-press-machines', name: 'Hydraulic Press Machines', description: 'Industrial hydraulic presses for various footwear manufacturing applications.' },
  { id: 'shoe-cutting-machines', name: 'Shoe Cutting Machines', description: 'High-precision cutting machines for leather, rubber, and synthetic materials.' },
  { id: 'stitching-machines', name: 'Stitching Machines', description: 'Industrial stitching machines for uppers, welts, and decorative seams.' },
  { id: 'toe-lasting-machines', name: 'Toe Lasting Machines', description: 'Automatic and manual toe lasting for precise, consistent shaping.' },
  { id: 'heel-lasting-machines', name: 'Heel Lasting Machines', description: 'Precision heel lasting with wiper mechanisms for consistent results.' },
  { id: 'sanding-machines', name: 'Sanding Machines', description: 'Industrial sanding machines with dust collection for clean finishing.' },
  { id: 'polishing-machines', name: 'Polishing Machines', description: 'High-gloss polishing and buffing machines for premium finishes.' },
  { id: 'conveyor-systems', name: 'Conveyor Systems', description: 'Modular conveyor systems for efficient material handling on the line.' },
];

export const products: Product[] = [
  // Shoe Making Machines
  {
    slug: 'universal-shoe-making-unit-smu-500',
    name: 'Universal Shoe Making Unit SMU-500',
    categoryId: 'shoe-making-machines',
    shortDescription: 'Compact all-in-one unit combining cutting, lasting, and finishing stations for small-batch production.',
    description: 'A space-efficient, all-in-one production cell that combines cutting, lasting, and finishing stations, purpose-built for small and mid-scale footwear units that need flexibility without a full production line footprint.',
    images: [pick(machineryImages, 0, 1000), pick(machineryImages, 1, 1000), pick(factoryImages, 0, 1000)],
    features: ['Modular workstation layout', 'Tool-free changeover', 'Integrated dust extraction', 'Low-noise operation (<75dB)', 'Compact 12 sq. m. footprint'],
    specifications: { 'Model': 'SMU-500', 'Stations': '4-in-1', 'Power': '5.5 kW', 'Voltage': '415V, 3 Phase', 'Footprint': '4m x 3m', 'Weight': '1,150 kg' },
    applications: ['Casual shoes', 'Sandals', 'Small-batch runs'],
    industries: ['MSMEs & Startups', 'Export Houses'],
    badge: 'Best Seller',
  },
  {
    slug: 'compact-production-line-cpl-8',
    name: 'Compact Production Line CPL-8',
    categoryId: 'shoe-making-machines',
    shortDescription: 'An 8-station semi-automatic line for growing units scaling past manual production.',
    description: 'An 8-station semi-automatic production line designed for units that have outgrown manual workflows but aren’t ready for a full automated plant. Stations can be added incrementally as volume grows.',
    images: [pick(factoryImages, 1, 1000), pick(machineryImages, 2, 1000), pick(machineryImages, 3, 1000)],
    features: ['Incrementally expandable', 'Shared conveyor backbone', 'Central control panel', 'Balanced line timing'],
    specifications: { 'Model': 'CPL-8', 'Stations': '8', 'Power': '18 kW total', 'Voltage': '415V, 3 Phase', 'Line Length': '14m', 'Output': 'Up to 400 pairs/shift' },
    applications: ['Leather footwear', 'Sports shoes', 'Safety boots'],
    industries: ['Shoe Manufacturers', 'Safety Shoe Manufacturers'],
  },

  // Sole Press Machines
  {
    slug: 'auto-sole-press-spm-100',
    name: 'Auto Sole Press Machine SPM-100',
    categoryId: 'sole-press-machines',
    shortDescription: 'Hydraulic sole press with digital temperature control and automatic timer.',
    description: 'Industry-leading hydraulic sole press machine with advanced digital controls for precise and consistent sole bonding. Designed for high-volume production with minimal operator fatigue.',
    images: [pick(machineryImages, 4, 1000), pick(machineryImages, 5, 1000), pick(factoryImages, 2, 1000), pick(machineryImages, 6, 1000)],
    features: ['Digital temperature control (0-300°C)', 'Automatic timer with programmable settings', 'Hydraulic pressure up to 10 tons', 'Energy-efficient design (40% power savings)', 'Quick die change system', 'Emergency stop with safety guards', 'LCD display with touch controls', 'Memory for 50+ program settings'],
    specifications: { 'Model': 'SPM-100', 'Pressing Force': '10 Tons', 'Platen Size': '400mm x 300mm', 'Temperature Range': '0-300°C', 'Power': '3.5 kW', 'Voltage': '415V, 3 Phase', 'Air Pressure': '6-8 Bar', 'Machine Weight': '850 kg', 'Dimensions': '1200 x 800 x 1600 mm' },
    applications: ['Sports shoes', 'Leather footwear', 'Safety boots', 'Casual shoes', 'Sandals'],
    industries: ['Shoe Manufacturers', 'Leather Industries', 'Export Houses', 'Safety Shoe Manufacturers'],
    badge: 'Best Seller',
  },
  {
    slug: 'twin-station-sole-press-spm-220',
    name: 'Twin-Station Sole Press SPM-220',
    categoryId: 'sole-press-machines',
    shortDescription: 'Dual-station press doubling throughput for high-volume factories.',
    description: 'A dual-station variant of our flagship sole press, letting one operator run two presses in parallel for near-double throughput without doubling floor space.',
    images: [pick(machineryImages, 7, 1000), pick(machineryImages, 8, 1000), pick(factoryImages, 3, 1000)],
    features: ['Two independent presses, one control unit', 'Staggered cycle timing', 'Shared hydraulic power pack', 'Individual safety interlocks'],
    specifications: { 'Model': 'SPM-220', 'Pressing Force': '2 x 10 Tons', 'Power': '6 kW', 'Voltage': '415V, 3 Phase', 'Weight': '1,450 kg' },
    applications: ['High-volume sports shoes', 'Export orders'],
    industries: ['Export Houses', 'Shoe Manufacturers'],
  },
  {
    slug: 'mini-sole-press-spm-40',
    name: 'Mini Sole Press SPM-40',
    categoryId: 'sole-press-machines',
    shortDescription: 'Entry-level bench-top sole press for workshops and training centers.',
    description: 'A bench-top sole press sized for workshops, repair units, and training centers where a full industrial press isn’t justified.',
    images: [pick(machineryImages, 9, 1000), pick(machineryImages, 10, 1000)],
    features: ['Bench-top footprint', 'Manual timer dial', 'Low power draw'],
    specifications: { 'Model': 'SPM-40', 'Pressing Force': '4 Tons', 'Power': '1.2 kW', 'Weight': '180 kg' },
    applications: ['Repairs', 'Training workshops', 'Small sandals'],
    industries: ['MSMEs & Startups'],
    badge: 'New',
  },

  // Hydraulic Press Machines
  {
    slug: 'hydraulic-cutting-press-hpm-50',
    name: 'Hydraulic Cutting Machine HPM-50',
    categoryId: 'hydraulic-press-machines',
    shortDescription: 'High-precision cutting press for leather and synthetic materials.',
    description: 'A high-precision hydraulic cutting press engineered for consistent die-cutting across leather, rubber, and synthetic upper materials, with reinforced safety guarding throughout.',
    images: [pick(machineryImages, 11, 1000), pick(machineryImages, 12, 1000), pick(factoryImages, 4, 1000)],
    features: ['Precise Cutting', 'Multi-layer capability up to 6 plies', 'Full-perimeter safety guards', 'Adjustable stroke depth', 'Beam-type or swing-arm configuration'],
    specifications: { 'Model': 'HPM-50', 'Pressing Force': '50 Tons', 'Cutting Area': '600mm x 400mm', 'Power': '4 kW', 'Voltage': '415V, 3 Phase', 'Weight': '1,600 kg' },
    applications: ['Leather uppers', 'Rubber components', 'Insoles'],
    industries: ['Leather Industries', 'Shoe Manufacturers'],
    badge: 'New',
  },
  {
    slug: 'heavy-duty-hydraulic-press-hpm-120',
    name: 'Heavy-Duty Hydraulic Press HPM-120',
    categoryId: 'hydraulic-press-machines',
    shortDescription: 'Rugged high-tonnage press for safety boot components and heavy leather goods.',
    description: 'Built for heavy-gauge leather and rubber components used in safety boots and industrial footwear, this press delivers consistent tonnage across large platen areas.',
    images: [pick(machineryImages, 13, 1000), pick(machineryImages, 14, 1000)],
    features: ['120-ton capacity', 'Reinforced C-frame construction', 'Hardened steel platens', 'Overload protection'],
    specifications: { 'Model': 'HPM-120', 'Pressing Force': '120 Tons', 'Platen Size': '800mm x 600mm', 'Power': '7.5 kW', 'Weight': '2,900 kg' },
    applications: ['Safety boot soles', 'Steel-toe components', 'Industrial rubber parts'],
    industries: ['Safety Shoe Manufacturers'],
  },
  {
    slug: 'bench-hydraulic-press-hpm-15',
    name: 'Bench Hydraulic Press HPM-15',
    categoryId: 'hydraulic-press-machines',
    shortDescription: 'Compact 15-ton bench press for sample rooms and R&D labs.',
    description: 'A compact 15-ton bench-mounted press suited to sample rooms, R&D labs, and low-volume component pressing.',
    images: [pick(machineryImages, 15, 1000), pick(machineryImages, 16, 1000)],
    features: ['Bench-mounted', 'Manual pressure gauge', 'Compact footprint'],
    specifications: { 'Model': 'HPM-15', 'Pressing Force': '15 Tons', 'Power': '1.5 kW', 'Weight': '320 kg' },
    applications: ['Sample development', 'Prototyping'],
    industries: ['MSMEs & Startups', 'Export Houses'],
  },

  // Shoe Cutting Machines
  {
    slug: 'swing-arm-clicker-press-scm-60',
    name: 'Swing-Arm Clicker Press SCM-60',
    categoryId: 'shoe-cutting-machines',
    shortDescription: 'Classic swing-beam clicker press for die-cutting uppers and components.',
    description: 'A dependable swing-beam clicker press for die-cutting shoe uppers, linings, and insoles with even pressure distribution across the cutting board.',
    images: [pick(machineryImages, 17, 1000), pick(machineryImages, 18, 1000), pick(factoryImages, 5, 1000)],
    features: ['360° swing arm reach', 'Even pressure distribution', 'Interchangeable cutting boards', 'Foot-pedal + palm-button dual control'],
    specifications: { 'Model': 'SCM-60', 'Pressing Force': '6 Tons', 'Swing Radius': '650mm', 'Power': '1.1 kW', 'Weight': '480 kg' },
    applications: ['Upper components', 'Linings', 'Insoles'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
    badge: 'Popular',
  },
  {
    slug: 'automatic-belt-cutting-machine-scm-90',
    name: 'Automatic Belt Cutting Machine SCM-90',
    categoryId: 'shoe-cutting-machines',
    shortDescription: 'CNC-guided belt cutting for straps, laces, and rubber strips.',
    description: 'A programmable belt-cutting machine for straps, laces, and continuous rubber or synthetic strips, with digital length presets for repeatable accuracy.',
    images: [pick(machineryImages, 19, 1000), pick(machineryImages, 20, 1000)],
    features: ['Digital length presets', 'Automatic feed roller', 'Blade auto-sharpening cycle'],
    specifications: { 'Model': 'SCM-90', 'Max Width': '150mm', 'Power': '0.75 kW', 'Weight': '140 kg' },
    applications: ['Sandal straps', 'Shoe laces', 'Rubber strips'],
    industries: ['Shoe Manufacturers', 'MSMEs & Startups'],
  },

  // Stitching Machines
  {
    slug: 'post-bed-roller-feed-machine-stm-2n',
    name: 'Double Needle Post Bed Roller Feed Machine',
    categoryId: 'stitching-machines',
    shortDescription: 'Twin-needle post bed machine for decorative and structural upper stitching.',
    description: 'A twin-needle post-bed roller-feed machine designed for structural and decorative stitching on curved shoe upper sections, with synchronized needle bars for parallel seams.',
    images: [pick(stitchingImages, 0, 1000), pick(machineryImages, 21, 1000), pick(factoryImages, 6, 1000)],
    features: ['Twin synchronized needle bars', 'Roller-feed for curved panels', 'Automatic thread trimmer', 'Variable stitch length'],
    specifications: { 'Model': 'STM-2N', 'Needle Bars': '2', 'Max Speed': '2,000 RPM', 'Power': '0.4 kW', 'Weight': '95 kg' },
    applications: ['Shoe uppers', 'Decorative stitching', 'Welts'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'heavy-duty-zigzag-machine-stm-zz1',
    name: 'Heavy-Duty Flat Bed Zig-Zag Sewing Machine',
    categoryId: 'stitching-machines',
    shortDescription: 'Flat-bed zig-zag machine for reinforced seams on heavy leather and canvas.',
    description: 'A heavy-duty flat-bed zig-zag machine built for reinforced seams on thick leather, canvas, and webbing used in industrial and safety footwear.',
    images: [pick(stitchingImages, 1, 1000), pick(machineryImages, 22, 1000)],
    features: ['Reinforced zig-zag stitch', 'Handles up to 8mm material thickness', 'Large bobbin capacity'],
    specifications: { 'Model': 'STM-ZZ1', 'Max Stitch Width': '10mm', 'Max Speed': '1,500 RPM', 'Power': '0.4 kW' },
    applications: ['Safety boots', 'Webbing straps', 'Canvas shoes'],
    industries: ['Safety Shoe Manufacturers', 'Shoe Manufacturers'],
  },

  // Toe Lasting Machines
  {
    slug: 'auto-toe-lasting-machine-tlm-200',
    name: 'Automatic Toe Lasting Machine TLM-200',
    categoryId: 'toe-lasting-machines',
    shortDescription: 'Automatic and manual toe lasting with adjustable lasting parameters.',
    description: 'A precision toe lasting machine offering both automatic and manual modes, with adjustable lasting parameters for consistent, wrinkle-free toe shaping across sizes.',
    images: [pick(machineryImages, 23, 1000), pick(machineryImages, 24, 1000), pick(factoryImages, 7, 1000)],
    features: ['Auto Adjustment across shoe sizes', 'Quick Change tooling', 'Pincer-type lasting head', 'Durable cast-iron frame'],
    specifications: { 'Model': 'TLM-200', 'Cycle Time': '8-12 sec/pair', 'Power': '2.2 kW', 'Air Pressure': '6 Bar', 'Weight': '620 kg' },
    applications: ['Sports shoes', 'Casual shoes', 'Leather footwear'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
    badge: 'Best Seller',
  },
  {
    slug: 'semi-auto-toe-lasting-machine-tlm-90',
    name: 'Semi-Automatic Toe Lasting Machine TLM-90',
    categoryId: 'toe-lasting-machines',
    shortDescription: 'Operator-assisted toe lasting for small and mid-volume units.',
    description: 'An operator-assisted toe lasting machine that balances speed with a lower capital cost, well suited to small and mid-volume production units.',
    images: [pick(machineryImages, 25, 1000), pick(machineryImages, 26, 1000)],
    features: ['Operator-assisted cycle', 'Adjustable clamping pressure', 'Compact footprint'],
    specifications: { 'Model': 'TLM-90', 'Cycle Time': '15-20 sec/pair', 'Power': '1.5 kW', 'Weight': '410 kg' },
    applications: ['Sandals', 'Casual shoes'],
    industries: ['MSMEs & Startups'],
  },

  // Heel Lasting Machines
  {
    slug: 'heel-lasting-machine-hlm-150',
    name: 'Heel Lasting Machine HLM-150',
    categoryId: 'heel-lasting-machines',
    shortDescription: 'Precision heel lasting with wiper mechanism for consistent results.',
    description: 'A precision heel lasting machine with a synchronized wiper mechanism that delivers consistent heel-seat shaping, minimizing rework and material waste.',
    images: [pick(machineryImages, 0, 1000), pick(machineryImages, 8, 1000), pick(factoryImages, 8, 1000)],
    features: ['Wiper System with synchronized motion', 'Even Pressure distribution', 'Low Noise operation', 'Programmable dwell time'],
    specifications: { 'Model': 'HLM-150', 'Cycle Time': '10-14 sec/pair', 'Power': '2 kW', 'Air Pressure': '6 Bar', 'Weight': '580 kg' },
    applications: ['Leather footwear', 'Formal shoes', 'Sports shoes'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'heavy-duty-heel-lasting-machine-hlm-300',
    name: 'Heavy-Duty Heel Lasting Machine HLM-300',
    categoryId: 'heel-lasting-machines',
    shortDescription: 'High-tonnage heel lasting for boots and heavy safety footwear.',
    description: 'A reinforced heel lasting machine built for boots and heavy-gauge safety footwear that need stronger clamping force and a wider heel-seat range.',
    images: [pick(machineryImages, 1, 1000), pick(machineryImages, 9, 1000)],
    features: ['High clamping force', 'Wide heel-seat range', 'Reinforced frame for boots'],
    specifications: { 'Model': 'HLM-300', 'Cycle Time': '14-18 sec/pair', 'Power': '3 kW', 'Weight': '710 kg' },
    applications: ['Boots', 'Safety footwear'],
    industries: ['Safety Shoe Manufacturers'],
  },

  // Sanding Machines
  {
    slug: 'industrial-sanding-machine-spm-80',
    name: 'Industrial Sanding Machine SPM-80',
    categoryId: 'sanding-machines',
    shortDescription: 'Industrial sanding machine with dust collection system.',
    description: 'An industrial edge and bottom sanding machine with integrated dust extraction, keeping the finishing line clean while delivering a uniform surface texture.',
    images: [pick(machineryImages, 2, 1000), pick(machineryImages, 10, 1000), pick(factoryImages, 9, 1000)],
    features: ['Dust Extraction with HEPA-rated filter', 'Variable Speed drive', 'Heavy Duty motor', 'Interchangeable abrasive belts'],
    specifications: { 'Model': 'SPM-80', 'Belt Speed': '0-25 m/s variable', 'Power': '1.8 kW', 'Weight': '210 kg' },
    applications: ['Sole edges', 'Bottom roughing', 'Upper trimming'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'twin-spindle-sanding-machine-spm-95',
    name: 'Twin-Spindle Sanding Machine SPM-95',
    categoryId: 'sanding-machines',
    shortDescription: 'Dual-spindle sander for simultaneous left/right shoe processing.',
    description: 'A twin-spindle sander that lets one operator process left and right shoes simultaneously, improving line balance on higher-volume finishing stations.',
    images: [pick(machineryImages, 3, 1000), pick(machineryImages, 11, 1000)],
    features: ['Dual independent spindles', 'Shared dust collection manifold', 'Foot-pedal engagement'],
    specifications: { 'Model': 'SPM-95', 'Spindles': '2', 'Power': '3 kW', 'Weight': '340 kg' },
    applications: ['High-volume finishing lines'],
    industries: ['Export Houses', 'Shoe Manufacturers'],
  },

  // Polishing Machines
  {
    slug: 'high-gloss-polishing-machine-pgm-70',
    name: 'High-Gloss Polishing Machine PGM-70',
    categoryId: 'polishing-machines',
    shortDescription: 'Multi-wheel buffing station for a premium, high-gloss shoe finish.',
    description: 'A multi-wheel buffing and polishing station engineered to deliver a consistent, premium high-gloss finish across formal and leather footwear ranges.',
    images: [pick(machineryImages, 4, 1000), pick(machineryImages, 12, 1000), pick(factoryImages, 10, 1000)],
    features: ['4-wheel buffing station', 'Adjustable wheel speed', 'Integrated lint/dust collection', 'Ergonomic operator layout'],
    specifications: { 'Model': 'PGM-70', 'Wheels': '4', 'Power': '2.5 kW', 'Weight': '260 kg' },
    applications: ['Formal leather shoes', 'Export-grade finishing'],
    industries: ['Leather Industries', 'Export Houses'],
    badge: 'Popular',
  },
  {
    slug: 'compact-polishing-unit-pgm-30',
    name: 'Compact Polishing Unit PGM-30',
    categoryId: 'polishing-machines',
    shortDescription: 'Single-wheel bench polisher for small workshops and repair units.',
    description: 'A single-wheel bench-top polisher sized for small workshops, repair counters, and quality-check stations.',
    images: [pick(machineryImages, 5, 1000), pick(machineryImages, 13, 1000)],
    features: ['Bench-top design', 'Single buffing wheel', 'Low power draw'],
    specifications: { 'Model': 'PGM-30', 'Wheels': '1', 'Power': '0.5 kW', 'Weight': '45 kg' },
    applications: ['Repairs', 'Quality checks', 'Small workshops'],
    industries: ['MSMEs & Startups'],
  },

  // Conveyor Systems
  {
    slug: 'modular-conveyor-system-csl-500',
    name: 'Modular Conveyor System CSL-500',
    categoryId: 'conveyor-systems',
    shortDescription: 'Complete conveyor system for material handling in production lines.',
    description: 'A modular belt conveyor system for material handling between production stages, designed for straightforward reconfiguration as your line layout evolves.',
    images: [pick(warehouseImages, 0, 1000), pick(factoryImages, 11, 1000), pick(machineryImages, 6, 1000)],
    features: ['Modular Design with bolt-together sections', 'Energy Efficient variable-speed drives', 'Customizable length and height', 'Optional overhead or floor-level mounting'],
    specifications: { 'Model': 'CSL-500', 'Belt Width': '400-600mm (configurable)', 'Speed': '0.1-0.6 m/s variable', 'Power': '0.75 kW per 5m section' },
    applications: ['Assembly line transport', 'Inter-station buffering'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
  },
  {
    slug: 'inclined-belt-conveyor-csl-inc-3',
    name: 'Inclined Belt Conveyor CSL-INC-3',
    categoryId: 'conveyor-systems',
    shortDescription: 'Cleated incline conveyor for moving components between floor levels.',
    description: 'A cleated incline conveyor for moving components and finished pairs between floor levels or over line obstructions, with anti-slip belting.',
    images: [pick(warehouseImages, 1, 1000), pick(warehouseImages, 2, 1000)],
    features: ['Cleated anti-slip belt', 'Adjustable incline angle', 'Side guard rails'],
    specifications: { 'Model': 'CSL-INC-3', 'Incline Angle': 'Up to 30°', 'Power': '0.55 kW', 'Belt Width': '350mm' },
    applications: ['Multi-level factory layouts'],
    industries: ['Shoe Manufacturers'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getCategoryCounts(): Record<string, number> {
  return categories.reduce<Record<string, number>>((acc, category) => {
    acc[category.id] = getProductsByCategory(category.id).length;
    return acc;
  }, {});
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter((p) => p.categoryId === product.categoryId && p.slug !== product.slug);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = products.filter((p) => p.categoryId !== product.categoryId && p.slug !== product.slug);
  return [...sameCategory, ...others].slice(0, limit);
}
