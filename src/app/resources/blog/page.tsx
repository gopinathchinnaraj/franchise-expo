'use client';

import { useRouter } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { posts } from '../../../../lib/post';
import styles from './Blog.module.css';

export default function BlogPage() {
    const router = useRouter();

    return (
        <div className={styles.pageWrapper}>
            <PageBanner title="Blog" />

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.blogGrid}>
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className={styles.card}
                                onClick={() => router.push(`/blog-article/${post.slug}`)}
                            >
                                {/* Image */}
                                <div className={styles.cardImgWrap}>
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className={styles.cardImage}
                                        />
                                    ) : (
                                        <div className={styles.cardImgPlaceholder} />
                                    )}
                                </div>

                                {/* Body */}
                                <div className={styles.cardBody}>
                                    <p className={styles.cardDate}>{post.date}</p>
                                    <h2 className={styles.cardTitle}>{post.title}</h2>
                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                    <button className={styles.cardLink}>
                                        Read More
                                        <svg
                                            width={13}
                                            height={13}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                            aria-hidden="true"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}