import { useState } from 'react';
import toast from 'react-hot-toast';

interface UseFormSubmissionProps {
  formType: string;
  onSuccess?: () => void;
}

export default function useFormSubmission({ formType, onSuccess }: UseFormSubmissionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const submitForm = async (data: Record<string, any>) => {
    setIsSubmitting(true);

    try {
      // Mock submitting to api
      console.log('Form submission (mocked):', {
        ...data,
        formType,
        submittedAt: new Date().toISOString(),
      });
      
      // Artificial delay
      await new Promise(resolve => setTimeout(resolve, 800));

      toast.success('Submitted successfully!');
      setShowThankYou(true);
      onSuccess?.();
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    showThankYou,
    setShowThankYou,
    submitForm,
  };
}
