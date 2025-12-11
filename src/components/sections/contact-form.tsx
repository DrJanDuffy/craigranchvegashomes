'use client';

import { useActionState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm } from '@/lib/actions/contact';
import type { ContactFormResult } from '@/lib/actions/contact';

const initialState: ContactFormResult = {
  success: false,
  error: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: ContactFormResult, formData: FormData) => {
      return await submitContactForm(formData);
    },
    initialState
  );

  // Reset form on successful submission
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [state.success]);

  return (
    <form id='contact-form' action={formAction} className='space-y-6'>
      {/* Success Message */}
      {state.success && (
        <div className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-800'>
          {state.message}
        </div>
      )}

      {/* Error Message */}
      {!state.success && state.error && (
        <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-800'>
          {state.error}
        </div>
      )}

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            id='firstName'
            name='firstName'
            placeholder='John'
            required
            disabled={isPending}
            aria-invalid={state.fieldErrors?.firstName ? 'true' : 'false'}
            aria-describedby={
              state.fieldErrors?.firstName ? 'firstName-error' : undefined
            }
          />
          {state.fieldErrors?.firstName && (
            <p id='firstName-error' className='text-sm text-red-600'>
              {state.fieldErrors.firstName}
            </p>
          )}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            id='lastName'
            name='lastName'
            placeholder='Doe'
            required
            disabled={isPending}
            aria-invalid={state.fieldErrors?.lastName ? 'true' : 'false'}
            aria-describedby={
              state.fieldErrors?.lastName ? 'lastName-error' : undefined
            }
          />
          {state.fieldErrors?.lastName && (
            <p id='lastName-error' className='text-sm text-red-600'>
              {state.fieldErrors.lastName}
            </p>
          )}
        </div>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='john@example.com'
          required
          disabled={isPending}
          aria-invalid={state.fieldErrors?.email ? 'true' : 'false'}
          aria-describedby={
            state.fieldErrors?.email ? 'email-error' : undefined
          }
        />
        {state.fieldErrors?.email && (
          <p id='email-error' className='text-sm text-red-600'>
            {state.fieldErrors.email}
          </p>
        )}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='phone'>Phone</Label>
        <Input
          id='phone'
          name='phone'
          type='tel'
          placeholder='(702) 555-0123'
          disabled={isPending}
          aria-invalid={state.fieldErrors?.phone ? 'true' : 'false'}
          aria-describedby={
            state.fieldErrors?.phone ? 'phone-error' : undefined
          }
        />
        {state.fieldErrors?.phone && (
          <p id='phone-error' className='text-sm text-red-600'>
            {state.fieldErrors.phone}
          </p>
        )}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Tell us how we can help you...'
          className='min-h-[120px]'
          required
          disabled={isPending}
          aria-invalid={state.fieldErrors?.message ? 'true' : 'false'}
          aria-describedby={
            state.fieldErrors?.message ? 'message-error' : undefined
          }
        />
        {state.fieldErrors?.message && (
          <p id='message-error' className='text-sm text-red-600'>
            {state.fieldErrors.message}
          </p>
        )}
      </div>
      <Button
        type='submit'
        disabled={isPending}
        className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
