import Link from "next/link";

export default function HomePage() {
  return (
    <main className="center-page">
      <div className="card hero-card">
        <div className="brand-mark">K</div>
        <p className="eyebrow">KROKETT GRILL</p>
        <h1>بوابة الدفع التجريبية</h1>
        <p className="muted">
          هذه صفحة Demo لاختبار رحلة الدفع وربطها مع n8n.
        </p>
        <Link className="button" href="/demo">
          تجربة الدفع
        </Link>
      </div>
    </main>
  );
}