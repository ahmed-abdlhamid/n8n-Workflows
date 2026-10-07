# Krokett Payment Gate

A portfolio/demo payment gateway for the Krokett AI restaurant assistant.

## Flow

1. n8n sends the order to `POST /api/create-payment`.
2. The API creates a temporary payment URL containing the order data.
3. The customer opens `/pay?...`.
4. The customer clicks **دفع تجريبي**.
5. `POST /api/mock-pay` sends a `payment.success` event to the n8n webhook.
6. n8n can update the order as paid.

## n8n input

```json
{
  "order_id": "...",
  "customer_name": "...",
  "phone_number": "...",
  "ordered_items": "...",
  "grand_total": "...",
  "chat_id": "..."
}
```

## Vercel

After deployment, add this Environment Variable:

`N8N_PAYMENT_WEBHOOK_URL`

Set its value to the n8n webhook URL that will receive the payment-success event.

This project is a mock/demo gateway. It does not process real cards and does not store card information.