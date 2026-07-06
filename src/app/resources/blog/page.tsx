"use client";

import { useRouter } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { posts } from '../../../../lib/post';

export default function BlogPage() {
    const router = useRouter();

    return (
        <div className="bg-white">
            <PageBanner title="Blog" />

            <main className="bg-[#f5f5f5] py-12 pb-20 max-sm:py-8 max-sm:pb-15">
                <div className="max-w-[1280px] mx-auto px-12 max-lg:px-8 max-sm:px-5">
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 max-lg:gap-6 max-sm:gap-5">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-none overflow-hidden cursor-pointer flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-0.75 shadow-[0_1px_4px_rgba(0,0,0,0.08)] group"
                                onClick={() => router.push(`/blog-article/${post.slug}`)}
                            >
                                {/* Image */}
                                <div className="w-full aspect-video overflow-hidden bg-[#dde3f0] shrink-0">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover block transition-transform duration-350 group-hover:scale-[1.04]"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#c8d0e0]" />
                                    )}
                                </div>

                                {/* Body */}
                                <div className="p-[22px_24px_28px] flex flex-col flex-1">
                                    <p className="font-sans text-[0.78rem] text-[#888] mb-2 uppercase tracking-wider">{post.date}</p>
                                    <h2 className="font-display text-[1.15rem] font-semibold text-[#1a1a1a] leading-tight mb-3 group-hover:text-[#003b95]">{post.title}</h2>
                                    <p className="font-sans text-[0.875rem] text-[#555] leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>
                                    <button className="inline-flex items-center gap-1.75 align-self-start bg-none border-none p-0 cursor-pointer font-display text-[0.78rem] font-semibold text-[#003b95] uppercase tracking-widest transition-all duration-150 group-hover:text-[#1cb7cf] group-hover:gap-2.5">
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