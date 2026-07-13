// components/CashfreePayment.tsx
'use client';

import { useState, useEffect } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface CashfreePaymentProps {
  invoiceId: string;
  amount: number;
  requirementsId: string;
  onSuccess?: (data: { orderId: string; paymentId?: string }) => void;
  onFailure?: (error: string) => void;
}

export default function CashfreePayment({
  invoiceId,
  amount,
  requirementsId,
  onSuccess,
  onFailure
}: CashfreePaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Initiating mock Cashfree checkout...', { amount, invoiceId });
      
      // Simulate network request delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Payment checkout successful (Mocked)');
      onSuccess?.({
        orderId: 'order_' + Math.random().toString(36).substring(2, 9),
        paymentId: 'pay_' + Math.random().toString(36).substring(2, 9)
      });
    } catch (err: any) {
      console.error('Payment error:', err);
      const errorMessage = err.message || 'Payment failed. Please try again.';
      setError(errorMessage);
      onFailure?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <div className="p-6 text-center">
        <div className="text-red-600 mb-4">
          <ExclamationCircleIcon className="h-12 w-12 mx-auto" />
          <p className="mt-2">{error}</p>
        </div>
        <button
          onClick={() => setError(null)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Complete Payment (Mocked)</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">₹{amount.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-1">Invoice: {invoiceId}</p>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            Processing...
          </div>
        ) : (
          `Pay ₹${amount.toLocaleString()}`
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Secure payment powered by Cashfree (Mock Sandbox Mode)
      </p>
    </div>
  );
}
