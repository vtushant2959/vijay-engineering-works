import { Section, SectionHeader, Card, Button, Input, Select, Textarea, Checkbox, Globe, ShieldCheck, Users, ChartBar, Check, X as XIcon } from '../components/ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dealershipSchema, type DealershipFormValues } from '../lib/validation';
import { submitDealershipApplication } from '../lib/supabase';

const benefits = [
  { icon: Globe, title: 'Exclusive Territory', desc: 'Defined geographic area with no competition' },
  { icon: ShieldCheck, title: 'Training & Support', desc: 'Complete product and sales training' },
  { icon: ChartBar, title: 'Marketing Support', desc: 'Lead generation and promotional materials' },
  { icon: Users, title: 'Technical Backup', desc: '24/7 technical assistance and service support' },
];

const requirements = [
  'Established business presence in industrial machinery sales',
  'Minimum 500 sq ft showroom/office space',
  'Technical staff for service and demonstrations',
  'Investment capability of INR 25-50 lakhs',
  'Commitment to customer satisfaction and after-sales support',
];

const businessTypeOptions = [
  { value: 'machinery', label: 'Industrial Machinery' },
  { value: 'leather', label: 'Leather Industry' },
  { value: 'trading', label: 'Trading' },
  { value: 'other', label: 'Other' },
];

export function DealershipPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DealershipFormValues>({
    resolver: zodResolver(dealershipSchema),
    defaultValues: { businessType: '', consent: false },
  });

  const onSubmit = async (values: DealershipFormValues) => {
    setSubmitStatus('idle');
    const result = await submitDealershipApplication(values);
    if (result.ok) {
      setSubmitStatus('success');
      reset({ fullName: '', companyName: '', email: '', phone: '', city: '', state: '', businessType: '', yearsInBusiness: '', aboutBusiness: '', consent: false });
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
              Become a Dealer
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Partner with India's leading footwear machinery manufacturer and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <Section background="white">
        <SectionHeader
          eyebrow="Why Partner With Us"
          title="Dealership Benefits"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600 text-sm">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Requirements & Form */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-6">
              Dealership Requirements
            </h2>
            <Card>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-3">
                What You Get
              </h3>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>Competitive margins on all products</li>
                <li>Marketing and lead generation support</li>
                <li>Technical training for your staff</li>
                <li>Priority service support</li>
              </ul>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-6">
                Apply for Dealership
              </h2>
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-semibold text-secondary-900 mb-2">Application submitted!</p>
                  <p className="text-secondary-600 text-sm">Our partnerships team will review and reach out within 2-3 business days.</p>
                  <Button variant="outline" size="small" className="mt-6" onClick={() => setSubmitStatus('idle')}>
                    Submit another application
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" placeholder="John Doe" error={errors.fullName?.message} {...register('fullName')} />
                    <Input label="Company Name" placeholder="ABC Industries" error={errors.companyName?.message} {...register('companyName')} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Email" type="email" placeholder="email@company.com" error={errors.email?.message} {...register('email')} />
                    <Input label="Phone" type="tel" placeholder="+91 99972 90321" error={errors.phone?.message} {...register('phone')} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="City" placeholder="Mumbai" error={errors.city?.message} {...register('city')} />
                    <Input label="State" placeholder="Maharashtra" error={errors.state?.message} {...register('state')} />
                  </div>
                  <Select label="Current Business Type" options={businessTypeOptions} error={errors.businessType?.message} {...register('businessType')} />
                  <Input label="Years in Business" type="number" placeholder="5" error={errors.yearsInBusiness?.message} {...register('yearsInBusiness')} />
                  <Textarea label="About Your Business" placeholder="Tell us about your current business, client base, and why you want to partner with us..." error={errors.aboutBusiness?.message} {...register('aboutBusiness')} />
                  <Checkbox
                    label="I agree to be contacted by Vijay Engineering Works about this application, per the Privacy Policy."
                    error={errors.consent?.message}
                    {...register('consent')}
                  />

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg text-sm text-red-700">
                      <XIcon className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="large" className="w-full" isLoading={isSubmitting}>
                    Submit Application
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
