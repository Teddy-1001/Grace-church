const fellowships = [
  {
    id: "kahoya",
    title: "Kahoya Estate Fellowship",
    estate: "Kahoya",
    location: "Host home — enquire at parish office for this week's venue",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/church.webp",
    tag: "Mixed",
    leader: "Fellowship Leader",
    phone: "+254 798 125 596",
    description:
      "Serving families in the Kahoya area with Sunday afternoon prayer, Bible study, and fellowship after the main parish service.",
    activities: [
      "Opening prayers and praise",
      "Bible study from the lectionary or parish theme",
      "Testimonies, announcements, and welfare check-ins",
      "Light refreshments (rotating hosts)",
    ],
    membership: "Open to all Anglicans and seekers living in or near Kahoya. No fee to attend.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Estate fellowship at host home" },
    ],
    payments: [
      { title: "Fellowship welfare fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Label: Kahoya Fellowship" },
      { title: "Host refreshment", amount: "KSh 50–100", mpesa: "Cash to host", notes: "When announced" },
    ],
    leadership: [
      { role: "Leader", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Assistant", name: "To be announced", phone: "" },
    ],
    bring: "Bible, notebook, and willingness to join in prayer.",
    getInvolved: "Attend main Sunday service first, then ask an usher for directions to the Kahoya group.",
    mapNote: "Venue rotates among member homes — call the leader before your first visit.",
  },
  {
    id: "roadblock",
    title: "Roadblock Estate Fellowship",
    estate: "Roadblock",
    location: "Near St. Phillips parish — host home announced weekly",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/2019-06-02.jpg",
    tag: "Families",
    leader: "Fellowship Leader",
    phone: "+254 798 125 596",
    description:
      "The fellowship closest to the parish church — ideal for members along the Eldoret–Nakuru Highway and Roadblock estate.",
    activities: [
      "Family-centred Bible teaching",
      "Prayer for the estate and nation",
      "Coordination with parish outreach",
    ],
    membership: "Families and individuals from Roadblock and adjacent plots welcome.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Home fellowship" },
    ],
    payments: [
      { title: "Roadblock fellowship fund", amount: "Voluntary", mpesa: "Paybill 000000 · Acc. Roadblock", notes: "Outreach & welfare" },
    ],
    leadership: [
      { role: "Leader", name: "To be announced", phone: "+254 798 125 596" },
    ],
    bring: "Bible and offering as led.",
    getInvolved: "Meet at the parish gate after Sunday service — groups often walk together.",
    mapNote: "Walking distance from St. Phillips Roadblock church.",
  },
  {
    id: "langas",
    title: "Langas Estate Fellowship",
    estate: "Langas",
    location: "Member home in Langas (confirm weekly)",
    day: "Sunday",
    time: "2:30 PM – 4:00 PM",
    image: "/src/assets/images/church.webp",
    tag: "Youth & Adults",
    leader: "Fellowship Leader",
    phone: "+254 798 125 596",
    description:
      "Reaching the Langas community with Christ-centred fellowship, strong youth participation, and intercessory prayer.",
    activities: [
      "Youth-led praise segments",
      "Scripture discussion groups by age",
      "Quarterly estate clean-up (when scheduled)",
    ],
    membership: "Youth and adults; parents encouraged to attend with teens.",
    schedule: [
      { day: "Sunday", time: "2:30 – 4:00 PM", activity: "Fellowship meeting" },
    ],
    payments: [
      { title: "Youth mission fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Langas KAYO link" },
    ],
    leadership: [
      { role: "Leader", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Youth rep", name: "To be announced", phone: "" },
    ],
    bring: "Bible, notebook, and modest dress.",
    getInvolved: "Contact leader via parish office for transport coordination from church.",
    mapNote: "Allow extra travel time from the parish on Sunday afternoon.",
  },
  {
    id: "kapsoya",
    title: "Kapsoya Fellowship",
    estate: "Kapsoya",
    location: "Kapsoya estate — shared venue weekly",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/pexels-mbaraga-bernard-2158456013-35388499.webp",
    tag: "Women & Men",
    leader: "Fellowship Leader",
    phone: "+254 798 125 596",
    description:
      "A growing Kapsoya group committed to Scripture, worship songs, and supporting one another through life's challenges.",
    activities: [
      "Hymns and Kiswahili praise",
      "Prayer chains for the sick",
      "Seasonal outreach to neighbours",
    ],
    membership: "Men and women welcome. Couples encouraged to attend together.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Fellowship & tea fellowship" },
    ],
    payments: [
      { title: "Kapsoya welfare", amount: "Voluntary", mpesa: "Till 000000", notes: "Bereavement & hospital visits" },
    ],
    leadership: [
      { role: "Leader", name: "To be announced", phone: "+254 798 125 596" },
      { role: "MU link", name: "Mothers' Union rep", phone: "" },
    ],
    bring: "Bible and hymn book if available.",
    getInvolved: "Ask at the parish office for the current Kapsoya host home.",
    mapNote: null,
  },
  {
    id: "pioneer",
    title: "Pioneer Estate Fellowship",
    estate: "Pioneer",
    location: "Pioneer estate hall",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/man-reads-bible-male-hands-with-bible-closeup.webp",
    tag: "Mixed",
    leader: "Fellowship Leader",
    phone: "+254 798 125 596",
    description:
      "Gathering Pioneer estate members for holistic fellowship — prayer, sharing, and practical care for parish families.",
    activities: [
      "Structured Bible study series",
      "Member visitation rota",
      "Joint events with other estate groups",
    ],
    membership: "Stable venue at estate hall — easy for first-time visitors.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Hall fellowship" },
    ],
    payments: [
      { title: "Hall maintenance", amount: "KSh 100 / month", mpesa: "Paybill 000000 · Acc. Pioneer", notes: "Utilities & cleaning" },
    ],
    leadership: [
      { role: "Leader", name: "To be announced", phone: "+254 798 125 596" },
    ],
    bring: "Bible and seated fellowship attitude — chairs provided at hall.",
    getInvolved: "Go directly to Pioneer estate hall on Sunday at 2:00 PM (confirm with office if public holiday).",
    mapNote: "Fixed venue — no rotating homes.",
  },
  {
    id: "youth-cell",
    title: "Parish Youth Cell",
    estate: "Parish-wide",
    location: "Youth Hall, St. Phillips Roadblock",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/youths",
    fallbackImage: "/src/assets/images/2019-06-02.jpg",
    tag: "KAYO",
    leader: "KAYO Coordinator",
    phone: "+254 798 125 596",
    description:
      "Central youth fellowship at church for those who prefer not to meet in home estates — linked to KAYO programmes.",
    activities: [
      "Praise, Bible study, and games",
      "KAYO registration and rally preparation",
      "Service projects with parish youth",
    ],
    membership: "Ages 13–35. See also Wednesday KAYO midweek at parish.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Youth cell at Youth Hall" },
      { day: "Wednesday", time: "2:00 – 5:00 PM", activity: "KAYO midweek (parish)" },
    ],
    scheduleNote: "Aligns with diocesan KAYO calendar — rallies announced on noticeboard.",
    payments: [
      { title: "KAYO registration", amount: "KSh 200 / year", mpesa: "Paybill 000000 · Acc. KAYO", notes: "Same as KAYO ministry" },
      { title: "Rally & transport", amount: "As quoted", mpesa: "Till 000000", notes: "Per event" },
    ],
    leadership: [
      { role: "KAYO coordinator", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Patron", name: "Parish vicar", phone: "" },
    ],
    bring: "Bible, KAYO shirt for rallies, and signed consent form if under 18.",
    getInvolved: "Meet at the Youth Hall after Sunday service — no home address needed.",
    mapNote: "On parish compound — ask vergers for directions.",
  },
];

