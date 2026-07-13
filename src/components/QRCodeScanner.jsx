// components/QRCodeScanner.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import toast from 'react-hot-toast';

const QRCodeScanner = ({ onScanSuccess, onScanError }) => {
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize scanner
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
        showTorchButtonIfSupported: true,
      },
      false
    );

    scannerRef.current = scanner;

    const onScanSuccessHandler = async (decodedText, decodedResult) => {
      console.log('QR Code scanned (mocked):', decodedText);
      
      try {
        const lines = decodedText.split('\n');
        const codeLine = lines.find(line => line.includes('Code: '));
        const visitorCode = codeLine ? codeLine.replace('Code: ', '').trim() : 'mock-visitor-123';
        
        // Artificial delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Simulate successful checkin response
        const mockVisitor = {
          firstName: decodedText.includes('Name: ') ? decodedText.split('Name: ')[1].split('\n')[0] : 'Demo Visitor',
          lastName: '',
          email: decodedText.includes('Email: ') ? decodedText.split('Email: ')[1].split('\n')[0] : 'visitor@example.com',
          code: visitorCode
        };

        toast.success(`Welcome ${mockVisitor.firstName}! Checked in successfully.`);
        if (onScanSuccess) {
          onScanSuccess({
            ...mockVisitor,
            checkInTime: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error processing QR code:', error);
        toast.error('Error processing QR code');
        if (onScanError) onScanError(error.message);
      }
    };

    const onScanErrorHandler = (error) => {
      console.warn('QR scan error:', error);
    };

    scanner.render(onScanSuccessHandler, onScanErrorHandler);
    setIsScanning(true);

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error('Failed to clear scanner:', error);
        });
      }
    };
  }, [onScanSuccess, onScanError]);

  return (
    <div className="w-full">
      <div id="qr-reader" className="w-full max-w-md mx-auto"></div>
      {!isScanning && (
        <div className="text-center text-gray-500 mt-4">
          Initializing camera...
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
