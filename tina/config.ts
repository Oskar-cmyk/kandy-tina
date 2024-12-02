import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "public",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "imgSrc",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            isList: true,
            options: [
              { label: "Artwork", value: "artwork" },
              { label: "Photography", value: "photography" },
              { label: "Digital Art", value: "digital_art" },
              // Add more tags as needed
            ],
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "src/pages",
        templates: [
          {
            name: "Page",
            label: "Single Page",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: true,
                required: true,
              },
              {
                type: "string",
                name: "slug",
                label: "Slug",
                required: true,
              },
              {
                type: "image",
                name: "heroImage",
                label: "imgSrc",
              },
            ],
          },
        ],
      },
    ],
  },
});
