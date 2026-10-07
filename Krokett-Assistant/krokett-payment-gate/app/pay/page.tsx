import PaymentButton from "./PaymentButton";

type OrderData = {
  order_id: string;
  customer_name: string;
  phone_number: string;
  ordered_items: string;
  grand_total: string | number;
  chat_id: string;
};

function decodeData(value: string | undefined): OrderData | null {
  if (!value) return null;

  try {
    const json = Buffer.from(value, "base64url").toString("utf8");
    const parsed = JSON.parse(json);

    if (
      !parsed.order_id ||
      !parsed.customer_name ||
      !parsed.phone_number ||
      !parsed.ordered_items ||
      parsed.grand_total === undefined ||
      !parsed.chat_id
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export default async function PayPage({
  searchParams
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  const params = await searchParams;
  const order = decodeData(params.data);

  if (!order) {
    return (
      <main className="center-page">
        <div className="card error-card">
          <h1>الرابط غير صالح</h1>
          <p className="muted">
            لم نتمكن من قراءة بيانات الطلب. اطلب إنشاء رابط دفع جديد.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="payment-page">
      <div className="payment-shell">
        <div className="brand-row">
          <div className="brand-mark small">K</div>
          <div>
            <strong>Krokett Grill</strong>
            <span>الدفع الإلكتروني</span>
          </div>
        </div>

        <div className="card payment-card">
          <div className="secure-badge">دفع تجريبي آمن</div>
          <h1>تأكيد الدفع</h1>
          <p className="muted">
            أهلاً {order.customer_name}، راجع بيانات طلبك قبل الدفع.
          </p>

          <div className="order-box">
            <div className="row">
              <span>رقم الطلب</span>
              <strong>{order.order_id}</strong>
            </div>
            <div className="row">
              <span>الطلب</span>
              <strong>{order.ordered_items}</strong>
            </div>
            <div className="row">
              <span>رقم الهاتف</span>
              <strong>{order.phone_number}</strong>
            </div>
            <div className="total-row">
              <span>الإجمالي</span>
              <strong>{order.grand_total} جنيه</strong>
            </div>
          </div>

          <PaymentButton order={order} />
          <p className="demo-note">
            هذه بوابة دفع تجريبية للـ Portfolio وليست بوابة دفع حقيقية.
          </p>
        </div>
      </div>
    </main>
  );
}