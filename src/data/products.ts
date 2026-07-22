import { productPhoto } from './images';

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
  { id: 'sole-press-machines', name: 'Sole Press Machines', description: 'Hydraulic sole pressing machines for optimal bonding and durability.' },
  { id: 'lasting-machines', name: 'Lasting Machines', description: 'Toe, heel, and side lasting machines for precise, consistent shaping.' },
  { id: 'cutting-machines', name: 'Cutting Machines', description: 'Clicker presses and strap cutting machines for leather and synthetics.' },
  { id: 'stitching-machines', name: 'Stitching Machines', description: 'Post bed and folding machines for uppers, straps, and welts.' },
  { id: 'finishing-machines', name: 'Finishing Machines', description: 'Edge cleaning, buffing, and polishing machines for a premium finish.' },
  { id: 'pressing-molding-machines', name: 'Pressing & Molding Machines', description: 'Embossing, fusing, cloth press, and molding machines.' },
  { id: 'heat-steam-machines', name: 'Heat Setting & Steam Machines', description: 'Heat setters, toe puff steamers, and humidifiers for material conditioning.' },
  { id: 'spray-finishing-booths', name: 'Spray & Extraction Booths', description: 'Spray booths and dust/fume extraction cabinets for clean finishing.' },
  { id: 'conveyor-systems', name: 'Conveyor Systems', description: 'Modular conveyor lines for efficient material handling on the floor.' },
];

