/** Parish-wide giving channels — update paybill/till when confirmed */

const GIVE_CHANNELS = [
  {
    title: "Tithes & General Offering",
    amount: null,
    mpesa: "Paybill 000000 · Account: TITHE",
    account: "St. Phillips Roadblock Parish",
    notes: "Primary parish account for Sunday offerings and tithes.",
  },
  {
    title: "Building & Development Fund",
    amount: null,
    mpesa: "Paybill 000000 · Account: BUILDING",
    account: null,
    notes: "Church construction, repairs, and capital projects.",
  },
  {
    title: "Clergy & Staff Welfare",
    amount: null,
    mpesa: "Till 000000",
    account: null,
    notes: "Support for vicarage, stipends, and parish workers.",
  },
  {
    title: "Outreach & Charity",
    amount: null,
    mpesa: "Paybill 000000 · Account: OUTREACH",
    account: null,
    notes: "Widows, sick visits, and community missions.",
  },
  {
    title: "Sunday School & Youth",
    amount: null,
    mpesa: "Paybill 000000 · Account: YOUTH",
    account: null,
    notes: "Materials, camps, and KAYO programmes.",
  },
  {
    title: "Bank Transfer",
    amount: null,
    mpesa: null,
    account: "Account details to be published — contact parish office",
    notes: "For large gifts and standing orders.",
  },
];

const GIVE_DISCLAIMER =
  "M-Pesa paybill and till numbers shown are placeholders until confirmed by parish accounts. Always verify details with the church office before sending funds.";

function esc(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderGiveCard(p) {
  return `
    <article class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div class="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4">
        <i class="fa-solid fa-${p.mpesa ? "mobile-screen" : "building-columns"}" aria-hidden="true"></i>
      </div>
      <h3 class="font-semibold text-ack-purple-dark">${esc(p.title)}</h3>
      ${p.amount ? `<p class="text-2xl font-bold text-gray-900 mt-1">${esc(p.amount)}</p>` : ""}
      ${p.mpesa ? `<p class="text-sm text-gray-700 mt-3"><i class="fa-solid fa-mobile-screen text-green-600 mr-1" aria-hidden="true"></i><strong>M-Pesa:</strong> ${esc(p.mpesa)}</p>` : ""}
      ${p.account ? `<p class="text-sm text-gray-600 mt-2"><strong>${p.mpesa ? "Name" : "Bank"}:</strong> ${esc(p.account)}</p>` : ""}
      ${p.notes ? `<p class="text-xs text-gray-500 mt-3 leading-relaxed">${esc(p.notes)}</p>` : ""}
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("give-channels");
  const disclaimer = document.getElementById("give-disclaimer");
  if (container) {
    container.innerHTML = GIVE_CHANNELS.map(renderGiveCard).join("");
  }
  if (disclaimer) {
    disclaimer.textContent = GIVE_DISCLAIMER;
  }
});
