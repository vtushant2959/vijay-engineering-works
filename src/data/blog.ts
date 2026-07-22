import { productPhoto } from './images';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
}

export const blogCategories = ['All', 'Business Guide', 'Technical', 'Maintenance', 'Technology'];

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-shoe-factory',
    title: 'How to Start a Shoe Manufacturing Unit in India',
    excerpt: 'A comprehensive guide covering licenses, machinery selection, factory layout, and operational tips for new entrepreneurs.',
    image: productPhoto(15),
    category: 'Business Guide',
    author: 'Vijay Kumar',
    authorRole: 'Founder & Managing Director',
    date: '2024-01-15',
    readTime: '12 min read',
    content: `
      <p>Starting a shoe manufacturing business in India presents significant opportunities given the country's position as one of the world's largest footwear producers. This guide covers everything you need to know to get started.</p>
      <h2>Understanding the Indian Footwear Market</h2>
      <p>India is the second-largest footwear manufacturer globally, after China. The market includes formal shoes, sports shoes, sandals, and safety footwear. Understanding your target segment is crucial for success.</p>
      <h2>Licensing and Compliance</h2>
      <p>Before setting up manufacturing, you'll need several licenses and registrations:</p>
      <ul>
        <li>Company Registration (Pvt Ltd/LLP/Proprietorship)</li>
        <li>MSME/Udyam Registration</li>
        <li>Factory License from local authorities</li>
        <li>BIS Certification for safety footwear</li>
        <li>Environmental Clearances (if applicable)</li>
      </ul>
      <h2>Factory Setup and Machinery Selection</h2>
      <p>The heart of any footwear factory is its machinery. Key machines include cutting presses, stitching machines, lasting machines (toe and heel), sole press machines, and sanding/finishing equipment.</p>
      <h2>Investment and Financial Planning</h2>
      <p>Investment varies based on scale and automation level. A small-scale unit can be started with INR 25-50 lakhs, while a medium-scale unit with modern machinery may require INR 1-3 crores.</p>
      <h2>Conclusion</h2>
      <p>With proper planning, quality machinery, and a skilled workforce, a shoe manufacturing unit can be highly profitable. Contact Vijay Engineering Works for machinery solutions and turnkey setup assistance.</p>
    `,
  },
  {
    slug: 'choosing-sole-press',
    title: 'Choosing the Right Sole Press Machine for Your Factory',
    excerpt: 'Learn about different types of sole press machines, their capabilities, and how to select the best one for your production needs.',
    image: productPhoto(19),
    category: 'Technical',
    author: 'Amit Sharma',
    authorRole: 'Senior Design Engineer',
    date: '2024-01-10',
    readTime: '8 min read',
    content: `
      <p>Selecting the right sole press machine directly affects bonding quality, throughput, and long-term maintenance costs. Here's how to make the right call.</p>
      <h2>Single vs. Twin-Station Presses</h2>
      <p>Single-station presses are cost-effective for small and mid-size units. Twin-station presses nearly double throughput for the same floor space, at a higher upfront cost — worth it once volumes justify it.</p>
      <h2>Tonnage and Platen Size</h2>
      <p>Match pressing force and platen dimensions to your largest shoe size and sole material. Undersized platens cause uneven bonding at the edges.</p>
      <h2>Temperature Control</h2>
      <p>Digital, programmable temperature control (rather than analog dials) reduces rework significantly, especially when switching between adhesive types through the day.</p>
      <h2>Our Recommendation</h2>
      <p>For most mid-size Indian factories, our <a href="/products/sole-press-machine">Sole Press Machine</a> hits the sweet spot of footprint and throughput with its twin independent stations. Factories running higher, continuous volumes should look at our <a href="/products/drum-sole-press-machine">Drum Sole Press Machine</a> instead.</p>
    `,
  },
  {
    slug: 'maintenance-tips',
    title: '10 Maintenance Tips to Extend Machine Life',
    excerpt: 'Regular maintenance practices that can significantly improve machine longevity and reduce downtime.',
    image: productPhoto(24),
    category: 'Maintenance',
    author: 'Rajesh Verma',
    authorRole: 'Head of Service & AMC',
    date: '2024-01-05',
    readTime: '6 min read',
    content: `
      <p>Preventive maintenance is far cheaper than breakdown repair. These ten habits, followed consistently, add years to a machine's productive life.</p>
      <ol>
        <li>Log daily runtime and any unusual noise or vibration.</li>
        <li>Check hydraulic fluid levels weekly and top up with the specified grade only.</li>
        <li>Clean dust extraction filters at least twice a week on sanding/polishing stations.</li>
        <li>Inspect drive belts monthly for cracking or glazing.</li>
        <li>Lubricate lasting machine pincers per the manufacturer schedule — not more, not less.</li>
        <li>Re-torque foundation bolts after the first 200 operating hours on new installations.</li>
        <li>Keep spare wear parts (belts, gaskets, fuses) on-site to avoid downtime waiting on shipment.</li>
        <li>Train more than one operator per machine so maintenance windows don't get skipped under deadline pressure.</li>
        <li>Schedule an annual professional service visit even if nothing seems wrong.</li>
        <li>Keep a written maintenance log per machine — patterns in recurring issues are easy to miss otherwise.</li>
      </ol>
      <h2>AMC Coverage</h2>
      <p>Our Annual Maintenance Contracts bundle scheduled visits, priority response, and genuine spare parts — see the <a href="/services">Services</a> page for details.</p>
    `,
  },
  {
    slug: 'energy-efficient-machinery',
    title: 'Energy-Efficient Footwear Machinery: Cost Savings',
    excerpt: 'How modern machinery design reduces energy consumption and operational costs for shoe factories.',
    image: productPhoto(27),
    category: 'Technology',
    author: 'Priya Sharma',
    authorRole: 'R&D Lead',
    date: '2024-01-01',
    readTime: '10 min read',
    content: `
      <p>Energy costs are one of the largest controllable line items in footwear manufacturing. Modern machine design can meaningfully cut consumption without slowing production.</p>
      <h2>Where the Savings Come From</h2>
      <p>Variable-speed drives on conveyors and sanders, better-insulated heating platens on sole presses, and standby modes on idle stations are the biggest contributors — often a combined 30-40% reduction versus a decade-old machine of the same type.</p>
      <h2>Retrofits vs. Replacement</h2>
      <p>Not every old machine needs replacing. In many cases, a motor and drive retrofit recovers a meaningful chunk of the savings at a fraction of new-machine cost. Our service team can audit your line and recommend where retrofits make sense.</p>
      <h2>Measuring the Impact</h2>
      <p>We recommend metering major machines individually for at least one production cycle before and after any change — factory-wide bills can mask which specific station is driving consumption.</p>
    `,
  },
  {
    slug: 'leather-cutting-precision',
    title: 'Getting Precision Right in Leather Cutting',
    excerpt: 'Why cutting accuracy matters more than most factories realize, and how to reduce material wastage.',
    image: productPhoto(31),
    category: 'Technical',
    author: 'Amit Sharma',
    authorRole: 'Senior Design Engineer',
    date: '2024-02-02',
    readTime: '7 min read',
    content: `
      <p>Leather is the single largest material cost in most premium footwear lines — cutting waste directly hits margin.</p>
      <h2>Nesting and Layout</h2>
      <p>Even with a precise clicker press, poor pattern nesting on the hide wastes material before the first cut is made. Reviewing layout templates quarterly, as hide grading shifts, pays for itself quickly.</p>
      <h2>Blade and Board Maintenance</h2>
      <p>A dull cutting die or worn cutting board changes effective pressure distribution and increases both waste and operator strain. Boards should be rotated/replaced on a fixed schedule, not just when visibly worn.</p>
      <h2>When to Automate</h2>
      <p>Units cutting more than a few hundred pairs a day usually see automation (CNC or belt-fed cutting) pay back within 12-18 months through material savings alone, before counting labor.</p>
    `,
  },
  {
    slug: 'safety-footwear-standards',
    title: 'Understanding IS Standards for Safety Footwear Manufacturing',
    excerpt: 'A practical overview of the Indian Standards that govern safety shoe production and what they mean for your machinery choices.',
    image: productPhoto(23),
    category: 'Business Guide',
    author: 'Vijay Kumar',
    authorRole: 'Founder & Managing Director',
    date: '2024-02-20',
    readTime: '9 min read',
    content: `
      <p>Safety footwear sold in India needs to meet specific IS standards, and machinery selection has a direct bearing on whether you can consistently pass certification testing.</p>
      <h2>Key Standards to Know</h2>
      <p>IS 15298 covers general safety footwear requirements, including toe-cap impact resistance and sole bonding strength — both of which depend heavily on press tonnage consistency and platen temperature control.</p>
      <h2>Machinery Implications</h2>
      <p>Heavy-duty pressing and consistent shape retention both matter for safety components — see our <a href="/products/drum-sole-press-machine">Drum Sole Press Machine</a> and <a href="/products/heat-setter-machine">Heat Setter Machine</a> for examples built for this segment.</p>
      <h2>Documentation</h2>
      <p>Keep machine calibration certificates on file — auditors increasingly ask for them alongside the finished-product test reports.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = blogPosts.filter((p) => p.category !== post.category && p.slug !== post.slug);
  return [...sameCategory, ...others].slice(0, limit);
}