export const products: Product[] = [
  // Sole Press Machines
  {
    slug: 'sole-press-machine',
    name: 'Sole Press Machine',
    categoryId: 'sole-press-machines',
    shortDescription: 'Twin-station hydraulic sole press with digital pressure gauges for consistent bonding.',
    description: 'A twin-station hydraulic sole press built for consistent, even-pressure bonding across a wide range of sole materials. Independent pressure gauges on each station let operators run two pairs at once without cross-affecting pressure settings.',
    images: [productPhoto(19)],
    features: ['Twin independent press stations', 'Analog pressure gauges per station', 'Enclosed splash-guard hood', 'Foot-pedal and palm-button operation'],
    specifications: { 'Model': 'CON/SPM/03', 'Stations': '2', 'Frame': 'Welded steel, powder-coated', 'Power': '3-phase' },
    applications: ['Leather footwear', 'Casual shoes', 'Sports shoes'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
    badge: 'Best Seller',
  },
  {
    slug: 'drum-sole-press-machine',
    name: 'Drum Sole Press Machine',
    categoryId: 'sole-press-machines',
    shortDescription: 'Rotary drum-style twin-station press with digital temperature/timer controls.',
    description: 'A rotary drum-style sole press with two rotating pressing heads and digital timer/temperature controllers on each side, suited to higher-throughput sole bonding where operators load and unload continuously.',
    images: [productPhoto(23)],
    features: ['Rotary drum-style dual heads', 'Digital timer and temperature controls', 'Side access panels for maintenance', 'Compact octagonal footprint'],
    specifications: { 'Model': 'CON/DSPM/02', 'Stations': '2 (rotary)', 'Controls': 'Digital timer + temperature', 'Power': '3-phase' },
    applications: ['Leather footwear', 'Export-grade finishing'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
  },

  // Lasting Machines
  {
    slug: 'automatic-lasting-machine',
    name: 'Automatic Lasting Machine',
    categoryId: 'lasting-machines',
    shortDescription: 'Fully automatic CERIM-type lasting machine with programmable pincer control.',
    description: 'A fully automatic lasting machine with programmable pincer and wiper control, a full safety enclosure, and a multi-function control console. Built for factories running consistent, high-volume lasting across a stable size range.',
    images: [productPhoto(27)],
    features: ['Programmable pincer & wiper control', 'Full safety enclosure with viewing window', 'Multi-station control console', 'High-repeatability cycle'],
    specifications: { 'Type': 'Fully automatic', 'Control': 'Programmable console', 'Safety': 'Enclosed guard with interlock', 'Power': '3-phase' },
    applications: ['Sports shoes', 'Leather footwear', 'High-volume production'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
    badge: 'Best Seller',
  },
  {
    slug: 'twin-head-lasting-machine',
    name: 'Twin-Head Lasting Machine',
    categoryId: 'lasting-machines',
    shortDescription: 'Twin-head lasting machine with independent toe clamps for parallel pair lasting.',
    description: 'A twin-head lasting machine with independent red-clamp toe/heel formers on each side, letting one operator work a left and right shoe in parallel for better line balance.',
    images: [productPhoto(17)],
    features: ['Independent twin lasting heads', 'Foot-pedal operation each side', 'Adjustable clamp pressure', 'Heavy cast-iron frame'],
    specifications: { 'Heads': '2 (independent)', 'Control': 'Dual pressure gauges', 'Power': '3-phase' },
    applications: ['Leather footwear', 'Formal shoes'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'side-lasting-machine',
    name: 'Side Lasting Machine',
    categoryId: 'lasting-machines',
    shortDescription: 'Precision side/toe lasting machine with pincer feed and digital cycle control.',
    description: 'A precision side and toe lasting machine with a pincer feed mechanism and digital cycle controls, designed for detailed shaping work on curved upper sections.',
    images: [productPhoto(16)],
    features: ['Pincer feed mechanism', 'Digital cycle control', 'Foot-pedal engagement', 'Compact mobile frame with castors'],
    specifications: { 'Model': 'CF-727A', 'Control': 'Digital', 'Power': 'Single/3-phase' },
    applications: ['Leather footwear', 'Sample development'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'heel-seat-molding-machine',
    name: 'Heel Seat Molding Machine',
    categoryId: 'lasting-machines',
    shortDescription: 'Twin-station pneumatic heel seat molding press with curved forming jaws.',
    description: 'A twin-station pneumatic press with curved forming jaws that shape the heel seat for a consistent fit, with independent temperature controllers on each side.',
    images: [productPhoto(32)],
    features: ['Twin curved forming jaws', 'Pneumatic clamping cylinders', 'Independent controllers per station', 'Open frame for easy loading'],
    specifications: { 'Stations': '2', 'Actuation': 'Pneumatic', 'Controls': 'Digital + analog dial' },
    applications: ['Leather footwear', 'Formal & casual shoes'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'toe-lasting-press',
    name: 'Toe Lasting Press',
    categoryId: 'lasting-machines',
    shortDescription: 'Compact pneumatic toe lasting press, ideal for sample rooms and small batches.',
    description: 'A compact pneumatic toe lasting press sized for sample rooms and small-batch production, with a simple single-cylinder pincer action.',
    images: [productPhoto(6)],
    features: ['Single-cylinder pneumatic pincer', 'Compact footprint', 'Foot-pedal actuation', 'Low maintenance design'],
    specifications: { 'Actuation': 'Pneumatic cylinder', 'Footprint': 'Compact bench-mount' },
    applications: ['Sample development', 'Small-batch runs'],
    industries: ['MSMEs & Startups'],
    badge: 'New',
  },

  // Cutting Machines
  {
    slug: 'hydraulic-clicker-cutting-press',
    name: 'Hydraulic Clicker Cutting Press',
    categoryId: 'cutting-machines',
    shortDescription: 'Swing-beam hydraulic clicker press for precise die-cutting of leather and synthetics.',
    description: 'A swing-beam hydraulic clicker press for die-cutting shoe uppers, linings, and insoles, with a full 360° swing-arm reach and reliable, evenly distributed cutting pressure across the board.',
    images: [productPhoto(31)],
    features: ['360° swing-beam reach', 'Even pressure distribution', 'Interchangeable cutting boards', 'Overload safety guard'],
    specifications: { 'Type': 'Swing-beam clicker press', 'Actuation': 'Hydraulic', 'Power': '3-phase' },
    applications: ['Upper components', 'Linings', 'Insoles'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
    badge: 'Popular',
  },
  {
    slug: 'strap-cutting-machine',
    name: 'Strap Cutting Machine',
    categoryId: 'cutting-machines',
    shortDescription: 'Roller-fed strap and tape cutting machine for laces, straps, and rubber strips.',
    description: 'A roller-fed cutting machine for straps, laces, and continuous rubber or synthetic strips, driven by a heavy flywheel for consistent cut quality across long production runs.',
    images: [productPhoto(5)],
    features: ['Roller-fed continuous cutting', 'Heavy flywheel drive', 'Adjustable blade gap', 'Foot-pedal control'],
    specifications: { 'Type': 'Roller-fed strap cutter', 'Drive': 'Flywheel', 'Power': '3-phase' },
    applications: ['Sandal straps', 'Shoe laces', 'Rubber strips'],
    industries: ['Shoe Manufacturers', 'MSMEs & Startups'],
  },

  // Stitching Machines
  {
    slug: 'post-bed-stitching-machine',
    name: 'Post Bed Stitching Machine',
    categoryId: 'stitching-machines',
    shortDescription: 'Post-bed stitching machine for curved upper sections and decorative seams.',
    description: 'A post-bed stitching machine mounted on a mobile stand, well suited to structural and decorative stitching on curved shoe upper sections that flat-bed machines can\'t reach easily.',
    images: [productPhoto(11)],
    features: ['Post-bed head for curved panels', 'Mobile castor-mounted stand', 'Foot-pedal speed control', 'Compact table footprint'],
    specifications: { 'Bed Type': 'Post bed', 'Drive': 'Servo motor', 'Mounting': 'Mobile stand' },
    applications: ['Shoe uppers', 'Decorative stitching', 'Welts'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'strap-folding-machine',
    name: 'Strap Folding Machine',
    categoryId: 'stitching-machines',
    shortDescription: 'Edge folding and binding machine for straps, belts, and upper trims.',
    description: 'An edge folding and binding machine that folds and preps strap and trim edges ahead of stitching, delivering a clean, consistent edge on long production runs.',
    images: [productPhoto(13)],
    features: ['Consistent fold width', 'Long flat-bed work surface', 'Digital speed control', 'Mobile stand with castors'],
    specifications: { 'Work Surface': 'Long flat-bed', 'Control': 'Digital', 'Mounting': 'Mobile stand' },
    applications: ['Straps', 'Belts', 'Upper trims'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },

  // Finishing Machines
  {
    slug: 'edge-cleaning-machine',
    name: 'Edge Cleaning Machine',
    categoryId: 'finishing-machines',
    shortDescription: 'Single-spindle edge cleaning and sanding machine with built-in dust extraction.',
    description: 'A single-spindle edge cleaning and sanding machine with an integrated dust extraction bag, keeping the finishing station clean while delivering a uniform edge trim.',
    images: [productPhoto(24), productPhoto(26)],
    features: ['Integrated dust extraction bag', 'Single-spindle sanding head', 'Mesh work tray', 'Wall-mountable frame'],
    specifications: { 'Model': 'CON/ECM/04', 'Extraction': 'Built-in dust bag', 'Power': '3-phase motor' },
    applications: ['Sole edges', 'Upper trimming'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'polishing-machine',
    name: 'Polishing Machine',
    categoryId: 'finishing-machines',
    shortDescription: 'Twin-shaft polishing machine for a consistent, high-gloss shoe finish.',
    description: 'A twin-shaft polishing machine ("Polliser") for final finishing, giving formal and leather footwear a consistent, high-gloss surface before dispatch.',
    images: [productPhoto(18)],
    features: ['Twin-shaft polishing wheels', 'Digital speed control', 'Compact bench-top frame', 'Low-vibration motor mount'],
    specifications: { 'Model': 'CON/PM/05', 'Shafts': '2', 'Control': 'Digital speed dial' },
    applications: ['Formal leather shoes', 'Export-grade finishing'],
    industries: ['Leather Industries', 'Export Houses'],
    badge: 'Popular',
  },
  {
    slug: 'buffing-machine',
    name: 'Buffing Machine',
    categoryId: 'finishing-machines',
    shortDescription: 'Dual-wheel buffing machine with dust collection for pre-polish surface prep.',
    description: 'A dual-wheel buffing machine with an attached dust collection bag, used to prep leather and synthetic upper surfaces before final polishing.',
    images: [productPhoto(25)],
    features: ['Dual buffing wheels', 'Attached dust collection bag', 'Overhead work light mount', 'Twin motor drive'],
    specifications: { 'Model': 'CON/BRM/03', 'Wheels': '2', 'Extraction': 'Bag collection' },
    applications: ['Leather uppers', 'Pre-polish prep'],
    industries: ['Leather Industries'],
  },

  // Pressing & Molding Machines
  {
    slug: 'roller-embossing-machine',
    name: 'Roller Embossing Machine',
    categoryId: 'pressing-molding-machines',
    shortDescription: 'Bench-top roller embossing machine for texture and pattern work on leather.',
    description: 'A bench-top roller embossing machine for adding texture and pattern detail to leather and synthetic components, with a digital timer and adjustable roller pressure.',
    images: [productPhoto(4)],
    features: ['Adjustable roller pressure', 'Digital timer control', 'Compact bench-top stand', 'Interchangeable embossing rollers'],
    specifications: { 'Type': 'Roller embossing', 'Control': 'Digital timer', 'Mounting': 'Bench-top stand' },
    applications: ['Leather texturing', 'Pattern embossing'],
    industries: ['Leather Industries'],
  },
  {
    slug: 'cloth-press-machine',
    name: 'Cloth Press Machine',
    categoryId: 'pressing-molding-machines',
    shortDescription: 'Round-platen cloth press machine with digital temperature control.',
    description: 'A round-platen press for cloth and fabric components, with digital temperature control and a ventilated hood for consistent, repeatable pressing cycles.',
    images: [productPhoto(9)],
    features: ['Round pressing platen', 'Digital temperature control', 'Ventilated safety hood', 'Foot-pedal operation'],
    specifications: { 'Platen': 'Round', 'Control': 'Digital temperature + timer', 'Power': '3-phase' },
    applications: ['Fabric uppers', 'Lining components'],
    industries: ['Shoe Manufacturers'],
  },
  {
    slug: 'fusing-machine',
    name: 'Fusing Machine',
    categoryId: 'pressing-molding-machines',
    shortDescription: 'Round-platen fusing machine for bonding lining and interlining materials.',
    description: 'A round-platen fusing machine used to bond lining and interlining materials under controlled heat and pressure, with a ventilated hood and digital controls.',
    images: [productPhoto(28)],
    features: ['Round fusing platen', 'Ventilated safety hood', 'Digital control panel', 'Open-frame base for easy access'],
    specifications: { 'Platen': 'Round', 'Control': 'Digital', 'Power': '3-phase' },
    applications: ['Lining fusion', 'Interlining bonding'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'sole-molding-press',
    name: 'Sole Molding Press',
    categoryId: 'pressing-molding-machines',
    shortDescription: 'Hooded sole molding press for consistent shaping under heat and pressure.',
    description: 'A hooded sole molding press that shapes soles under controlled heat and pressure, with a fold-down safety hood and analog gauge monitoring.',
    images: [productPhoto(2)],
    features: ['Fold-down safety hood', 'Analog pressure gauge', 'Digital timer control', 'Pedestal base'],
    specifications: { 'Type': 'Hooded molding press', 'Control': 'Digital timer + analog gauge' },
    applications: ['Sole molding', 'Sandal production'],
    industries: ['Shoe Manufacturers'],
  },
  {
    slug: 'pneumatic-eyelet-press',
    name: 'Pneumatic Eyelet Press',
    categoryId: 'pressing-molding-machines',
    shortDescription: 'Compact pneumatic press for eyelet, rivet, and small-component fitting.',
    description: 'A compact pneumatic press for fitting eyelets, rivets, and other small metal components, available as a single unit or paired for higher-throughput lines.',
    images: [productPhoto(12), productPhoto(29)],
    features: ['Pneumatic cylinder actuation', 'Foot-pedal control', 'Compact footprint', 'Pairs easily for twin-station setups'],
    specifications: { 'Actuation': 'Pneumatic cylinder', 'Footprint': 'Compact bench-mount' },
    applications: ['Eyelet fitting', 'Rivet fitting'],
    industries: ['Shoe Manufacturers', 'MSMEs & Startups'],
  },

  // Heat Setting & Steam Machines
  {
    slug: 'heat-setter-machine',
    name: 'Heat Setter Machine',
    categoryId: 'heat-steam-machines',
    shortDescription: 'Tunnel-style heat setter with mesh conveyor bed for consistent shape retention.',
    description: 'A tunnel-style heat setter that passes shoes over a mesh conveyor bed under controlled heat, locking in shape and reducing material relaxation before final finishing.',
    images: [productPhoto(1)],
    features: ['Mesh conveyor bed', 'Digital temperature control panel', 'Mobile castor-mounted frame', 'Side access panels'],
    specifications: { 'Type': 'Tunnel heat setter', 'Bed': 'Mesh conveyor', 'Control': 'Digital panel with indicator lamps' },
    applications: ['Shape setting', 'Pre-finishing conditioning'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
    badge: 'Best Seller',
  },
  {
    slug: 'toe-puff-steam-machine',
    name: 'Toe Puff Steam Machine',
    categoryId: 'heat-steam-machines',
    shortDescription: 'Twin-head steam machine for softening and shaping toe puff material.',
    description: 'A twin-head steam machine that softens toe puff and counter material ahead of lasting, with independent temperature and timer controls on each head and dual foot pedals for two-handed operation.',
    images: [productPhoto(10), productPhoto(30)],
    features: ['Twin independent steam heads', 'Dual foot-pedal control', 'Individual temperature & timer dials', 'Splash-guard hood'],
    specifications: { 'Model': 'CON/TPM/01', 'Heads': '2', 'Control': 'Independent digital + analog dials' },
    applications: ['Toe puff softening', 'Counter shaping'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'toe-humidifier-machine',
    name: 'Toe Humidifier Machine',
    categoryId: 'heat-steam-machines',
    shortDescription: 'Compact toe humidifier for pre-lasting moisture conditioning.',
    description: 'A compact humidifying unit that conditions toe material with moisture ahead of lasting, improving pliability and reducing cracking during shaping.',
    images: [productPhoto(8)],
    features: ['Stainless steam chamber', 'Dual analog temperature dials', 'Compact pedestal footprint', 'Quick warm-up cycle'],
    specifications: { 'Type': 'Toe humidifier', 'Chamber': 'Stainless steel', 'Control': 'Analog dial' },
    applications: ['Pre-lasting conditioning'],
    industries: ['Shoe Manufacturers'],
  },
  {
    slug: 'humidifier-machine',
    name: 'Humidifier Machine',
    categoryId: 'heat-steam-machines',
    shortDescription: 'General-purpose humidifying unit for leather and upper material conditioning.',
    description: 'A general-purpose humidifying unit used to condition leather and upper materials before shaping operations, with a stainless steel tray and simple analog controls.',
    images: [productPhoto(20)],
    features: ['Stainless steel steam tray', 'Analog dial controls', 'Compact pedestal footprint', 'Low water consumption'],
    specifications: { 'Model': 'CON/HFM/01', 'Tray': 'Stainless steel', 'Control': 'Analog dial' },
    applications: ['Leather conditioning', 'Pre-shaping prep'],
    industries: ['Leather Industries', 'Shoe Manufacturers'],
  },
  {
    slug: 'heat-setting-tunnel',
    name: 'Heat Setting Tunnel',
    categoryId: 'heat-steam-machines',
    shortDescription: 'Extended tunnel conveyor for continuous heat-setting on higher-volume lines.',
    description: 'An extended tunnel conveyor version of our heat setter, built for continuous throughput on higher-volume lines, with a wide mesh belt and side-mounted motor drive.',
    images: [productPhoto(14)],
    features: ['Extended tunnel length', 'Wide mesh conveyor belt', 'Side-mounted drive motor', 'Mobile castor frame'],
    specifications: { 'Type': 'Tunnel conveyor heat setter', 'Belt': 'Wide mesh', 'Mounting': 'Mobile frame' },
    applications: ['Continuous shape setting', 'High-volume lines'],
    industries: ['Export Houses', 'Shoe Manufacturers'],
  },

  // Spray & Extraction Booths
  {
    slug: 'spray-booth-machine',
    name: 'Spray Booth Machine',
    categoryId: 'spray-finishing-booths',
    shortDescription: 'Enclosed spray booth with extraction fan for clean, contained finishing.',
    description: 'An enclosed spray booth with a roof-mounted extraction fan and mesh work tray, containing overspray and fumes during adhesive or finish spraying.',
    images: [productPhoto(3)],
    features: ['Roof-mounted extraction fan', 'Mesh work tray', 'Multi-switch control panel', 'Mobile base'],
    specifications: { 'Type': 'Enclosed spray booth', 'Extraction': 'Roof-mounted fan', 'Control': 'Multi-switch panel' },
    applications: ['Adhesive spraying', 'Finish spraying'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },
  {
    slug: 'fume-extraction-booth',
    name: 'Fume Extraction Booth',
    categoryId: 'spray-finishing-booths',
    shortDescription: 'Stainless steel extraction booth for dust and fume-heavy finishing operations.',
    description: 'A stainless steel extraction booth built for dust and fume-heavy operations, with a mesh work grate and roof-mounted motor for reliable airflow.',
    images: [productPhoto(7)],
    features: ['Stainless steel construction', 'Mesh work grate', 'Roof-mounted extraction motor', 'Freestanding legs'],
    specifications: { 'Construction': 'Stainless steel', 'Extraction': 'Roof-mounted motor', 'Type': 'Freestanding booth' },
    applications: ['Dust extraction', 'Fume extraction'],
    industries: ['Shoe Manufacturers', 'Leather Industries'],
  },

  // Conveyor Systems
  {
    slug: 'smart-conveyor-system',
    name: 'Smart Conveyor System',
    categoryId: 'conveyor-systems',
    shortDescription: 'Modular twin-line conveyor system with brush-curtain stations for material handling.',
    description: 'A modular conveyor system, shown here as a twin-line (L-1/L-2) installation, moving components between production stages through brush-curtain access points that keep dust contained without slowing the line down.',
    images: [productPhoto(15), productPhoto(21), productPhoto(22)],
    features: ['Modular multi-line configuration', 'Brush-curtain access stations', 'Digital control panel per line', 'Roller-bed loading trays'],
    specifications: { 'Configuration': 'Modular, multi-line', 'Access': 'Brush-curtain stations', 'Control': 'Digital panel per line' },
    applications: ['Assembly line transport', 'Inter-station buffering'],
    industries: ['Shoe Manufacturers', 'Export Houses'],
    badge: 'Best Seller',
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
