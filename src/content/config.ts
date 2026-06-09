import { defineCollection, z } from 'astro:content';

// Essays are Markdown files in src/content/essays/.
// Adding an essay = adding a file here. Never edit a monolith.
const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // NOTE: the URL slug comes from the filename (e.g. my-essay.md -> /essays/my-essay).
    // `slug` is reserved by Astro, so don't add it to frontmatter.
    draft: z.boolean().default(false),
    // Optional: set to control ordering / "coming soon" stubs.
    order: z.number().optional(),
    // Show in /home Latest Research. Default true; set false for the Start Here anchor essay.
    showInResearch: z.boolean().default(true),
  }),
});

export const collections = { essays };
