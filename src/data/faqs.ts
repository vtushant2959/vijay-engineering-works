export interface Faq {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  faqs: Faq[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: 'Products',
    faqs: [
      { question: 'What types of footwear machinery do you manufacture?', answer: 'We manufacture a comprehensive range across 10 categories including shoe making units, sole press machines, hydraulic presses, cutting machines, stitching machines, toe and heel lasting machines, sanding machines, polishing machines, and conveyor systems.' },
      { question: 'Are your machines energy efficient?', answer: 'Yes, our modern designs are up to 40% more energy efficient than conventional machines. We focus on reducing operational costs for our clients through better motor sizing and duty-cycle controls.' },
      { question: 'Do you offer custom machinery?', answer: 'Yes, our R&D team designs customized solutions for unique production requirements. Share your specifications and we can develop suitable machinery or adapt an existing model.' },
    ],
  },
  {
    category: 'Pricing & Ordering',
    faqs: [
      { question: 'How can I get pricing for machines?', answer: 'Contact our sales team via phone, email, or the contact form. We provide detailed quotations including machine price, installation costs, and optional AMC packages.' },
      { question: 'What is the lead time for delivery?', answer: 'Standard machines are typically delivered within 4-6 weeks. Custom orders may take 8-12 weeks depending on specifications and current production schedules.' },
      { question: 'Do you offer financing options?', answer: 'We work with financial partners who offer machinery loans. Mention your requirement in the enquiry form and our team will connect you with financing options.' },
    ],
  },
  {
    category: 'Service & Support',
    faqs: [
      { question: 'What warranty do you provide?', answer: 'All machines come with an 18-month warranty from installation date, covering manufacturing defects and including scheduled free service visits.' },
      { question: 'Do you provide AMC?', answer: 'Yes, we offer annual maintenance contracts with tiers based on coverage and response times. AMC clients get priority service and genuine parts.' },
      { question: 'Are spare parts readily available?', answer: 'We maintain a spare parts inventory for all current models. Critical parts are typically available within 24-48 hours across India through direct dispatch.' },
    ],
  },
  {
    category: 'Training & Installation',
    faqs: [
      { question: 'Is installation included in the price?', answer: 'Basic installation is included for standard machines. For complex, multi-machine setups we quote installation separately based on site requirements.' },
      { question: 'Do you provide operator training?', answer: 'Yes, we provide training for machine operators covering operation, daily maintenance, safety procedures, and basic troubleshooting.' },
      { question: 'How long is the training program?', answer: 'Standard training runs 3-5 days depending on machine complexity and team size. Post-training phone support is always available.' },
    ],
  },
];

export const flatFaqs: Faq[] = faqCategories.flatMap((category) => category.faqs);
