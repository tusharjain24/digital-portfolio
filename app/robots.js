export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/*", "/_next/*", "/favicon.ico"]
      }
    ],
    sitemap: `${process.env.DEPLOYED_PROJECT_URL}/sitemap.xml`
  };
}
