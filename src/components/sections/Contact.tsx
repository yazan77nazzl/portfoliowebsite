import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Mail, MapPin, User, GitBranch, X, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, Sparkles } from 'lucide-react';

export function Contact() {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 px-6"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact"
          subtitle="Get in touch"
          isVisible={isVisible}
        />

        <ContactContent
          isVisible={isVisible}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          status={status}
        />
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle, isVisible }: { title: string; subtitle: string; isVisible: boolean }) {
  return (
    <div
      className="text-center max-w-3xl mx-auto"
      style={{
        animation: isVisible ? 'slideUp 0.6s ease-out forwards' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Badge variant="primary" size="lg" className="mb-4">
        {title}
      </Badge>
      <h2 id="contact-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function ContactContent({
  isVisible,
  formData,
  handleChange,
  handleSubmit,
  errors,
  status,
}: {
  isVisible: boolean;
  formData: { name: string; email: string; subject: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  errors: Partial<{ name: string; email: string; subject: string; message: string }>;
  status: 'idle' | 'submitting' | 'success' | 'error';
}) {
  return (
    <div className="mt-12 grid lg:grid-cols-3 gap-8">
      <ContactInfo isVisible={isVisible} />
      <ContactForm
        isVisible={isVisible}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        status={status}
      />
    </div>
  );
}

function ContactInfo({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="lg:col-span-1 space-y-6" style={{
      animation: isVisible ? 'slideUp 0.6s ease-out forwards' : 'none',
      opacity: isVisible ? 1 : 0,
    }}>
      <Card variant="outlined" padding="lg" className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true" />
        
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <CardTitle className="text-xl">Let's Work Together</CardTitle>
          </div>
          <p className="text-text-muted mt-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value={portfolioData.personal.email}
              href={`mailto:${portfolioData.personal.email}`}
            />
            <ContactItem
              icon={MapPin}
              label="Location"
              value={portfolioData.personal.location}
            />
            {portfolioData.personal.phone && (
              <ContactItem
                icon={MapPin}
                label="Phone"
                value={portfolioData.personal.phone}
                href={`tel:${portfolioData.personal.phone}`}
              />
            )}
          </div>

          <div className="pt-6 border-t border-border/50">
            <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {portfolioData.personal.linkedin && (
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                  aria-label="LinkedIn"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              {portfolioData.personal.github && (
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                  aria-label="GitHub"
                >
                  <GitBranch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              <a
                href="https://twitter.com/yazannazzal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                aria-label="Twitter"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <h4 className="font-semibold text-text mb-4">Availability</h4>
            <div className="flex items-center gap-3 p-4 bg-surface-hover rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-text-muted">Open for freelance & full-time opportunities</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" padding="lg">
        <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          Quick Response
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-surface rounded-xl">
            <div className="font-heading text-3xl font-bold text-primary">24h</div>
            <div className="text-sm text-text-muted">Typical Reply</div>
          </div>
          <div className="p-4 bg-surface rounded-xl">
            <div className="font-heading text-3xl font-bold text-primary">GMT+3</div>
            <div className="text-sm text-text-muted">Timezone</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ContactForm({
  isVisible,
  formData,
  handleChange,
  handleSubmit,
  errors,
  status,
}: {
  isVisible: boolean;
  formData: { name: string; email: string; subject: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  errors: Partial<{ name: string; email: string; subject: string; message: string }>;
  status: 'idle' | 'submitting' | 'success' | 'error';
}) {
  return (
    <div className="lg:col-span-2" style={{
      animation: isVisible ? 'slideUp 0.6s ease-out 200ms forwards' : 'none',
      opacity: isVisible ? 1 : 0,
    }}>
      <Card variant="outlined" padding="lg">
        <CardHeader>
          <CardTitle className="text-xl">Send a Message</CardTitle>
          <p className="text-text-muted mt-2">Fill out the form and I'll get back to you as soon as possible.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your@email.com"
                required
              />
            </div>
            <FormField
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="Project inquiry, collaboration, etc."
              required
            />
            <FormField
              label="Message"
              name="message"
              as="textarea"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell me about your project..."
              rows={5}
              required
            />

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500" role="alert">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500" role="alert">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Something went wrong. Please try again or email me directly.</span>
              </div>
            )}

            <Button type="submit" className="w-full md:w-auto" disabled={status === 'submitting'}>
              {status === 'submitting' && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm text-text-muted">{label}</p>
        {href ? (
          <a href={href} className="text-text hover:text-primary transition-colors">{value}</a>
        ) : (
          <p className="text-text">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required,
  as = 'input',
  rows,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text mb-2">
        {label} {required && <span className="text-primary" aria-hidden="true">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full px-4 py-3 bg-surface border rounded-xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
            error ? 'border-red-500' : 'border-border'
          }`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full px-4 py-3 bg-surface border rounded-xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
            error ? 'border-red-500' : 'border-border'
          }`}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}