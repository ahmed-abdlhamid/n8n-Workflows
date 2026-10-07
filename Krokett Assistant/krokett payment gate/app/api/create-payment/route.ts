import { NextResponse } from "next/server";

type OrderData = {
  order_id: string;
  customer_name: string;
  phone_number: string;
  ordered_items: string;
  grand_total: string | number;
  chat_id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<OrderData>;

    const required = [
      "order_id",
      "customer_name",
      "phone_number",
      "ordered_items",
      "grand_total",
      "chat_id"
    ] as const;

    for (const field of required) {
      if (
        body[field] === undefined ||
        body[field] === null ||
        String(body[field]).trim() === ""
      ) {
        return NextResponse.json(
          { error: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }

    const order: OrderData = {
      order_id: String(body.order_id),
      customer_name: String(body.customer_name),
      phone_number: String(body.phone_number),
      ordered_items: String(body.ordered_items),
      grand_total: body.grand_total as string | number,
      chat_id: String(body.chat_id)
    };

    const encoded = Buffer.from(JSON.stringify(order), "utf8").toString(
      "base64url"
    );

    const paymentUrl = new URL("/pay", request.url);
    paymentUrl.searchParams.set("data", encoded);

    return NextResponse.json({
      success: true,
      payment_url: paymentUrl.toString(),
      order_id: order.order_id
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }
}