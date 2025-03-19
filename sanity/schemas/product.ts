export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule: any) => Rule.required().positive(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Art', value: 'art' },
                    { title: 'Flow Toys', value: 'flow-toys' },
                    { title: 'Files', value: 'files' },
                    { title: 'Crafts', value: 'crafts' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'shopifyProductId',
            title: 'Shopify Product ID',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'shopifyVariantId',
            title: 'Shopify Variant ID',
            type: 'string',
        },
    ],
} 