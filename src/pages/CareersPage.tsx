import { Section, SectionHeader, Card, Button, Badge, Input, Textarea, Select, Checkbox, LinkButton, MapPin, Envelope, Users, Check, X as XIcon } from '../components/ui';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { careerApplicationSchema, type CareerApplicationFormValues } from '../lib/validation';
import { submitCareerApplication } from '../lib/supabase';

const jobs = [
  {
    id: '1',
    title: 'Service Engineer',
    department: 'technical',
    departmentLabel: 'Technical',
    location: 'Agra, UP',
    type: 'Full Time',
    experience: '3-5 years',
    description: 'Install, commission, and maintain footwear machinery at client locations across India.',
    requirements: ['Diploma in Mechanical Engineering', 'Experience with hydraulic systems', 'Willingness to travel', 'Good communication skills'],
  },
  {
    id: '2',
    title: 'Sales Executive',
    department: 'sales',
    departmentLabel: 'Sales',
    location: 'Agra, UP',
    type: 'Full Time',
    experience: '2-4 years',
    description: 'Develop and maintain client relationships, generate leads, and achieve sales targets.',
    requirements: ['Bachelors degree', 'B2B sales experience', 'Understanding of industrial machinery', 'Hindi and English fluency'],
  },
  {
    id: '3',
    title: 'Production Supervisor',
    department: 'manufacturing',
    departmentLabel: 'Manufacturing',
    location: 'Agra, UP',
    type: 'Full Time',
    experience: '5-8 years',
    description: 'Supervise machine production, ensure quality standards, and manage workshop operations.',
    requirements: ['ITI/Diploma in Mechanical', 'Machine shop experience', 'Team management skills', 'Quality-focused mindset'],
  },
];

const departmentOptions = [
  { value: 'technical', label: 'Technical' },
  { value: 'sales', label: 'Sales' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];

export function CareersPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationFormValues>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: { department: '', consent: false },
  });

  const handleApplyClick = (job: (typeof jobs)[number]) => {
    setValue('department', job.department);
    setSubmitStatus('idle');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onSubmit = async (values: CareerApplicationFormValues) => {
    setSubmitStatus('idle');
    const result = await submitCareerApplication(values);
    if (result.ok) {
      setSubmitStatus('success');
      reset({ fullName: '', email: '', phone: '', department: '', coverLetter: '', consent: false });
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
              Join Our Team
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Be part of India's leading footwear machinery manufacturer.
              Build your career with purpose and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Location', desc: 'Modern facility in Agra, UP with easy connectivity' },
            { icon: Users, title: 'Team', desc: 'Collaborative environment across technical, sales, and manufacturing teams' },
            { icon: Envelope, title: 'Growth', desc: 'Training programs and career advancement opportunities' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">{item.title}</h3>
              <p className="text-secondary-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="light">
        <SectionHeader
          eyebrow="Current Openings"
          title="Find Your Role"
        />
        <div className="space-y-6 max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-secondary-600">{job.description}</p>
                  </div>
                  <Badge variant="accent">{job.type}</Badge>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="primary">{job.departmentLabel}</Badge>
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge variant="secondary">{job.experience}</Badge>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-secondary-900 mb-2">Requirements:</p>
                  <ul className="list-disc list-inside text-secondary-600 text-sm space-y-1">
                    {job.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="small" onClick={() => handleApplyClick(job)}>
                    Apply Now
                  </Button>
                  <LinkButton
                    href={`mailto:Vijayengineeringworks786@yahoo.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    variant="ghost"
                    size="small"
                  >
                    Email Directly
                  </LinkButton>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section background="white">
        <div className="max-w-2xl mx-auto" ref={formRef}>
          <SectionHeader
            eyebrow="General Application"
            title="Didn't Find a Match?"
            subtitle="Send us your CV and we'll contact you when a suitable position opens."
          />
          <Card>
            {submitStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <p className="font-semibold text-secondary-900 mb-2">Application received!</p>
                <p className="text-secondary-600 text-sm">Our HR team will reach out if there's a matching opportunity.</p>
                <Button variant="outline" size="small" className="mt-6" onClick={() => setSubmitStatus('idle')}>
                  Submit another application
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Full Name" placeholder="John Doe" error={errors.fullName?.message} {...register('fullName')} />
                  <Input label="Email" type="email" placeholder="email@example.com" error={errors.email?.message} {...register('email')} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Phone" type="tel" placeholder="+91 99972 90321" error={errors.phone?.message} {...register('phone')} />
                  <Select label="Department" options={departmentOptions} error={errors.department?.message} {...register('department')} />
                </div>
                <Textarea label="Cover Letter" placeholder="Tell us about yourself and your interests..." error={errors.coverLetter?.message} {...register('coverLetter')} />
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1.5" htmlFor="cv-upload">
                    Resume/CV
                  </label>
                  <div className="flex items-center gap-4">
                    <input id="cv-upload" type="file" className="text-sm" accept=".pdf,.doc,.docx" />
                  </div>
                  <p className="mt-1.5 text-xs text-secondary-500">Max 5MB (PDF, DOC). File attachments aren't uploaded automatically yet — please also email your CV to Vijayengineeringworks786@yahoo.com after submitting.</p>
                </div>
                <Checkbox
                  label="I agree to be contacted by Vijay Engineering Works about my application, per the Privacy Policy."
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
        </div>
      </Section>
    </>
  );
}
