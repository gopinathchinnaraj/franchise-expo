import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import Script from 'next/script';
import { ClientProviders } from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: {
    default: 'FranchiseExpo – New York 2026',
    template: '%s | FranchiseExpo',
  },
  description:
    'Explore franchise ownership at the premier expo in the US. Meet 150+ brands, attend 40+ sessions, and connect in person with franchisors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - First script loads the library */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CGKLPLYCF9"
          strategy="afterInteractive"
        />

        {/* Google Analytics - Second script initializes it */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CGKLPLYCF9', {
                send_page_view: true,
                page_title: document.title,
                page_location: window.location.href
              });

              // Function to track UTM parameters as user properties
              function trackUTMParameters() {
                const urlParams = new URLSearchParams(window.location.search);
                const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
                const utmData = {};
                
                utmParams.forEach(param => {
                  const value = urlParams.get(param);
                  if (value) {
                    utmData[param] = value;
                  }
                });

                if (Object.keys(utmData).length > 0) {
                  // Set user properties for UTM data
                  gtag('set', 'user_properties', utmData);
                  
                  // Also send as an event for better tracking
                  gtag('event', 'utm_parameters_detected', {
                    ...utmData,
                    page_path: window.location.pathname
                  });
                }
              }

              // Track UTM parameters on page load
              if (document.readyState === 'complete') {
                trackUTMParameters();
              } else {
                window.addEventListener('load', trackUTMParameters);
              }
            `,
          }}
        />
      </head>
      <body>
        <ClientProviders>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}

