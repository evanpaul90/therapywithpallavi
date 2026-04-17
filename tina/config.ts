import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Journal posts",
        path: "content/posts",
        format: "md",
        defaultItem: () => ({
          title: "New post",
          date: new Date().toISOString().slice(0, 10),
          dateLabel: new Date().toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          }),
          readingMinutes: 3,
        }),
        ui: {
          filename: {
            slugify: (values) => {
              return `${String(values?.title ?? "")
                .toLowerCase()
                .trim()
                .replace(/['"]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt (2 sentences for the card)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "date",
            label: "Date (YYYY-MM-DD)",
            description: "Used for ordering posts and schema.org metadata.",
          },
          {
            type: "string",
            name: "dateLabel",
            label: "Date label (e.g. 'April 2026')",
            description: "Shown on the article and on the journal index.",
          },
          {
            type: "number",
            name: "readingMinutes",
            label: "Reading time (minutes)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            parser: { type: "md" },
          },
        ],
      },
    ],
  },
});
