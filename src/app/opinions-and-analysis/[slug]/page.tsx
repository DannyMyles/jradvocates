import { Article, articleMetadata, articleParams } from "@/components/article";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("opinions-and-analysis");
}

export async function generateMetadata({ params }: Props) {
  return articleMetadata("opinions-and-analysis", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <Article category="opinions-and-analysis" slug={(await params).slug} />;
}
