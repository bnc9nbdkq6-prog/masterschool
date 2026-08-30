import type { Metadata } from "next";
import { DienstDetail } from "@/components/DienstDetail";
import { dienstenExamen } from "@/content/diensten";

const dienst = dienstenExamen.find((d) => d.slug === "overgangsboost")!;

export const metadata: Metadata = {
  title: dienst.detail!.metaTitel,
  description: dienst.detail!.metaOmschrijving,
  alternates: { canonical: "/diensten/overgangsboost" },
};

export default function Pagina() {
  return <DienstDetail dienst={dienst} />;
}
