const API_URL =
  "https://palm-varying-actors-julia.trycloudflare.com/webhook-test/krokett-dashboard";

const totalOrders = document.getElementById("totalOrders");
const totalSales = document.getElementById("totalSales");
const cashOrders = document.getElementById("cashOrders");
const paidOnlineOrders = document.getElementById("paidOnlineOrders");

const ordersTable = document.getElementById("ordersTable");
const searchInput = document.getElementById("searchInput");
const refreshBtn = document.getElementById("refreshBtn");

let allOrders = [];


/* =========================
   Load Dashboard
========================= */

async function loadDashboard() {
  try {
    refreshBtn.disabled = true;
    refreshBtn.textContent = "جاري التحديث...";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("فشل الاتصال بالـ API");
    }

    const data = await response.json();

    allOrders = data.orders || [];

    // ترتيب الطلبات من الأحدث إلى الأقدم
    allOrders.sort((a, b) => {
      return new Date(b.Date_Time) - new Date(a.Date_Time);
    });

    updateStats(data.stats);

    renderOrders(allOrders);

  } catch (error) {

    console.error(error);

    ordersTable.innerHTML = `
      <tr>
        <td colspan="7" class="loading">
          حدث خطأ أثناء تحميل البيانات
        </td>
      </tr>
    `;

  } finally {

    refreshBtn.disabled = false;
    refreshBtn.textContent = "↻ تحديث البيانات";
  }
}


/* =========================
   Update Statistics
========================= */

function updateStats(stats) {

  totalOrders.textContent =
    stats?.totalOrders ?? 0;

  totalSales.textContent =
    `${Number(stats?.totalSales || 0).toLocaleString("ar-EG")} ج.م`;

  cashOrders.textContent =
    stats?.cashOrders ?? 0;

  paidOnlineOrders.textContent =
    stats?.paidOnlineOrders ?? 0;
}


/* =========================
   Render Orders
========================= */

function renderOrders(orders) {

  if (!orders.length) {

    ordersTable.innerHTML = `
      <tr>
        <td colspan="7" class="loading">
          لا توجد طلبات
        </td>
      </tr>
    `;

    return;
  }

  ordersTable.innerHTML = orders.map(order => {

    const paymentMethod =
      order.Payment_Method || "—";

    const paymentStatus =
      order.Payment_Status || "";

    let statusHTML = "";


    /* Payment Status */

    if (paymentStatus === "paid") {

      statusHTML = `
        <span class="badge paid">
          مدفوع
        </span>
      `;

    } else if (paymentStatus === "pending") {

      statusHTML = `
        <span class="badge pending">
          في انتظار الدفع
        </span>
      `;

    } else if (paymentMethod === "كاش") {

      statusHTML = `
        <span class="badge cash">
          كاش
        </span>
      `;

    } else {

      statusHTML = `
        <span class="badge empty">
          غير محدد
        </span>
      `;
    }


    /* Payment Method */

    let paymentMethodHTML = "—";

    if (paymentMethod === "كاش") {

      paymentMethodHTML = `
        <span class="payment-method cash-method">
          💵 كاش
        </span>
      `;

    } else if (paymentMethod === "كارت") {

      paymentMethodHTML = `
        <span class="payment-method card-method">
          💳 كارت
        </span>
      `;

    } else {

      paymentMethodHTML = `
        <span class="payment-method">
          ${escapeHTML(paymentMethod)}
        </span>
      `;
    }


    /* Total Price */

    const totalPrice =
      order.Total_Price !== "" &&
      order.Total_Price !== null &&
      order.Total_Price !== undefined
        ? `${Number(order.Total_Price).toLocaleString("ar-EG")} ج.م`
        : "—";


    return `
      <tr>

        <td class="order-id">
          ${escapeHTML(order.Order_ID || "—")}
        </td>

        <td class="customer">
          ${escapeHTML(order.Customer_Name || "—")}
        </td>

        <td class="items">
          ${escapeHTML(order.Ordered_Items || "—")}
        </td>

        <td class="amount">
          ${totalPrice}
        </td>

        <td>
          ${paymentMethodHTML}
        </td>

        <td>
          ${statusHTML}
        </td>

        <td class="date">
          ${formatDate(order.Date_Time)}
        </td>

      </tr>
    `;

  }).join("");
}


/* =========================
   Search
========================= */

searchInput.addEventListener("input", () => {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();

  const filteredOrders =
    allOrders.filter(order => {

      const orderId =
        String(order.Order_ID || "")
          .toLowerCase();

      const customer =
        String(order.Customer_Name || "")
          .toLowerCase();

      const phone =
        String(order.Phone_Number || "")
          .toLowerCase();

      return (
        orderId.includes(search) ||
        customer.includes(search) ||
        phone.includes(search)
      );

    });

  renderOrders(filteredOrders);
});


/* =========================
   Refresh
========================= */

refreshBtn.addEventListener(
  "click",
  loadDashboard
);


/* =========================
   Format Date
========================= */

function formatDate(value) {

  if (!value) {
    return "—";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return escapeHTML(value);
  }

  return date.toLocaleString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}


/* =========================
   Prevent HTML Injection
========================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   Initial Load
========================= */

loadDashboard();