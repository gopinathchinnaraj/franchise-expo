// components/PageBanner.tsx
import Link from 'next/link';
import styles from './PageBanner.module.css';

interface Props {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageBanner({ title, subtitle, ctaText, ctaHref }: Props) {
  const isExternal = ctaHref?.startsWith('http');

  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h1 className={styles.title}>{title}</h1>

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={styles.bannerCta}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}