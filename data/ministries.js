export const ministries = [
  {
    id: "men-fellowship",
    name: "KAMA (Kenya Anglican Men's Association)",
    type: "Men",
    badgeClass: "bg-blue-100 text-blue-900",
    description:
      "The men's guild of the Anglican Church of Kenya — focused on spiritual growth, leadership, family responsibility, and service in church and community.",
    meetingDay: "Sunday",

    time: "2:00 PM – 4:00 PM",
    location: "Parish Hall",
    leader: "KAMA Chairman",
    image: "/images/DSC_0881.JPG",
    fallbackImage: "/images/church.webp",
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
    badgeClass: "bg-pink-100 text-pink-900",
    description:
      "A worldwide Anglican society strengthening families through prayer, marriage enrichment, parenting support, and community outreach.",
    meetingDay: "Wednesday",
    time: "2:00 PM – 5:00 PM",
    location: "Church Hall",
    leader: "MU President",
    image: "/images/DSC_0880.JPG",
    fallbackImage: "/images/man-reads-bible-male-hands-with-bible-closeup.webp",
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
    badgeClass: "bg-amber-100 text-amber-900",
    description:
      "The official youth arm of ACK — discipleship, mentorship, Bible study, and fellowship for young people in the parish.",
    meetingDay: "Wednesday",
    time: "2:00 PM – 5:00 PM",
    location: "Youth Hall",
    leader: "KAYO Coordinator",
    image: "/images/youths",
    fallbackImage: "/images/2019-06-02.jpg",
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
    badgeClass: "bg-green-100 text-green-800",
    description:
      "Teaching children the Word of God through Bible stories, songs, memory verses, and activities during Sunday worship.",
    meetingDay: "Sunday",
    time: "10:00 AM – 12:00 PM",
    location: "Children's Chapel",
    leader: "Sunday School Superintendent",
    image: "/images/DSC_0914.JPG",
    fallbackImage: "/images/bible-image.jpg",
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
    badgeClass: "bg-purple-100 text-ack-purple",
    description:
      "Leading congregational worship through hymns, anthems, and sacred music during Sunday services and special occasions.",
    meetingDay: "Wednesday",
    time: "5:00 PM – 7:00 PM",
    location: "Main Sanctuary",
    leader: "Choirmaster",
    image: "/images/DSC_0895.JPG",
    fallbackImage: "/images/church.webp",
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
    id: "bible-study",
    name: "Bible Study Fellowship",
    type: "Discipleship",
     badgeClass: "bg-ack-purple/10 text-ack-purple",
    description:
      "In-depth study of Scripture for adults seeking to grow in knowledge of God's Word and apply it in daily life.",
    meetingDay: "Tuesday",
    time: "6:00 PM – 8:00 PM",
    location: "Parish Hall",
    leader: "Bible Study Coordinator",
    image: "/images/bible-image.jpg",
    fallbackImage: "/images/bible-image.jpg",
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

export const PARISH_CONTACT = {
  phone: "+254 798 125 596",
  email: "info@stphillips.church.org",
  officeHours: "Tuesdays, 8:00 AM – 5:00 PM",
};