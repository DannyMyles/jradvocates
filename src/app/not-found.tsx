import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-32">
      <p className="label">Error 404</p>
      <h1 className="h1 max-w-2xl">We couldn’t find that page.</h1>
      <p className="mt-4 max-w-xl text-body">It may have moved when we updated our website. These links should help.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="primary">
          Home
        </ButtonLink>
        <ButtonLink href="/practice-areas">Practice Areas</ButtonLink>
        <ButtonLink href="/contacts">Contact us</ButtonLink>
      </div>
    </section>
  );
}
