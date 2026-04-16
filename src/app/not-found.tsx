import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-32 md:py-48">
        <p className="cap-label">404</p>
        <h1 className="display-l mt-6 max-w-[640px]">
          This page isn&rsquo;t where it used to be.
        </h1>
        <p className="lead mt-6 max-w-[520px]">
          Try the home page, or reach me directly if you were looking for
          something specific.
        </p>
        <div className="mt-12 flex flex-wrap gap-6">
          <Link href="/" className="btn-primary">
            Home <span aria-hidden="true">→</span>
          </Link>
          <a href="mailto:therapy.icp@gmail.com" className="btn-link self-center">
            therapy.icp@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
