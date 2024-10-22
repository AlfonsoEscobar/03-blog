import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(), 
        date: z.string(),
        description: z.string(),
        image: z.string(),

        // Relacion
        author: z.string(),

        // Relacion
        tags: z.array(z.string()),
    }),

})


export const collection = {
    blog: blogCollection,
}