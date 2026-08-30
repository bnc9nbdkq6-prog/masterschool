import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paginas = [
  { pad: "/", prioriteit: 1 },
  { pad: "/diensten", prioriteit: 0.9 },
  { pad: "/diensten/bijles", prioriteit: 0.9 },
  { pad: "/diensten/leersysteem", prioriteit: 0.8 },
  { pad: "/diensten/garantiesprint", prioriteit: 0.8 },
  { pad: "/diensten/examen-doorbraak", prioriteit: 0.7 },
  { pad: "/diensten/overgangsboost", prioriteit: 0.7 },
  { pad: "/diensten/examen-squad", prioriteit: 0.7 },
  { pad: "/werkwijze", prioriteit: 0.7 },
  { pad: "/resultaten", prioriteit: 0.7 },
  { pad: "/over-mij", prioriteit: 0.7 },
  { pad: "/veelgestelde-vragen", prioriteit: 0.6 },
  { pad: "/contact", prioriteit: 0.9 },
  { pad: "/privacyverklaring", prioriteit: 0.2 },
  { pad: "/algemene-voorwaarden", prioriteit: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return paginas.map(({ pad, prioriteit }) => ({
    url: `${site.url}${pad}`,
    lastModified: nu,
    changeFrequency: "monthly",
    priority: prioriteit,
  }));
}
