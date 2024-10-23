import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine((img) => img.width > 1080, {
            message: "¡La imagen de portada debe tener al menos 1080 píxeles de ancho!",
          }),

        // Relacion
        author: z.string(),

        // Relacion
        tags: z.array(z.string()),
    }),

})


export const collection = {
    blog: blogCollection,
}