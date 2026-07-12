import { useState, type ReactNode } from 'react';
import { subscribeToNewsletter } from '../../lib/supabase';

interface NewsletterFormProps {
  inputClassName: string;
  buttonClassName: string;
  icon: ReactNode;
}

export function NewsletterForm({ inputClassName, buttonClassName, icon }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Enter a valid email address.');
      return;
    }
    setStatus('loading');
    const result = await subscribeToNewsletter(email);
    if (result.ok) {
      setStatus('success');
      setMessage('Subscribed! Thanks for joining.');
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.error);
    }
  };

  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
          aria-label="Email address"
          required
        />
        <button type="submit" className={buttonClassName} aria-label="Subscribe" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            icon
          )}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-xs ${status === 'error' ? 'text-red-400' : 'text-green-400'}`} role="status">
          {message}
        </p>
      )}
    </div>
  );
}
