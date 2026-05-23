const ministries = [
  {
    id: "men-fellowship",
    name: "KAMA (Kenya Anglican Men's Association)",
    type: "Men",
    description:
      "The men's guild of the Anglican Church of Kenya — focused on spiritual growth, leadership, family responsibility, and service in church and community.",
    meetingDay: "Sunday",
    time: "2:00 PM – 4:00 PM",
    location: "Parish Hall",
    leader: "KAMA Chairman",
    image: "/src/assets/images/kama",
    fallbackImage: "/src/assets/images/church.webp",
  },
  {
    id: "mothers-union",
    name: "Mothers' Union",
    type: "Women",
    description:
      "A worldwide Anglican society strengthening families through prayer, marriage enrichment, parenting support, and community outreach.",
    meetingDay: "Wednesday",
    time: "2:00 PM – 5:00 PM",
    location: "Church Hall",
    leader: "MU President",
    image: "/src/assets/images/mothers-union",
    fallbackImage: "/src/assets/images/man-reads-bible-male-hands-with-bible-closeup.webp",
  },
  {
    id: "youth-ministry",
    name: "KAYO (Kenya Anglican Youth Organisation)",
    type: "Youth",
    description:
      "The official youth arm of ACK — discipleship, mentorship, Bible study, and fellowship for young people in the parish.",
    meetingDay: "Wednesday",
    time: "2:00 PM – 5:00 PM",
    location: "Youth Hall",
    leader: "KAYO Coordinator",
    image: "/src/assets/images/youths",
    fallbackImage: "/src/assets/images/2019-06-02.jpg",
  },
  {
    id: "sunday-school",
    name: "Sunday School",
    type: "Children",
    description:
      "Teaching children the Word of God through Bible stories, songs, memory verses, and activities during Sunday worship.",
    meetingDay: "Sunday",
    time: "10:00 AM – 12:00 PM",
    location: "Children's Chapel",
    leader: "Sunday School Superintendent",
    image: "/src/assets/images/sunday-school",
    fallbackImage: "/src/assets/images/bible-image.jpg",
  },
  {
    id: "choir",
    name: "Parish Choir",
    type: "Worship",
    description:
      "Leading congregational worship through hymns, anthems, and sacred music during Sunday services and special occasions.",
    meetingDay: "Wednesday",
    time: "5:00 PM – 7:00 PM",
    location: "Main Sanctuary",
    leader: "Choirmaster",
    image: "/src/assets/images/choir",
    fallbackImage: "/src/assets/images/church.webp",
  },
  {
    id: "praise-team",
    name: "Praise & Worship Team",
    type: "Worship",
    description:
      "A worship team leading praise and worship during services and rehearsals for a spirit-filled atmosphere of adoration.",
    meetingDay: "Wednesday",
    time: "5:00 PM – 7:00 PM",
    location: "Main Sanctuary",
    leader: "Worship Leader",
    image: "/src/assets/images/praises",
    fallbackImage: "/src/assets/images/sermon.webp",
  },
  {
    id: "vergers",
    name: "Church Vergers",
    type: "Service",
    description:
      "Serving at the altar and in the sanctuary — coordinating liturgy, processions, and the orderly conduct of Anglican worship.",
    meetingDay: "Thursday",
    time: "3:00 PM – 5:00 PM",
    location: "Parish Office",
    leader: "Head Verger",
    image: "/src/assets/images/church.webp",
    fallbackImage: "/src/assets/images/church.webp",
  },
  {
    id: "bible-study",
    name: "Bible Study Fellowship",
    type: "Discipleship",
    description:
      "In-depth study of Scripture for adults seeking to grow in knowledge of God's Word and apply it in daily life.",
    meetingDay: "Tuesday",
    time: "6:00 PM – 8:00 PM",
    location: "Parish Hall",
    leader: "Bible Study Coordinator",
    image: "/src/assets/images/bible-image.jpg",
    fallbackImage: "/src/assets/images/bible-image.jpg",
  },
];

const typeColors = {
  Men: "bg-blue-100 text-blue-900",
  Women: "bg-pink-100 text-pink-900",
  Youth: "bg-amber-100 text-amber-900",
  Children: "bg-green-100 text-green-900",
  Worship: "bg-purple-100 text-ack-purple",
  Service: "bg-gray-100 text-gray-800",
  Discipleship: "bg-ack-purple/10 text-ack-purple",
};

function ministryImageTag(m) {
  const fallback = m.fallbackImage || "/src/assets/images/church.webp";
  return `<img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.onerror=null;this.src='${fallback}'" loading="lazy">`;
}

