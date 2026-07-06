import Link from 'next/link';

interface Props {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageBanner({ title, subtitle, ctaText, ctaHref }: Props) {
  const isExternal = ctaHref?.startsWith('http');

  return (
    <section className="bg-[linear-gradient(135deg,#003366_0%,#00509e_100%)] w-full h-auto relative overflow-hidden min-h-[250px] flex items-center max-md:py-10 max-md:min-h-[140px] max-sm:py-[30px] max-sm:min-h-[120px]">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 text-center">
        <h1 className="text-[3.7rem] font-bold !text-white m-0 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)] leading-[1.3] max-md:text-[1.6rem] max-sm:text-[1.3rem]">{title}</h1>

        {subtitle && (
          <p className="text-[1.1rem] !text-white/90 mt-[10px] mx-0 mb-0 leading-[1.5] max-md:text-[1rem] max-sm:text-[0.9rem] max-sm:mt-[6px]">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-block mt-4 px-[28px] py-[10px] bg-white text-[#003366] font-semibold text-[0.9rem] rounded-[4px] no-underline transition-all duration-300 hover:bg-white/90 hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-sm:px-5 max-sm:py-2 max-sm:text-[0.8rem] max-sm:mt-3"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}