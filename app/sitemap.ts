import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magiaimaginacion.cl";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacidad-condiciones`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
