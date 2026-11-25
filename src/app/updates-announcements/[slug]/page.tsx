import { Article, articleMetadata, articleParams } from "@/components/article";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("updates-announcements");
}

export async function generateMetadata({ params }: Props) {
  return articleMetadata("updates-announcements", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <Article category="updates-announcements" slug={(await params).slug} />;
}
