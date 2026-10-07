 "use client";

import { useState } from "react";

type OrderData = {
  order_id: string;
  customer_name: string;
  phone_number: string;
  ordered_items: string;
  grand_total: string | number;
  chat_id: string;
};

export default function PaymentButton({ order }: { order: OrderData }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handlePayment() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/mock-pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...order,
          payment_method: "card"
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Payment failed");
      }

      setMessage("تم الدفع بنجاح وإرسال حالة الدفع للنظام.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "حدث خطأ أثناء الدفع."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        className="pay-button"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "جاري تأكيد الدفع..." : `دفع ${order.grand_total} جنيه`}
      </button>

      {message && (
        <div className="result-message" role="status">
          {message}
        </div>
      )}
    </div>
  );
}