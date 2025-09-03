export default async function sitemap() {
  const myXML = [
    {
      url: `${process.env.DEPLOYED_PROJECT_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ];

  return myXML;
}
