/** Shared sections for ministry & fellowship detail pages */

const PARISH_CONTACT = {
  phone: "+254 798 125 596",
  email: "info@stphillips.church.org",
  officeHours: "Tuesdays, 8:00 AM – 5:00 PM",
};

function esc(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderListSection(title, icon, items, emptyText) {
  if (!items?.length) return "";
  return `
    <section class="mt-10">
      <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider flex items-center gap-2">
        <i class="fa-solid fa-${icon} text-ack-gold" aria-hidden="true"></i> ${esc(title)}
      </h2>
      <ul class="mt-4 space-y-2">
        ${items.map((item) => `<li class="flex gap-2 text-gray-700 text-sm leading-relaxed"><i class="fa-solid fa-check text-ack-gold mt-1 shrink-0" aria-hidden="true"></i><span>${esc(item)}</span></li>`).join("")}
      </ul>
    </section>
  `;
}

function renderScheduleSection(schedule, note) {
  if (!schedule?.length) return "";
  return `
    <section class="mt-10">
      <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider flex items-center gap-2">
        <i class="fa-solid fa-calendar-days text-ack-gold" aria-hidden="true"></i> Weekly schedule
      </h2>
      <div class="mt-4 space-y-3">
        ${schedule
          .map(
            (s) => `
          <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span class="text-xs font-bold text-ack-purple uppercase shrink-0 w-28">${esc(s.day)}</span>
            <span class="text-sm font-semibold text-gray-900 shrink-0">${esc(s.time)}</span>
            <span class="text-sm text-gray-600">${esc(s.activity)}</span>
          </div>
        `
          )
          .join("")}
      </div>
      ${note ? `<p class="text-gray-500 text-xs mt-3 italic">${esc(note)}</p>` : ""}
    </section>
  `;
}

function renderPaymentsSection(payments, disclaimer) {
  if (!payments?.length) return "";
  return `
    <section class="mt-10">
      <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider flex items-center gap-2">
        <i class="fa-solid fa-hand-holding-dollar text-ack-gold" aria-hidden="true"></i> Giving &amp; payments
      </h2>
      <p class="text-gray-600 text-sm mt-2 leading-relaxed">
        Support this group’s programmes through the channels below. Always include your <strong>name</strong> and
        <strong>ministry/fellowship</strong> in the M-Pesa message.
      </p>
      <div class="mt-4 grid sm:grid-cols-2 gap-4">
        ${payments
          .map(
            (p) => `
          <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p class="font-semibold text-ack-purple-dark text-sm">${esc(p.title)}</p>
            ${p.amount ? `<p class="text-2xl font-bold text-gray-900 mt-1">${esc(p.amount)}</p>` : ""}
            ${p.mpesa ? `<p class="text-sm text-gray-700 mt-3"><i class="fa-solid fa-mobile-screen text-green-600 mr-1" aria-hidden="true"></i><strong>M-Pesa:</strong> ${esc(p.mpesa)}</p>` : ""}
            ${p.account ? `<p class="text-sm text-gray-600 mt-1"><strong>Account:</strong> ${esc(p.account)}</p>` : ""}
            ${p.notes ? `<p class="text-xs text-gray-500 mt-2">${esc(p.notes)}</p>` : ""}
          </div>
        `
          )
          .join("")}
      </div>
      <p class="text-xs text-gray-500 mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
        <i class="fa-solid fa-circle-info text-amber-600 mr-1" aria-hidden="true"></i>
        ${esc(disclaimer || "Payment details are placeholders — update via the parish admin panel before go-live.")}
      </p>
    </section>
  `;
}

function renderLeadershipSection(team) {
  if (!team?.length) return "";
  return `
    <section class="mt-10">
      <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider flex items-center gap-2">
        <i class="fa-solid fa-users text-ack-gold" aria-hidden="true"></i> Leadership
      </h2>
      <div class="mt-4 grid sm:grid-cols-2 gap-4">
        ${team
          .map(
            (t) => `
          <div class="bg-[#eef1f6] rounded-xl p-4 border border-gray-100">
            <p class="text-xs text-ack-purple font-semibold uppercase">${esc(t.role)}</p>
            <p class="font-semibold text-gray-900 mt-1">${esc(t.name)}</p>
            ${t.phone ? `<a href="tel:${t.phone.replace(/\s/g, "")}" class="text-sm text-ack-purple hover:text-ack-gold mt-1 inline-block">${esc(t.phone)}</a>` : ""}
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderInfoCards(cards) {
  if (!cards?.length) return "";
  return `
    <div class="mt-10 grid sm:grid-cols-2 gap-4">
      ${cards
        .map(
          (c) => `
        <div class="rounded-xl p-5 ${c.variant === "purple" ? "bg-ack-purple text-white" : "bg-white border border-gray-200"}">
          <h3 class="font-semibold text-sm ${c.variant === "purple" ? "text-ack-gold" : "text-ack-purple-dark"}">${esc(c.title)}</h3>
          <p class="text-sm mt-2 leading-relaxed ${c.variant === "purple" ? "text-white/85" : "text-gray-600"}">${c.body}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderSidebarPayments(payments) {
  if (!payments?.length) return "";
  const primary = payments[0];
  return `
    <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
      <h2 class="font-semibold text-green-900 text-sm flex items-center gap-2">
        <i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i> Quick pay
      </h2>
      <p class="text-green-800 text-xs mt-2">${esc(primary.title)}</p>
      ${primary.mpesa ? `<p class="text-lg font-bold text-green-900 mt-2 font-mono">${esc(primary.mpesa)}</p>` : ""}
      ${primary.amount ? `<p class="text-sm text-green-700 mt-1">${esc(primary.amount)}</p>` : ""}
      <p class="text-[11px] text-green-700/80 mt-3">Confirm amount with your leader before sending.</p>
    </div>
  `;
}

function renderDetailSidebar({ meeting, leader, phone, email, payments, extraLinks }) {
  return `
    <aside class="space-y-6 lg:sticky lg:top-24 h-fit">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 class="font-semibold text-ack-purple-dark">Meeting details</h2>
        <ul class="mt-4 space-y-4 text-sm text-gray-700">
          ${meeting
            .map(
              (m) => `
            <li class="flex gap-3">
              <i class="fa-solid fa-${m.icon} text-ack-gold mt-0.5" aria-hidden="true"></i>
              <span><strong class="text-gray-900">${esc(m.label)}</strong><br>${m.html || esc(m.value)}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      ${payments?.length ? renderSidebarPayments(payments) : ""}
      <div class="bg-ack-purple text-white rounded-2xl p-6">
        <h3 class="font-semibold text-ack-gold text-sm uppercase">Parish office</h3>
        <p class="text-white/85 text-sm mt-2 leading-relaxed">${esc(PARISH_CONTACT.officeHours)}</p>
        <ul class="mt-3 text-sm space-y-2 text-white/90">
          <li><a href="tel:${PARISH_CONTACT.phone.replace(/\s/g, "")}" class="hover:text-ack-gold">${esc(PARISH_CONTACT.phone)}</a></li>
          <li><a href="mailto:${PARISH_CONTACT.email}" class="hover:text-ack-gold break-all">${esc(PARISH_CONTACT.email)}</a></li>
        </ul>
      </div>
      ${(extraLinks || [])
        .map(
          (l) => `
        <a href="${l.href}" class="block text-center ${l.primary ? "bg-ack-gold text-ack-purple-dark font-semibold" : "border-2 border-ack-purple text-ack-purple font-semibold hover:bg-ack-purple/5"} py-3 rounded-lg text-sm transition">
          ${esc(l.label)}
        </a>
      `
        )
        .join("")}
    </aside>
  `;
}

function renderNotFound({ title, backHref, backLabel }) {
  return `
    <div class="max-w-2xl mx-auto px-6 py-24 text-center">
      <i class="fa-solid fa-circle-exclamation text-4xl text-ack-gold" aria-hidden="true"></i>
      <h1 class="font-display text-2xl font-bold text-ack-purple-dark mt-4">${esc(title)}</h1>
      <p class="text-gray-600 mt-2">The page you requested does not exist or may have been moved.</p>
      <a href="${backHref}" class="inline-block mt-6 bg-ack-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-ack-purple-dark transition">${esc(backLabel)}</a>
    </div>
  `;
}

function renderDetailHero({ backHref, backLabel, badgeClass, badge, title, image, fallback }) {
  return `
    <section class="relative min-h-[42vh] flex items-end overflow-hidden">
      <img src="${image}" alt="" class="absolute inset-0 w-full h-full object-cover" onerror="this.onerror=null;this.src='${fallback}'">
      <div class="absolute inset-0 bg-gradient-to-t from-ack-purple-dark via-ack-purple/70 to-transparent"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-32 w-full text-white">
        <a href="${backHref}" class="inline-flex items-center gap-2 text-white/80 hover:text-ack-gold text-sm mb-4 transition">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> ${esc(backLabel)}
        </a>
        <div class="flex flex-wrap gap-2 mb-3">${badge}</div>
        <h1 class="font-display text-3xl md:text-5xl font-bold">${esc(title)}</h1>
      </div>
    </section>
  `;
}
