"use client";

import Link from "next/link";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function SocialFixed() {
    return (
        <div className="fixed top-1/2 right-[18px] max-md:right-[10px] -translate-y-1/2 flex flex-col gap-[14px] max-md:gap-[10px] z-[9999] max-[1023px]:hidden">

            <Link
                href="https://www.linkedin.com/company/mfvexpo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[56px] h-[56px] max-md:w-[46px] max-md:h-[46px] rounded-full bg-white flex items-center justify-center text-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-x-[5px] hover:bg-[#111111] hover:text-white no-underline"
            >
                <FaLinkedinIn size={18} />
            </Link>

            <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[56px] h-[56px] max-md:w-[46px] max-md:h-[46px] rounded-full bg-white flex items-center justify-center text-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-x-[5px] hover:bg-[#111111] hover:text-white no-underline"
            >
                <FaFacebookF size={18} />
            </Link>

            <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[56px] h-[56px] max-md:w-[46px] max-md:h-[46px] rounded-full bg-white flex items-center justify-center text-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-x-[5px] hover:bg-[#111111] hover:text-white no-underline"
            >
                <FaInstagram size={18} />
            </Link>

        </div>
    );
}