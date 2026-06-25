'use client';

import { useParams, useRouter } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { posts } from '../../../../lib/post';
import styles from './Blogarticle.module.css'

export default function BlogArticlePage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const post = posts.find((p) => p.slug === slug);
    const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);

    if (!post) {
        return (
            <div>
                <PageBanner title="Blog" />
                <main className={styles.main}>
                    <div className={styles.notFound}>
                        <h1>Article not found</h1>
                        <button className={styles.backBtn} onClick={() => router.push('/blog')}>
                            ← Back to Blog
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    const shareUrl =
        typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div>
            <PageBanner title="Blog" />

            <main className={styles.main}>
                <div className={styles.row}>

                    {/* ══════════════ MAIN CONTENT ══════════════ */}
                    <div className={styles.mainContent}>
                        <article className={styles.article}>

                            {/* Hero image — floated left like the reference */}
                            {post.image && (
                                <div className={styles.comContentImage}>
                                    <figure className={styles.itemImage}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            width={700}
                                            height={350}
                                        />
                                    </figure>
                                </div>
                            )}

                            {/* Published date */}
                            <dl className={styles.articleInfo}>
                                <dd className={styles.published}>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                        className={styles.calIcon}
                                    >
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <time>Published: {post.date}</time>
                                </dd>
                            </dl>

                            {/* Title */}
                            <div className={styles.pageHeader}>
                                <h1>{post.title}</h1>
                            </div>

                            {/* Article body */}
                            <div
                                className={styles.articleBody}
                                dangerouslySetInnerHTML={{ __html: post.body }}
                            />

                            {/* Share + Back */}
                            <div className={styles.shareButtons}>
                                <div className={styles.shareRow}>
                                    <span className={styles.shareLabel}>Share:</span>

                                    {/* Facebook */}
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.shareBtn} ${styles.shareFb}`}
                                        aria-label="Share on Facebook"
                                    >
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>

                                    {/* X / Twitter */}
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.shareBtn} ${styles.shareX}`}
                                        aria-label="Share on X"
                                    >
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.shareBtn} ${styles.shareLi}`}
                                        aria-label="Share on LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                </div>

                                <div className={styles.backWrap}>
                                    <button
                                        className={styles.backBtn}
                                        onClick={() => router.push('/resources/blog')}
                                    >
                                        BACK TO BLOG
                                    </button>
                                </div>
                            </div>

                        </article>
                    </div>

                    {/* ══════════════ SIDEBAR ══════════════ */}
                    <aside className={styles.sidebar}>

                        {/* Recent Posts */}
                        <div className={styles.sidebarWidget}>
                            <h3 className={styles.widgetTitle}>Recent Posts</h3>
                            <ul className={styles.recentList}>
                                {recentPosts.map((p) => (
                                    <li key={p.id} className={styles.recentItem}>
                                        <a
                                            href={`/blog-article/${p.slug}`}
                                            className={styles.recentLink}
                                        >
                                            {p.image && (
                                                <div className={styles.recentThumb}>
                                                    <img src={p.image} alt={p.title} />
                                                </div>
                                            )}
                                            <div className={styles.recentMeta}>
                                                <span className={styles.recentDate}>{p.date}</span>
                                                <span className={styles.recentTitle}>{p.title}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Widget */}
                        <div className={styles.ctaWidget}>
                            <h3 className={styles.ctaTitle}>
                                Find Your Franchise at Our Expos
                            </h3>
                            <p className={styles.ctaText}>
                                Connect with 150+ exhibiting brands and industry experts face-to-face at the International Franchise Expo — June 4–5, 2027, New York City.
                            </p>
                            <a href="/register" className={styles.ctaBtn}>
                                Register to Attend
                                <span aria-hidden="true"> ›</span>
                            </a>
                        </div>

                    </aside>
                </div>
            </main>
        </div>
    );
}