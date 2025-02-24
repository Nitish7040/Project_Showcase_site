import {  UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField(
        {
            name: "name",
            title: "Name",
            type: "string",
            
        }),
        defineField({
            name: "username",
            type: "string",
            
        }),
        defineField({
            name: "email",
            type: "email",

        }),
        defineField( {
            name: "image",
            type: "url",
        }),
        defineField( {
            name: "bio",
            type: "text",
        }),
    ],
    preview: {
        select: {
            "title": "name",
        },
    },
})