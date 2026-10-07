import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_PAYMENT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          "N8N_PAYMENT_WEBHOOK_URL is not configured in Vercel."
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const paymentEvent = {
      event: "payment.success",
      payment_id: `MOCK-${Date.now()}`,
      payment_status: "paid",
      payment_method: "card",
      order_id: body.order_id,
      customer_name: body.customer_name,
      phone_number: body.phone_number,
      ordered_items: body.ordered_items,
      grand_total: body.grand_total,
      chat_id: body.chat_id,
      paid_at: new Date().toISOString()
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paymentEvent),
      cache: "no-store"
    });

    if (!webhookResponse.ok) {
      const details = await webhookResponse.text();
      return NextResponse.json(
        {
          error: "Payment succeeded locally, but n8n webhook failed.",
          details
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      payment_status: "paid",
      payment_id: paymentEvent.payment_id
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid payment request." },
      { status: 400 }
    );
  }
}