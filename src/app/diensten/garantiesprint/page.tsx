import type { Metadata } from "next";
import { DienstDetail } from "@/components/DienstDetail";
import { dienstenJaar } from "@/content/diensten";

const dienst = dienstenJaar.find((d) => d.slug === "garantiesprint")!;

export const metadata: Metadata = {
  title: dienst.detail!.metaTitel,
  description: dienst.detail!.metaOmschrijving,
  alternates: { canonical: "/diensten/garantiesprint" },
};

export default function Pagina() {
  return <DienstDetail dienst={dienst} />;
}
