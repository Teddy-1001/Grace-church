const ministries = [
  {
    id: "men-fellowship",
    name: "KAMA (Kenya Anglican Men’s Association)",
    type: "men",
    description:
      "A fellowship for men focused on spiritual growth, leadership, and service in the church and community.",
    meetingDay: "Sunday",
    time: "2:00 PM - 4:00 PM",
    location: "Parish Hall",
    leader: "Men’s Coordinator",
    image: "/src/assets/images/kama"
  },

  {
    id: "mothers-union",
    name: "Mothers’ Union",
    type: "women",
    description:
      "A ministry dedicated to strengthening families through prayer, marriage support, and community outreach.",
    meetingDay: "Wednesday",
    time: "2:00 PM - 5:00 PM",
    location: "Church Hall",
    leader: "MU President",
    image: "/src/assets/images/mothers-union"
  },

  {
    id: "youth-ministry",
    name: "Youth Ministry",
    type: "youth",
    description:
      "Empowering young people spiritually, socially, and mentally through discipleship and mentorship.",
    meetingDay: "Saturday",
    time: "3:00 PM - 6:00 PM",
    location: "Youth Hall",
    leader: "Youth Pastor",
    image: "/src/assets/images/youths"
  },

  {
    id: "sunday-school",
    name: "Sunday School",
    type: "children",
    description:
      "Teaching children the Word of God through interactive Bible study, songs, and activities.",
    meetingDay: "Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Children’s Chapel",
    leader: "Sunday School Superintendent",
    image: "/src/assets/images/sunday-school"
  },

  {
    id: "choir",
    name: "Church Choir",
    type: "worship",
    description:
      "Leading worship through music, hymns, and praise during services and special events.",
    meetingDay: "Friday",
    time: "5:00 PM - 7:00 PM",
    location: "Main Sanctuary",
    leader: "Choir Master",
    image: "/src/assets/images/choir"
  },

  {
    id: "praise-team",
    name: "Praise & Worship Team",
    type: "worship",
    description:
      "A dynamic worship team leading contemporary praise and worship sessions.",
    meetingDay: "Wednesday",
    time: "5:00 PM - 7:00 PM",
    location: "Main Sanctuary",
    leader: "Worship Leader",
    image: "/src/assets/images/praises"
  },

  {
    id: "vergers",
    name: "Church Vergers Ministry",
    type: "service",
    description:
      "Responsible for order, coordination, and smooth running of church services.",
    meetingDay: "Thursday",
    time: "3:00 PM - 5:00 PM",
    location: "Church Office",
    leader: "Head Verger",
    image: "/src/assets/images/vergers.jpg"
  },

  {
    id: "bible-study",
    name: "Bible Study Fellowship",
    type: "spiritual",
    description:
      "Deep Bible study sessions focused on understanding scripture and discipleship.",
    meetingDay: "Tuesday",
    time: "6:00 PM - 8:00 PM",
    location: "Parish Hall",
    leader: "Bible Study Coordinator",
    image: "/src/assets/images/bible-image.jpg"
  }
];

const container = document.getElementById("ministries-container");

function renderMinistries() {
  if (!container) return;

  container.innerHTML = ministries.map(m => `
    <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      <div class="relative h-72 overflow-hidden">
        <img src="${m.image}" class="w-full h-full object-cover group-hover:scale-105 transition" />

        

        <span class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full">
          ${m.type.toUpperCase()}
        </span>
      </div>

      <div class="p-6">

        <h2 class="text-xl font-bold text-gray-900">${m.name}</h2>

        <p class="text-gray-600 text-sm mt-2 leading-relaxed">
          ${m.description}
        </p>

        <div class="mt-4 space-y-2 text-sm text-gray-600">

          <p><i class="fa-solid fa-calendar"></i> ${m.meetingDay}</p>
          <p><i class="fa-solid fa-clock"></i> ${m.time}</p>
          <p><i class="fa-solid fa-location-dot"></i> ${m.location}</p>

        </div>

        <p class="mt-4 text-sm bg-gray-100 px-3 py-1 rounded w-fit">
          <i class="fa-solid fa-user"></i> ${m.leader}
        </p>

        <a href="ministry.html?id=${m.id}"
           class="inline-block mt-5 text-blue-600 font-semibold hover:text-blue-800">
          View Ministry →
        </a>

      </div>

    </div>
  `).join("");
}

renderMinistries();


const ministyContainer = document.getElementById('mini')