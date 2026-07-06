"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const galleryImages = [
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05948.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05896.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05883.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05869.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05854.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05847.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05829.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05821.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05817.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05816.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05813.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05798.webp",
];

export default function ShowGallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    return (
        <main className="w-full overflow-hidden bg-[#f5f7fb]">

            {/* HERO */}
            <PageBanner title="Gallery" />

            {/* GALLERY */}
            <section className="py-[110px] max-md:py-20 px-0">
                <div className="w-full max-w-[1440px] mx-auto px-6">

                    <div className="text-center max-w-[820px] mx-auto mb-[70px]">
                       
                    </div>

                    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-400 hover:-translate-y-2.5 cursor-pointer group"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative w-full h-[320px] max-md:h-[280px] overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center cursor-pointer transition-opacity duration-200"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <button
                        className="absolute top-6 right-6 max-md:top-4 max-md:right-4 bg-white/10 hover:bg-white/20 border-none rounded-full w-12 h-12 max-md:w-10 max-md:h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-200 hover:scale-105 z-10"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>

                    <button
                        className="absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none rounded-full w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-200 hover:-translate-y-1/2 hover:scale-105 z-10 left-6 max-md:left-3"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={40} className="max-md:w-6 max-md:h-6" />
                    </button>

                    <button
                        className="absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none rounded-full w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-200 hover:-translate-y-1/2 hover:scale-105 z-10 right-6 max-md:right-3"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight size={40} className="max-md:w-6 max-md:h-6" />
                    </button>

                    <div className="relative max-w-[90vw] max-h-[90vh] cursor-default" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-[90vw] h-[85vh] min-w-[300px] min-h-[200px]">
                            <Image
                                src={galleryImages[currentIndex]}
                                alt={`Gallery ${currentIndex + 1}`}
                                fill
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="absolute -bottom-10 max-md:-bottom-[35px] left-1/2 -translate-x-1/2 text-white/70 text-[14px] max-md:text-xs font-medium bg-black/60 px-3.5 py-1.5 rounded-full whitespace-nowrap">
                            {currentIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}