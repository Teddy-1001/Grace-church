const fellowships = [
  {
    id: "kahoya",
    title: "Kahoya Estate Fellowship",
    estate: "Kahoya",
    location: "Host home — enquire at parish office",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/church.webp",
    tag: "Mixed",
    leader: "Fellowship Leader",
    phone: "+254 700 000 000",
    description:
      "Serving families in the Kahoya area with Sunday afternoon prayer, Bible study, and fellowship. A welcoming group for adults and youth after the main parish service.",
  },
  {
    id: "roadblock",
    title: "Roadblock Estate Fellowship",
    estate: "Roadblock",
    location: "Near St. Phillips parish — host home TBC",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/2019-06-02.jpg",
    tag: "Families",
    leader: "Fellowship Leader",
    phone: "+254 700 000 000",
    description:
      "The fellowship closest to the parish church — ideal for members living along the Eldoret–Nakuru Highway and Roadblock estate. Focus on family discipleship and neighbourhood outreach.",
  },
  {
    id: "langas",
    title: "Langas Estate Fellowship",
    estate: "Langas",
    location: "Member home in Langas",
    day: "Sunday",
    time: "2:30 PM – 4:00 PM",
    image: "/src/assets/images/church.webp",
    tag: "Youth & Adults",
    leader: "Fellowship Leader",
    phone: "+254 700 000 000",
    description:
      "Reaching the Langas community with Christ-centred fellowship. Includes vibrant youth participation and intercessory prayer for the estate.",
  },
  {
    id: "kapsoya",
    title: "Kapsoya Fellowship",
    estate: "Kapsoya",
    location: "Kapsoya estate — venue shared weekly",
    day: "Sunday",
    time: "2:00 PM – 4:00 PM",
    image: "/src/assets/images/pexels-mbaraga-bernard-2158456013-35388499.webp",
    tag: "Women & Men",
    leader: "Fellowship Leader",
    phone: "+254 700 000 000",
    description:
      "A growing group in Kapsoya committed to Scripture, worship songs, and supporting one another through life's challenges.",
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
    phone: "+254 700 000 000",
    description:
      "Gathering Pioneer estate members for holistic fellowship — prayer, sharing, and practical care for families in the congregation.",
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
    phone: "+254 700 000 000",
    description:
      "The central youth fellowship for young people who prefer to meet at church rather than in a home estate group. Linked to KAYO discipleship programmes.",
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
        <span class="absolute top-4 left-4 ${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">
          ${f.tag}
        </span>
        <span class="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          ${f.estate}
        </span>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-ack-purple-dark">${f.title}</h2>
        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li><i class="fa-solid fa-location-dot text-ack-gold w-4" aria-hidden="true"></i> ${f.location}</li>
          <li><i class="fa-solid fa-calendar text-ack-gold w-4" aria-hidden="true"></i> ${f.day}</li>
          <li><i class="fa-solid fa-clock text-ack-gold w-4" aria-hidden="true"></i> ${f.time}</li>
        </ul>
        <p class="mt-4 text-xs bg-[#eef1f6] text-ack-purple px-3 py-2 rounded-lg inline-flex items-center gap-2">
          <i class="fa-solid fa-user" aria-hidden="true"></i> ${f.leader}
        </p>
        <a href="fellowship.html?id=${f.id}"
           class="inline-flex items-center gap-1 mt-5 text-ack-purple font-semibold text-sm hover:text-ack-gold transition">
          View fellowship <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

const listContainer = document.getElementById("fellowship-container");

function renderFellowshipsList() {
  if (!listContainer) return;
  listContainer.innerHTML = fellowships.map(renderFellowshipCard).join("");
}

function renderFellowshipDetail() {
  const detailContainer = document.getElementById("fellowship-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const fellowship = fellowships.find((f) => f.id === id);

  if (!fellowship) {
    detailContainer.innerHTML = `
      <div class="max-w-2xl mx-auto px-6 py-24 text-center">
        <i class="fa-solid fa-circle-exclamation text-4xl text-ack-gold" aria-hidden="true"></i>
        <h1 class="font-display text-2xl font-bold text-ack-purple-dark mt-4">Fellowship not found</h1>
        <p class="text-gray-600 mt-2">This estate group does not exist or may have been moved.</p>
        <a href="/src/pages/fellowships.html"
           class="inline-block mt-6 bg-ack-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-ack-purple-dark transition">
          View all fellowships
        </a>
      </div>
    `;
    document.title = "Fellowship not found | ACK St. Phillips Roadblock";
    return;
  }

  document.title = `${fellowship.title} | ACK St. Phillips Roadblock`;
  const badgeClass = tagColors[fellowship.tag] || "bg-gray-100 text-gray-800";
  const fallback = fellowship.fallbackImage || "/src/assets/images/church.webp";

  detailContainer.innerHTML = `
    <section class="relative min-h-[40vh] flex items-end overflow-hidden">
      <img src="${fellowship.image}" alt="${fellowship.title}"
           class="absolute inset-0 w-full h-full object-cover"
           onerror="this.onerror=null;this.src='${fallback}'">
      <div class="absolute inset-0 bg-gradient-to-t from-ack-purple-dark via-ack-purple/70 to-transparent"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-32 w-full text-white">
        <a href="/src/pages/fellowships.html"
           class="inline-flex items-center gap-2 text-white/80 hover:text-ack-gold text-sm mb-4 transition">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> All fellowships
        </a>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${fellowship.tag}</span>
          <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full">${fellowship.estate}</span>
        </div>
        <h1 class="font-display text-3xl md:text-5xl font-bold">${fellowship.title}</h1>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2">
          <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider">About this group</h2>
          <p class="text-gray-700 mt-3 leading-relaxed text-lg">${fellowship.description}</p>
          <p class="text-gray-600 mt-4 text-sm leading-relaxed">
            Estate fellowships are a cherished part of ACK parish life — bringing Sunday worship into the
            neighbourhood. All baptized members and seekers are welcome. Children may attend with parents.
          </p>

          <div class="mt-8 bg-[#eef1f6] rounded-2xl p-6 border border-gray-200">
            <h3 class="font-semibold text-ack-purple-dark flex items-center gap-2">
              <i class="fa-solid fa-calendar-week text-ack-gold" aria-hidden="true"></i>
              This week's meeting
            </h3>
            <p class="text-gray-700 mt-3 text-sm">
              <strong>${fellowship.day}</strong> at <strong>${fellowship.time}</strong><br>
              ${fellowship.location}
            </p>
            <p class="text-gray-500 text-xs mt-3 italic">
              Exact host home may rotate — confirm with the leader before visiting for the first time.
            </p>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 class="font-semibold text-ack-purple-dark">Meeting details</h2>
            <ul class="mt-4 space-y-4 text-sm text-gray-700">
              <li class="flex gap-3">
                <i class="fa-solid fa-calendar text-ack-gold mt-0.5" aria-hidden="true"></i>
                <span><strong class="text-gray-900">Day</strong><br>${fellowship.day}</span>
              </li>
              <li class="flex gap-3">
                <i class="fa-solid fa-clock text-ack-gold mt-0.5" aria-hidden="true"></i>
                <span><strong class="text-gray-900">Time</strong><br>${fellowship.time}</span>
              </li>
              <li class="flex gap-3">
                <i class="fa-solid fa-location-dot text-ack-gold mt-0.5" aria-hidden="true"></i>
                <span><strong class="text-gray-900">Venue</strong><br>${fellowship.location}</span>
              </li>
              <li class="flex gap-3">
                <i class="fa-solid fa-user text-ack-gold mt-0.5" aria-hidden="true"></i>
                <span><strong class="text-gray-900">Leader</strong><br>${fellowship.leader}</span>
              </li>
              <li class="flex gap-3">
                <i class="fa-solid fa-phone text-ack-gold mt-0.5" aria-hidden="true"></i>
                <span><strong class="text-gray-900">Contact</strong><br>
                  <a href="tel:${fellowship.phone.replace(/\s/g, '')}" class="text-ack-purple hover:text-ack-gold">${fellowship.phone}</a>
                </span>
              </li>
            </ul>
          </div>

          <div class="bg-ack-purple text-white rounded-2xl p-6">
            <h3 class="font-semibold text-ack-gold text-sm uppercase">First time visiting?</h3>
            <p class="text-white/85 text-sm mt-2 leading-relaxed">
              Come to the main Sunday service first, then travel with a member to the estate meeting — or call the leader above.
            </p>
            <a href="/src/pages/index.html#worship-schedule"
               class="block mt-4 text-center bg-ack-gold text-ack-purple-dark py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-300 transition">
              Sunday service times
            </a>
          </div>

          <a href="/src/pages/index.html#contact"
             class="block text-center border-2 border-ack-purple text-ack-purple py-3 rounded-lg font-semibold text-sm hover:bg-ack-purple/5 transition">
            Contact parish office
          </a>
        </aside>
      </div>
    </section>
  `;
}

renderFellowshipsList();
renderFellowshipDetail();
