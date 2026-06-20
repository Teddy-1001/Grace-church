/** Parish leadership — replace placeholders when names are confirmed */

const LEADERSHIP = {
  clergy: [
    {
      role: "Vicar",
      name: "To be announced",
      title: "The Rev.",
      bio: "Parish priest and spiritual head of St. Phillips Roadblock under the Diocese of Eldoret.",
      image: "/src/assets/images/sermon.webp",
    },
    {
      role: "Assistant Curate",
      name: "To be announced",
      title: "The Rev.",
      bio: "Supports preaching, pastoral visits, and guild coordination.",
      image: null,
    },
  ],
  lay: [
    {
      role: "Church Warden",
      name: "To be announced",
      title: null,
      bio: "Elected lay leader responsible for parish property and representation to the diocese.",
      image: null,
    },
    {
      role: "Deputy Church Warden",
      name: "To be announced",
      title: null,
      bio: "Assists the warden in parish administration and Sunday coordination.",
      image: null,
    },
    {
      role: "Parish Secretary",
      name: "To be announced",
      title: null,
      bio: "Handles correspondence, records, and parish office matters.",
      image: null,
    },
    {
      role: "Treasurer",
      name: "To be announced",
      title: null,
      bio: "Oversees parish finances, offerings, and financial reporting to PCC.",
      image: null,
    },
  ],
  guildChairs: [
    { guild: "KAMA (Men's Association)", name: "To be announced" },
    { guild: "Mothers' Union", name: "To be announced" },
    { guild: "KAYO / Youth", name: "To be announced" },
    { guild: "Sunday School", name: "To be announced" },
  ],
};

function esc(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderLeaderCard(person) {
  const imgSrc = person.image || "/src/assets/images/ack-logo.svg";
  const imgAlt = person.image ? esc(person.name) : "ACK logo placeholder";
  return `
    <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="h-48 bg-ack-purple/5 flex items-center justify-center overflow-hidden">
        <img src="${esc(imgSrc)}" alt="${imgAlt}" class="w-full h-full object-cover"
          onerror="this.src='/src/assets/images/ack-logo.svg'; this.classList.add('object-contain','p-8','opacity-60');">
      </div>
      <div class="p-6">
        <p class="text-xs font-bold text-ack-purple uppercase tracking-wider">${esc(person.role)}</p>
        <h3 class="font-display text-xl font-bold text-ack-purple-dark mt-1">
          ${person.title ? `<span class="font-normal text-base">${esc(person.title)}</span> ` : ""}${esc(person.name)}
        </h3>
        <p class="text-gray-600 text-sm mt-3 leading-relaxed">${esc(person.bio)}</p>
      </div>
    </article>
  `;
}

function renderGuildRow(row) {
  return `
    <tr class="border-b border-gray-100 last:border-0">
      <td class="py-3 pr-4 text-sm font-medium text-gray-900">${esc(row.guild)}</td>
      <td class="py-3 text-sm text-gray-600">${esc(row.name)}</td>
    </tr>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const clergyEl = document.getElementById("clergy-grid");
  const layEl = document.getElementById("lay-grid");
  const guildEl = document.getElementById("guild-table-body");

  if (clergyEl) {
    clergyEl.innerHTML = LEADERSHIP.clergy.map(renderLeaderCard).join("");
  }
  if (layEl) {
    layEl.innerHTML = LEADERSHIP.lay.map(renderLeaderCard).join("");
  }
  if (guildEl) {
    guildEl.innerHTML = LEADERSHIP.guildChairs.map(renderGuildRow).join("");
  }
});
