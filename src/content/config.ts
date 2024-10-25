import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => 
      z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine((img) => img.width < 1200, {
            message: 'Image should be lower than 1200px',
        }),

        // Relacion
        // author: z.string(),
        author: reference('author'),

        // Relacion
        tags: z.array(z.string()),

        // Boolean
        isDraf: z.boolean().default(false),

    }),
})
// name: John Smith
// avatar: ./avatars/john-smith.webp
// twitter: johnsmith_dev
// linkedIn: https://www.linkedin.com/in/johnsmith-dev
// github: https://github.com/johnsmith
// bio: 'John Smith is a backend developer who specializes in building robust APIs and services. He is passionate about open-source projects and community-driven development.'
// subtitle: 'Backend Developer'

const authorCollection = defineCollection({
    type: 'data',
    schema: ({image}) =>z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string(),
        linkedIn: z.string(),
        github: z.string(),
        bio: z.string(),
        subtitle: z.string(),
    })
});


export const collections = {
    blog: blogCollection,
    author: authorCollection,
}
