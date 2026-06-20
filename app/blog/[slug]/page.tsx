import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { posts } from "@/lib/blog-posts"
import { blogArticles } from "@/lib/blog-content"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const article = blogArticles.find((a) => a.slug === slug)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        <h1 className="mt-4 w-full font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {article ? article.lead : post.title}
        </h1>

        <div className="relative mt-8 aspect-16/9 w-full overflow-hidden rounded-2xl border-2 border-white/60">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {article ? (
          <div className="mt-6 space-y-3">
            {article.intro && (
              <p className="text-base leading-relaxed text-muted-foreground">{article.intro}</p>
            )}

            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {section.heading}
                </h2>

                <div className="mt-1 space-y-1">
                  {section.blocks.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p key={i} className="text-base leading-relaxed text-muted-foreground">
                          {block.text}
                        </p>
                      )
                    }
                    if (block.type === "bullets") {
                      return (
                        <ul key={i} className="list-disc space-y-1 pl-5 text-base leading-relaxed text-muted-foreground">
                          {block.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )
                    }
                    if (block.type === "titledBullets") {
                      return (
                        <ul key={i} className="list-disc space-y-1 pl-5 text-base leading-relaxed text-muted-foreground">
                          {block.items.map((item) => (
                            <li key={item.title}>
                              <span className="font-semibold text-foreground">{item.title}</span> — {item.desc}
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <div key={i} className="space-y-3">
                        {block.items.map((item, j) => (
                          <div key={item.title}>
                            <p className="font-semibold text-foreground">
                              {j + 1}. {item.title}
                            </p>
                            <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
