import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    tags: z.string().array(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { posts };
