import { Section, Card, Button, Input, Textarea, Select, Checkbox, MapPin, Phone, Envelope, Clock, Check, X as XIcon } from '../components/ui';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormValues } from '../lib/validation';
import { submitContactForm } from '../lib/supabase';
import { getProductBySlug } from '../data/products';
import { useShortlist } from '../hooks/useShortlist';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', content: 'Phase 2, Sector 15, Industrial Area, Noida, Delhi NCR, India - 201301' },
  { icon: Phone, title: 'Call Us', content: '+91 98765 43210, +91 11 2345 6789' },
  { icon: Envelope, title: 'Email Us', content: 'info@vijayengineeringworks.com' },
  { icon: Clock, title: 'Working Hours', content: 'Mon - Sat: 9:00 AM - 6:00 PM' },
];

const inquiryTypes = [
  { value: 'product', label: 'Product Inquiry' },
  { value: 'quote', label: 'Request Quote' },
  { value: 'factory', label: 'Factory Setup' },
  { value: 'service', label: 'Service Support' },
  { value: 'dealership', label: 'Dealership' },
  { value: 'other', label: 'Other' },
];

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const shortlist = useShortlist();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const shortlistedSlugs = searchParams.get('products')?.split(',').filter(Boolean) ?? [];
  const shortlistedProducts = shortlistedSlugs.map((slug) => getProductBySlug(slug)).filter(Boolean);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: shortlistedProducts.length ? 'product' : '',
      message: shortlistedProducts.length
        ? `I'd like a quote for: ${shortlistedProducts.map((p) => p!.name).join(', ')}.`
        : '',
      consent: false,
    },
  });

  const productsParam = searchParams.get('products') ?? '';

  useEffect(() => {
    const slugs = productsParam.split(',').filter(Boolean);
    const items = slugs.map((slug) => getProductBySlug(slug)).filter(Boolean);
    if (items.length) {
      reset({
        inquiryType: 'product',
        message: `I'd like a quote for: ${items.map((p) => p!.name).join(', ')}.`,
        consent: false,
      });
    }
  }, [productsParam, reset]);

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus('idle');
    const result = await submitContactForm({
      fullName: values.fullName,
      companyName: values.companyName,
      email: values.email,
      phone: values.phone,
      inquiryType: values.inquiryType,
      city: values.city,
      message: values.message,
      productInterest: shortlistedSlugs,
    });
    if (result.ok) {
      setSubmitStatus('success');
      shortlist.clear();
      reset({ fullName: '', companyName: '', email: '', phone: '', inquiryType: '', city: '', message: '', consent: false });
    } else {
      setSubmitStatus('error');
      setSubmitError(result.error);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Have questions about our machinery or need a quote? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-6">
                Send Us a Message
              </h2>

              {shortlistedProducts.length > 0 && (
                <div className="mb-6 p-4 bg-primary-50 rounded-xl">
                  <p className="text-sm font-semibold text-secondary-900 mb-2">Enquiring about {shortlistedProducts.length} shortlisted product{shortlistedProducts.length > 1 ? 's' : ''}:</p>
                  <ul className="text-sm text-secondary-600 list-disc list-inside">
                    {shortlistedProducts.map((p) => (
                      <li key={p!.slug}>{p!.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-semibold text-secondary-900 mb-2">Thank you for your enquiry!</p>
                  <p className="text-secondary-600 text-sm">We typically respond within 24 hours on business days.</p>
                  <Button variant="outline" size="small" className="mt-6" onClick={() => setSubmitStatus('idle')}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" placeholder="John Doe" error={errors.fullName?.message} {...register('fullName')} />
                    <Input label="Company Name" placeholder="ABC Footwear Pvt Ltd" error={errors.companyName?.message} {...register('companyName')} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Email Address" type="email" placeholder="email@company.com" error={errors.email?.message} {...register('email')} />
                    <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" error={errors.phone?.message} {...register('phone')} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select label="Inquiry Type" options={inquiryTypes} error={errors.inquiryType?.message} {...register('inquiryType')} />
                    <Input label="City/Location" placeholder="Delhi" error={errors.city?.message} {...register('city')} />
                  </div>
                  <Textarea
                    label="Your Message"
                    placeholder="Tell us about your requirements..."
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Checkbox
                    label="I agree to be contacted by Vijay Engineering Works about my enquiry, per the Privacy Policy."
                    error={errors.consent?.message}
                    {...register('consent')}
                  />

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg text-sm text-red-700">
                      <XIcon className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-600 mb-8">
                Visit our facility or reach out through any of the channels below.
                Our team typically responds within 24 hours on business days.
              </p>
            </div>

            {contactInfo.map((item) => (
              <Card key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-secondary-600">{item.content}</p>
                </div>
              </Card>
            ))}

            {/* Map */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-secondary-200">
              <iframe
                title="Vijay Engineering Works location map"
                src="https://maps.google.com/maps?q=Sector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201301&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quick Contact CTA */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Our team is available on WhatsApp for quick responses to your queries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="accent"
              size="large"
              onClick={() => window.open('https://wa.me/919876543210', '_blank', 'noopener,noreferrer')}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="large"
              className="!border-white/30 !text-white hover:!bg-white/10"
              onClick={() => { window.location.href = 'tel:+919876543210'; }}
            >
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