const tagColors = {
  Mixed: "bg-ack-purple/10 text-ack-purple",
  Families: "bg-amber-100 text-amber-900",
  "Youth & Adults": "bg-blue-100 text-blue-900",
  "Women & Men": "bg-pink-100 text-pink-900",
  KAYO: "bg-green-100 text-green-800",
};

function fellowshipImageTag(f) {
  const fallback = f.fallbackImage || "/src/assets/images/church.webp";
  return `<img src="${f.image}" alt="${f.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">`;
}

function renderFellowshipCard(f) {
  const badgeClass = tagColors[f.tag] || "bg-gray-100 text-gray-800";
  return `
    <article class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition duration-300">
      <div class="relative h-56 overflow-hidden bg-ack-purple/10">
        ${fellowshipImageTag(f)}
        <span class="absolute top-4 left-4 ${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${f.tag}</span>
        <span class="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">${f.estate}</span>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-ack-purple-dark">${f.title}</h2>
        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li><i class="fa-solid fa-location-dot text-ack-gold w-4" aria-hidden="true"></i> ${f.location}</li>
          <li><i class="fa-solid fa-clock text-ack-gold w-4" aria-hidden="true"></i> ${f.day}, ${f.time}</li>
        </ul>
        <a href="fellowship.html?id=${f.id}" class="inline-flex items-center gap-1 mt-5 text-ack-purple font-semibold text-sm hover:text-ack-gold transition">
          View fellowship <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

function renderFellowshipDetail() {
  const detailContainer = document.getElementById("fellowship-detail");
  if (!detailContainer) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const fellowship = fellowships.find((f) => f.id === id);

  if (!fellowship) {
    detailContainer.innerHTML = renderNotFound({
      title: "Fellowship not found",
      backHref: "/src/pages/fellowships.html",
      backLabel: "All fellowships",
    });
    document.title = "Fellowship not found | ACK St. Phillips Roadblock";
    return;
  }

  document.title = `${fellowship.title} | ACK St. Phillips Roadblock`;
  const badgeClass = tagColors[fellowship.tag] || "bg-gray-100 text-gray-800";
  const fallback = fellowship.fallbackImage || "/src/assets/images/church.webp";

  const thisWeekBlock = `
    <div class="mt-8 bg-[#eef1f6] rounded-2xl p-6 border border-gray-200">
      <h3 class="font-semibold text-ack-purple-dark flex items-center gap-2">
        <i class="fa-solid fa-calendar-week text-ack-gold" aria-hidden="true"></i> This week's meeting
      </h3>
      <p class="text-gray-700 mt-3 text-sm">
        <strong>${fellowship.day}</strong> at <strong>${fellowship.time}</strong><br>
        ${fellowship.location}
      </p>
      ${fellowship.mapNote ? `<p class="text-gray-500 text-xs mt-3"><i class="fa-solid fa-map-pin text-ack-gold mr-1" aria-hidden="true"></i>${fellowship.mapNote}</p>` : ""}
      <p class="text-gray-500 text-xs mt-3 italic">Times may vary on public holidays — check the parish noticeboard.</p>
    </div>
  `;

  const mainContent = `
    <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider">About this group</h2>
    <p class="text-gray-700 mt-3 leading-relaxed text-lg">${fellowship.description}</p>
    <p class="text-gray-600 mt-4 text-sm leading-relaxed">${fellowship.membership}</p>
    ${thisWeekBlock}
    ${renderListSection("A typical meeting includes", "list-check", fellowship.activities)}
    ${renderScheduleSection(fellowship.schedule, fellowship.scheduleNote)}
    ${renderPaymentsSection(fellowship.payments)}
    ${renderLeadershipSection(fellowship.leadership)}
    ${renderInfoCards([
      { title: "What to bring", body: fellowship.bring, variant: "default" },
      { title: "How to join", body: fellowship.getInvolved, variant: "purple" },
    ])}
  `;

  const sidebar = renderDetailSidebar({
    meeting: [
      { icon: "calendar", label: "Day", value: fellowship.day },
      { icon: "clock", label: "Time", value: fellowship.time },
      { icon: "location-dot", label: "Venue", value: fellowship.location },
      { icon: "user", label: "Leader", value: fellowship.leader },
      {
        icon: "phone",
        label: "Phone",
        value: fellowship.phone,
        html: `<a href="tel:${fellowship.phone.replace(/\s/g, "")}" class="text-ack-purple hover:text-ack-gold">${fellowship.phone}</a>`,
      },
    ],
    payments: fellowship.payments,
    extraLinks: [
      { href: "/src/pages/index.html#worship-schedule", label: "Sunday service times", primary: true },
      { href: `https://www.google.com/maps/dir/?api=1&destination=0.549954,35.244222`, label: "Directions to parish", primary: false },
      { href: "/src/pages/fellowships.html", label: "← All fellowships", primary: false },
    ],
  });

  detailContainer.innerHTML = `
    ${renderDetailHero({
      backHref: "/src/pages/fellowships.html",
      backLabel: "All fellowships",
      badge: `
        <span class="${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${fellowship.tag}</span>
        <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full">${fellowship.estate}</span>
      `,
      title: fellowship.title,
      image: fellowship.image,
      fallback,
    })}
    <section class="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2">${mainContent}</div>
        ${sidebar}
      </div>
    </section>
  `;
}

const listContainer = document.getElementById("fellowship-container");
if (listContainer) listContainer.innerHTML = fellowships.map(renderFellowshipCard).join("");
renderFellowshipDetail();
