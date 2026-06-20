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
    activities: [
      "Monthly fellowship meetings and Bible study",
      "Family life seminars and marriage enrichment",
      "Parish maintenance and community service projects",
      "Representation at diocesan KAMA conferences",
    ],
    membership:
      "Open to confirmed Anglican men. Annual registration with the parish KAMA chapter. New members received quarterly.",
    schedule: [
      { day: "Sunday", time: "2:00 – 4:00 PM", activity: "Fellowship & Bible study (after main service)" },
      { day: "Saturday", time: "By notice", activity: "Community work / diocesan events" },
    ],
    scheduleNote: "Extra meetings are announced in church and on the noticeboard.",
    payments: [
      { title: "Annual subscription", amount: "KSh 500", mpesa: "Paybill 000000 · Acc. KAMA", notes: "Per calendar year" },
      { title: "Welfare & benevolence fund", amount: "Any amount", mpesa: "Till 000000", notes: "Supports sick members & bereavement" },
    ],
    leadership: [
      { role: "Chairman", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Secretary", name: "To be announced", phone: "" },
      { role: "Treasurer", name: "To be announced", phone: "" },
    ],
    bring: "Bible, notebook, and membership card if registered.",
    getInvolved: "Speak to the KAMA chairman after Sunday service or contact the parish office on Tuesdays.",
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
    activities: [
      "Prayer and intercession for families and the nation",
      "Parenting and marriage counselling programmes",
      "Visitation of the sick, elderly, and new mothers",
      "Fundraising for parish and diocesan MU projects",
    ],
    membership: "Open to women of the parish — married, single, or widowed. MU badge and prayer book recommended.",
    schedule: [
      { day: "Wednesday", time: "2:00 – 5:00 PM", activity: "Main fellowship, teaching & prayers" },
      { day: "Sunday", time: "After service", activity: "Brief coordination (as announced)" },
    ],
    payments: [
      { title: "MU annual subscription", amount: "KSh 300", mpesa: "Paybill 000000 · Acc. MU", notes: "Includes diocesan levy" },
      { title: "Widows & orphans fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Label: MU Welfare" },
    ],
    leadership: [
      { role: "President", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Vice President", name: "To be announced", phone: "" },
      { role: "Secretary", name: "To be announced", phone: "" },
    ],
    bring: "Bible, MU prayer book (if available), and offering envelope.",
    getInvolved: "Visit on any Wednesday afternoon or ask the MU president after Kiswahili service.",
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
    activities: [
      "Midweek Bible study, prayer, and praise",
      "Youth Sunday service participation",
      "Sports, talent days, and diocesan KAYO rallies",
      "Peer mentorship and school outreach",
    ],
    membership: "Ages 13–35 (flexible). Parent/guardian consent for minors. KAYO T-shirt for events.",
    schedule: [
      { day: "Wednesday", time: "2:00 – 5:00 PM", activity: "Bible study & prayers" },
      { day: "Friday", time: "7:30 – 9:00 PM", activity: "Praise & worship practice (youth team)" },
      { day: "Sunday", time: "10:00 AM – 12:00 PM", activity: "Youth & teens service" },
    ],
    payments: [
      { title: "KAYO registration", amount: "KSh 200", mpesa: "Paybill 000000 · Acc. KAYO", notes: "Per year" },
      { title: "Mission & rally fund", amount: "Voluntary", mpesa: "Till 000000", notes: "For trips & conferences" },
    ],
    leadership: [
      { role: "Coordinator", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Assistant", name: "To be announced", phone: "" },
      { role: "Patron (clergy)", name: "Parish vicar", phone: "" },
    ],
    bring: "Bible, notebook, and pen. Modest dress for services.",
    getInvolved: "Come to Wednesday youth fellowship or speak to the coordinator after Sunday service.",
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
    activities: [
      "Age-graded Bible lessons (Crèche to Teen)",
      "Memory verses, hymns, and craft activities",
      "Children's presentations on special Sundays",
      "Teachers' training and safeguarding workshops",
    ],
    membership: "All children welcome. Parents register children at the parish office for records and pickup security.",
    schedule: [
      { day: "Sunday", time: "10:00 AM – 12:00 PM", activity: "Classes during all main services" },
      { day: "Saturday", time: "By notice", activity: "Teachers' preparation & training" },
    ],
    scheduleNote: "Runs concurrently with English, Kiswahili, and main parish services — children join parents for Holy Communion as appropriate.",
    payments: [
      { title: "Sunday School fund", amount: "KSh 100 / term", mpesa: "Paybill 000000 · Acc. SS", notes: "Books & materials" },
      { title: "Outing & party fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Christmas & Easter events" },
    ],
    leadership: [
      { role: "Superintendent", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Teachers' rep", name: "To be announced", phone: "" },
    ],
    bring: "Children should bring a Bible (age-appropriate). Safe drop-off and pickup required.",
    getInvolved: "Parents: register at the office. Volunteers: safeguarding training required — ask the superintendent.",
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
    activities: [
      "Weekly rehearsal of hymns and anthems",
      "Leading music at Sunday and festival services",
      "Diocesan music workshops and choir exchanges",
    ],
    membership: "Open to members who can commit to regular rehearsal. Basic music reading helpful but not required.",
    schedule: [
      { day: "Wednesday", time: "5:00 – 7:00 PM", activity: "Choir practice" },
      { day: "Friday", time: "5:00 – 7:00 PM", activity: "Additional practice (when announced)" },
      { day: "Sunday", time: "Before services", activity: "Warm-up & service leadership" },
    ],
    payments: [
      { title: "Choir robe & music fund", amount: "KSh 1,000", mpesa: "Paybill 000000 · Acc. Choir", notes: "One-time or annual" },
      { title: "Outreach & transport", amount: "Voluntary", mpesa: "Till 000000", notes: "Diocesan events" },
    ],
    leadership: [
      { role: "Choirmaster", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Deputy", name: "To be announced", phone: "" },
    ],
    bring: "Hymn book, choir robe (if issued), and water bottle.",
    getInvolved: "Attend Wednesday practice or speak to the choirmaster after service.",
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
    activities: [
      "Contemporary praise sets for Sunday services",
      "Musicians and vocalists development",
      "Sound check coordination with vergers",
    ],
    membership: "By audition or invitation from the worship leader. Commitment to rehearsal attendance required.",
    schedule: [
      { day: "Wednesday", time: "5:00 – 7:00 PM", activity: "Praise & worship practice" },
      { day: "Saturday", time: "By notice", activity: "Special service preparation" },
    ],
    payments: [
      { title: "Equipment & music fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Instruments & cables" },
    ],
    leadership: [
      { role: "Worship leader", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Sound coordinator", name: "To be announced", phone: "" },
    ],
    bring: "Own instrument where applicable. Arrive 30 minutes before service for sound check.",
    getInvolved: "Speak to the worship leader after service or attend Wednesday practice.",
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
    activities: [
      "Altar preparation and sanctuary care",
      "Processions, Gospel book, and clergy assistance",
      "Training in Anglican liturgy and rubrics",
      "Coordinating ushers and service flow",
    ],
    membership: "Open to committed lay servants after training. Robe provided by parish.",
    schedule: [
      { day: "Thursday", time: "3:00 – 5:00 PM", activity: "Vergers training & coordination" },
      { day: "Sunday", time: "All services", activity: "On-duty rota" },
    ],
    payments: [
      { title: "Vergers welfare fund", amount: "Voluntary", mpesa: "Till 000000", notes: "Robes & refreshments" },
    ],
    leadership: [
      { role: "Head verger", name: "To be announced", phone: "+254 798 125 596" },
    ],
    bring: "Service roster, alb/robe, and punctuality for briefing before service.",
    getInvolved: "Express interest to the head verger or parish vicar. Training required before serving.",
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
    activities: [
      "Verse-by-verse Bible teaching",
      "Small-group discussion and accountability",
      "Quarterly topical series (marriage, stewardship, etc.)",
    ],
    membership: "Open to all adults. No fee — optional offering for materials.",
    schedule: [
      { day: "Tuesday", time: "6:00 – 8:00 PM", activity: "Main Bible study" },
    ],
    payments: [
      { title: "Study materials", amount: "KSh 150", mpesa: "Paybill 000000 · Acc. Bible Study", notes: "Workbook per series" },
    ],
    leadership: [
      { role: "Coordinator", name: "To be announced", phone: "+254 798 125 596" },
      { role: "Facilitator", name: "Parish clergy", phone: "" },
    ],
    bring: "Bible (ESV or authorized translation), notebook, and pen.",
    getInvolved: "Walk in on Tuesday evening or ask at the parish office.",
  },
];

const typeColors = {
  Men: "bg-blue-100 text-blue-900",
  Women: "bg-pink-100 text-pink-900",
  Youth: "bg-amber-100 text-amber-900",
  Children: "bg-green-100 text-green-800",
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
        <span class="absolute top-4 left-4 ${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${m.type}</span>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-ack-purple-dark">${m.name}</h2>
        <p class="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">${m.description}</p>
        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li><i class="fa-solid fa-calendar text-ack-gold w-4" aria-hidden="true"></i> ${m.meetingDay}</li>
          <li><i class="fa-solid fa-clock text-ack-gold w-4" aria-hidden="true"></i> ${m.time}</li>
        </ul>
        <a href="${PATHS.ministryId(m.id)}" class="inline-flex items-center gap-1 mt-5 text-ack-purple font-semibold text-sm hover:text-ack-gold transition">
          View ministry <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

function renderMinistryDetail() {
  const detailContainer = document.getElementById("ministry-detail");
  if (!detailContainer) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const ministry = ministries.find((m) => m.id === id);

  if (!ministry) {
    detailContainer.innerHTML = renderNotFound({
      title: "Ministry not found",
      backHref: PATHS.ministries,
      backLabel: "All ministries",
    });
    document.title = `Ministry not found | ${PARISH.pageTitleSuffix}`;
    return;
  }

  document.title = `${ministry.name} | ${PARISH.pageTitleSuffix}`;
  const badgeClass = typeColors[ministry.type] || "bg-gray-100 text-gray-800";
  const fallback = ministry.fallbackImage || "/src/assets/images/church.webp";

  const mainContent = `
    <h2 class="text-sm font-semibold text-ack-purple uppercase tracking-wider">About this ministry</h2>
    <p class="text-gray-700 mt-3 leading-relaxed text-lg">${ministry.description}</p>
    <p class="text-gray-600 mt-4 text-sm leading-relaxed">${ministry.membership}</p>
    ${renderListSection("What we do", "hands-holding-heart", ministry.activities)}
    ${renderScheduleSection(ministry.schedule, ministry.scheduleNote)}
    ${renderPaymentsSection(ministry.payments)}
    ${renderLeadershipSection(ministry.leadership)}
    ${renderInfoCards([
      { title: "What to bring", body: ministry.bring, variant: "default" },
      { title: "How to join", body: ministry.getInvolved, variant: "purple" },
    ])}
  `;

  const sidebar = renderDetailSidebar({
    meeting: [
      { icon: "calendar", label: "Day", value: ministry.meetingDay },
      { icon: "clock", label: "Time", value: ministry.time },
      { icon: "location-dot", label: "Venue", value: ministry.location },
      { icon: "user", label: "Lead contact", value: ministry.leader },
    ],
    payments: ministry.payments,
    extraLinks: [
      { href: PATHS.services, label: "Sunday service times", primary: true },
      { href: PATHS.contact, label: "Contact parish office", primary: false },
      { href: PATHS.ministries, label: "← All ministries", primary: false },
    ],
  });

  detailContainer.innerHTML = `
    ${renderDetailHero({
      backHref: PATHS.ministries,
      backLabel: "All ministries",
      badge: `<span class="${badgeClass} text-xs px-3 py-1 rounded-full font-semibold">${ministry.type}</span>`,
      title: ministry.name,
      image: ministry.image,
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

const listContainer = document.getElementById("ministries-container");
if (listContainer) listContainer.innerHTML = ministries.map(renderMinistryCard).join("");
renderMinistryDetail();
