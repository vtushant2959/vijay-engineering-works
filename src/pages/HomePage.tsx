import {
  HeroSection,
  AboutSection,
  ProductsSection,
  StatsSection,
  WhyChooseSection,
  IndustriesSection,
  TestimonialsSection,
  CTASection,
  FAQSection,
} from './home';
import { StructuredData } from '../components/seo/StructuredData';

export function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StatsSection />
      <WhyChooseSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
