// src/app/register/content/RegisterSideCard.tsx
import React from "react";

interface RegisterSideCardProps {
  title?: string;
  subtitle?: string;
}

export default function RegisterSideCard({
  title = "Register, Submit & Step Into the World of Franchise Expo",
  subtitle = "Connect with top brands, join industry discussions, and discover new business paths."
}: RegisterSideCardProps) {
  return (
    <div 
      className="relative w-full h-[600px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-md group border border-gray-100/50"
      style={{
        backgroundImage: "url('/images/exhibition_hall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#011b2e]/95 via-[#011b2e]/55 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Decorative Brand Color Light Leak / Glow in the top right */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#1cb7cf]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#fd7122]/10 rounded-full blur-3xl" />

      {/* Text Content Overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full p-10 max-sm:p-6 flex flex-col justify-end">
        <h3 className="font-display text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-white leading-tight tracking-wide mb-3">
          {title}
        </h3>
        <p className="font-body text-sm text-gray-200/90 leading-relaxed max-w-[90%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