function renderMinistryCard(m) {
  const badgeClass = typeColors[m.type] || "bg-gray-100 text-gray-800";
  return `
    <article class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition duration-300">
      <div class="relative h-56 overflow-hidden bg-ack-purple/10">
        ${ministryImageTag(m)}
        <span class="absolute top-4 left-4 ${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">
          ${m.type}
        </span>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-ack-purple-dark">${m.name}</h2>
        <p class="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">${m.description}</p>
        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li><i class="fa-solid fa-calendar text-ack-gold w-4" aria-hidden="true"></i> ${m.meetingDay}</li>
          <li><i class="fa-solid fa-clock text-ack-gold w-4" aria-hidden="true"></i> ${m.time}</li>
          <li><i class="fa-solid fa-location-dot text-ack-gold w-4" aria-hidden="true"></i> ${m.location}</li>
        </ul>
        <p class="mt-4 text-xs bg-[#eef1f6] text-ack-purple px-3 py-2 rounded-lg inline-flex items-center gap-2">
          <i class="fa-solid fa-user" aria-hidden="true"></i> ${m.leader}
        </p>
        <a href="ministry.html?id=${m.id}"
           class="inline-flex items-center gap-1 mt-5 text-ack-purple font-semibold text-sm hover:text-ack-gold transition">
          View ministry <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

const listContainer = document.getElementById("ministries-container");

function renderMinistriesList() {
  if (!listContainer) return;
  listContainer.innerHTML = ministries.map(renderMinistryCard).join("");
}

function renderMinistryDetail() {
  const detailContainer = document.getElementById("ministry-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const ministry = ministries.find((m) => m.id === id);

  if (!ministry) {
    detailContainer.innerHTML = `
      <div class="max-w-2xl mx-auto px-6 py-24 text-center">
        <i class="fa-solid fa-circle-exclamation text-4xl text-ack-gold" aria-hidden="true"></i>
        <h1 class="font-display text-2xl font-bold text-ack-purple-dark mt-4">Ministry not found</h1>
        <p class="text-gray-600 mt-2">The ministry you are looking for does not exist or may have been moved.</p>
        <a href="/src/pages/ministries.html"
           class="inline-block mt-6 bg-ack-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-ack-purple-dark transition">
          Back to all ministries
        </a>
      </div>
    `;
    document.title = "Ministry not found | ACK St. Phillips Roadblock";
    return;
  }

  document.title = `${ministry.name} | ACK St. Phillips Roadblock`;
  const badgeClass = typeColors[ministry.type] || "bg-gray-100 text-gray-800";
  const fallback = ministry.fallbackImage || "/src/assets/images/church.webp";

  detailContainer.innerHTML = `
    <section class="relative min-h-[40vh] flex items-end overflow-hidden">
      <img src="${ministry.image}" alt="${ministry.name}"
           class="absolute inset-0 w-full h-full object-cover"
           onerror="this.onerror=null;this.src='${fallback}'">
      <div class="absolute inset-0 bg-gradient-to-t from-ack-purple-dark via-ack-purple/70 to-transparent"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-32 w-full text-white">
        <a href="/src/pages/ministries.html"
           class="inline-flex items-center gap-2 text-white/80 hover:text-ack-gold text-sm mb-4 transition">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> All ministries
        </a>
        <span class="${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${ministry.type}</span>
        <h1 class="font-display text-3xl md:text-5xl font-bold mt-3">${ministry.name}</h1>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2">
          <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider">About this ministry</h2>
          <p class="text-gray-700 mt-3 leading-relaxed text-lg">${ministry.description}</p>
          <p class="text-gray-600 mt-4 text-sm leading-relaxed">
            This guild is part of the Anglican Church of Kenya's parish life at St. Phillips Roadblock. New members
            are always welcome — speak to the leader after Sunday service or contact the parish office.
          </p>
        </div>
        <aside class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-fit">
          <h2 class="font-semibold text-ack-purple-dark">Meeting details</h2>
          <ul class="mt-4 space-y-4 text-sm text-gray-700">
            <li class="flex gap-3">
              <i class="fa-solid fa-calendar text-ack-gold mt-0.5" aria-hidden="true"></i>
              <span><strong class="text-gray-900">Day</strong><br>${ministry.meetingDay}</span>
            </li>
            <li class="flex gap-3">
              <i class="fa-solid fa-clock text-ack-gold mt-0.5" aria-hidden="true"></i>
              <span><strong class="text-gray-900">Time</strong><br>${ministry.time}</span>
            </li>
            <li class="flex gap-3">
              <i class="fa-solid fa-location-dot text-ack-gold mt-0.5" aria-hidden="true"></i>
              <span><strong class="text-gray-900">Venue</strong><br>${ministry.location}</span>
            </li>
            <li class="flex gap-3">
              <i class="fa-solid fa-user text-ack-gold mt-0.5" aria-hidden="true"></i>
              <span><strong class="text-gray-900">Leader</strong><br>${ministry.leader}</span>
            </li>
          </ul>
          <a href="/src/pages/index.html#contact"
             class="block mt-6 text-center bg-ack-purple text-white py-3 rounded-lg font-semibold hover:bg-ack-purple-dark transition">
            Contact parish office
          </a>
        </aside>
      </div>
    </section>
  `;
}

renderMinistriesList();
renderMinistryDetail();
