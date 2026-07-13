import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://compldoc.com";
  
  const routes = [
    "",
    "/services",
    "/industries",
    "/pricing",
    "/about",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" || route === "/resources" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.7,
  }));
}
