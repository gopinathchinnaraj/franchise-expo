"use client";

import { useParams, useRouter } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { posts } from '../../../../lib/post';

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
                <main className="py-10 pb-20 max-md:py-7 max-md:pb-15 bg-white">
                    <div className="max-w-[600px] mx-auto my-20 text-center px-6">
                        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
                        <button className="inline-flex items-center gap-2 py-2.75 px-6.5 bg-[#003b95] text-white font-display text-[0.75rem] font-semibold uppercase tracking-widest border-none rounded-full cursor-pointer whitespace-nowrap transition-all duration-180 hover:bg-[#1cb7cf] hover:-translate-y-0.5" onClick={() => router.push('/resources/blog')}>
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

            <main className="py-10 pb-20 max-md:py-7 max-md:pb-15 bg-white">
                <div className="grid grid-cols-[1fr_300px] max-lg:grid-cols-[1fr_260px] max-md:grid-cols-1 gap-12 max-lg:gap-9 max-md:gap-0 max-w-[1200px] mx-auto px-10 max-lg:px-7 max-md:px-5 max-sm:px-4 items-start">

                    {/* ══════════════ MAIN CONTENT ══════════════ */}
                    <div className="min-w-0 w-full">
                        <article className="font-sans">

                            {/* Hero image — floated left like the reference */}
                            {post.image && (
                                <div className="mb-5">
                                    <figure className="m-0 mb-5 block w-full">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            width={700}
                                            height={350}
                                            className="w-full h-auto block object-cover"
                                        />
                                    </figure>
                                </div>
                            )}

                            {/* Published date */}
                            <dl className="m-0 mb-2.5 p-0">
                                <dd className="flex items-center gap-1.75 font-sans text-[0.85rem] text-[#666] m-0 italic">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                        className="text-[#003b95] shrink-0"
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
                            <div className="m-0 mb-6">
                                <h1 className="font-display text-[1.75rem] md:text-[2.25rem] font-bold text-[#1a1a1a] leading-tight m-0">{post.title}</h1>
                            </div>

                            {/* Article body */}
                            <div
                                className="font-sans text-base leading-relaxed text-[#333] [&_p]:mb-[18px] [&_h2]:font-display [&_h2]:text-[1.45rem] [&_h2]:font-bold [&_h2]:text-[#1a1a1a] [&_h2]:mt-9 [&_h2]:mb-3.5 [&_h2]:pb-2.5 [&_h2]:border-b-2 [&_h2]:border-[#e0e4ed] [&_h2]:leading-snug [&_h3]:font-display [&_h3]:text-[1.15rem] [&_h3]:font-semibold [&_h3]:text-[#003b95] [&_h3]:mt-7 [&_h3]:mb-2.5 [&_h3]:leading-normal [&_ul]:mb-[18px] [&_ul]:pl-[26px] [&_ol]:mb-[18px] [&_ol]:pl-[26px] [&_li]:mb-2.5 [&_li]:leading-relaxed [&_li]:text-[#333] [&_a]:text-[#003b95] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#1cb7cf] [&_strong]:font-bold [&_strong]:text-[#1a1a1a] [&_img]:w-full [&_img]:h-auto [&_img]:block [&_img]:my-7 [&_img]:rounded-sm [&_blockquote]:border-l-4 [&_blockquote]:border-[#003b95] [&_blockquote]:my-6 [&_blockquote]:p-[12px_20px] [&_blockquote]:bg-[#f0f4fb] [&_blockquote]:text-[#333] [&_blockquote]:italic"
                                dangerouslySetInnerHTML={{ __html: post.body }}
                            />

                            {/* Share + Back */}
                            <div className="flex items-center justify-between flex-wrap gap-4 mt-10 pt-5 border-t border-[#e0e4ed] max-md:flex-col max-md:items-start">
                                <div className="flex items-center gap-2">
                                    <span className="font-sans text-[0.8rem] font-semibold text-[#666] uppercase tracking-wider mr-1">Share:</span>

                                    {/* Facebook */}
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white bg-[#1877f2] no-underline transition-all duration-150 hover:opacity-85 hover:-translate-y-0.5 shrink-0"
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
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white bg-black no-underline transition-all duration-150 hover:opacity-85 hover:-translate-y-0.5 shrink-0"
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
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white bg-[#0a66c2] no-underline transition-all duration-150 hover:opacity-85 hover:-translate-y-0.5 shrink-0"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="flex">
                                    <button
                                        className="inline-flex items-center gap-2 py-2.75 px-6.5 bg-[#003b95] text-white font-display text-[0.75rem] font-semibold uppercase tracking-widest border-none rounded-full cursor-pointer whitespace-nowrap transition-all duration-180 hover:bg-[#1cb7cf] hover:-translate-y-0.5"
                                        onClick={() => router.push('/resources/blog')}
                                    >
                                        BACK TO BLOG
                                    </button>
                                </div>
                            </div>

                        </article>
                    </div>

                    {/* ══════════════ SIDEBAR ══════════════ */}
                    <aside className="sticky top-6 flex flex-col gap-7 max-md:static max-md:mt-10 w-full">

                        {/* Recent Posts */}
                        <div className="bg-[#f8f9fc] border border-[#e0e4ed]">
                            <h3 className="font-display text-[0.9rem] font-bold text-white uppercase tracking-wider bg-[#003b95] m-0 py-3 px-4.5">Recent Posts</h3>
                            <ul className="list-none m-0 p-0">
                                {recentPosts.map((p) => (
                                    <li key={p.id} className="border-b border-[#e8ecf4] last:border-b-0">
                                        <a
                                            href={`/blog-article/${p.slug}`}
                                            className="flex gap-3 p-[14px_16px] text-decoration-none transition-colors duration-150 hover:bg-[#edf1fb] group"
                                        >
                                            {p.image && (
                                                <div className="w-16 h-[52px] shrink-0 overflow-hidden bg-[#dde3f0]">
                                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover block" />
                                                </div>
                                            )}
                                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                                                <span className="font-sans text-[0.7rem] text-[#999] whitespace-nowrap">{p.date}</span>
                                                <span className="font-sans text-[0.8rem] font-semibold text-[#1a1a1a] leading-normal line-clamp-3 group-hover:text-[#003b95]">{p.title}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Widget */}
                        <div className="bg-[#003b95] p-[26px_20px]">
                            <h3 className="font-display text-[1.05rem] font-bold text-white uppercase mb-3 leading-snug">
                                Find Your Franchise at Our Expos
                            </h3>
                            <p className="font-sans text-[0.85rem] text-white/88 leading-relaxed mb-5">
                                Connect with 150+ exhibiting brands and industry experts face-to-face at the International Franchise Expo — June 4–5, 2027, New York City.
                            </p>
                            <a href="/register" className="inline-flex items-center gap-1 py-2.75 px-5.5 bg-[#1cb7cf] text-white font-display text-[0.75rem] font-semibold uppercase tracking-wider text-decoration-none rounded-full whitespace-nowrap transition-all duration-180 hover:bg-[#17a3ba] hover:-translate-y-0.5">
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