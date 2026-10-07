import Link from "next/link";

export default function DemoPage() {
  const data = encodeURIComponent(
    Buffer.from(
      JSON.stringify({
        order_id: "DEMO-1001",
        customer_name: "أحمد",
        phone_number: "01000000000",
        ordered_items: "وجبة كفتة × 2",
        grand_total: 250,
        chat_id: "demo-chat"
      }),
      "utf8"
    ).toString("base64url")
  );

  return (
    <main className="center-page">
      <div className="card">
        <p className="eyebrow">DEMO</p>
        <h1>طلب تجريبي</h1>
        <p className="muted">
          استخدم الرابط التالي لمحاكاة صفحة دفع حقيقية.
        </p>
        <Link className="button" href={`/pay?data=${data}`}>
          فتح صفحة الدفع
        </Link>
      </div>
    </main>
  );
}