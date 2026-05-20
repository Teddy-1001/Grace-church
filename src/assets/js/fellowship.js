// render fellowships

const fellowships = [
    {
        id: "kikuyu",
        title: "Kikuyu Fellowship",
        location: "Mr Jame's Home",
        day: 'Sunday',
        time: '2:30PM',
        image: "/src/assets/images/church.webp",
        tag: "Youth",
        link: "#",
        leader: 'Rev Kogo'
    },

    {
        id: "kariobangi",
        title: "Kariobangi Fellowship",
        location: "Kamau's Home",
        day: 'Sunday',
        time: '2:30PM',
        image: "/src/assets/images/church.webp",
        tag: "Men",
        link: "#",
        leader: 'Rev Kogo'
    },

    {   
        id: "umoja",
        title: "Umoja Fellowship",
        location: "Conference Hall",
        day: 'Sunday',
        time: '2:30PM',
        image: "/src/assets/images/church.webp",
        tag: "Women",
        link: "#",
        leader: 'Rev Kogo'
    }
];

const fellowshipContainer = document.getElementById('fellowship-container');

const renderFellowships = () => {

    if (!fellowshipContainer) return

    let output = '';

    fellowships.forEach((fellowship) => {

        output += `
        <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

            <!-- Image -->
            <div class="relative h-80 overflow-hidden">

                <img 
                    src="${fellowship.image}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    alt="${fellowship.title}"
                >

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

                <!-- Tag -->
                <span class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full font-medium">
                    ${fellowship.title}
                </span>

            </div>

            <!-- Content -->
            <div class="p-6 text-left">

                <h2 class="text-xl font-bold text-gray-900">
                    ${fellowship.title}
                </h2>

                <div class=''>
                
                <p class="text-gray-600 mt-2 text-sm leading-relaxed">
                    <i class="fa-solid fa-location-dot"></i>
                    ${fellowship.location}
                </p>
                <p class="text-gray-600 mt-2 text-sm leading-relaxed">
                    <i class="fa-solid fa-calendar"></i>
                    ${fellowship.day}
                </p>
                <p class="text-gray-600 mt-2 text-sm leading-relaxed pb-4">
                    <i class="fa-solid fa-clock"></i>
                    ${fellowship.time}
                </p>
                </div>
                <hr class="text-gray-300 py-2" />
                 <p class="text-gray-600 mt-2 text-sm leading-relaxed border rounded-2xl bg-gray-200 px-1 w-fit">
                    <i class="fa-solid fa-user-check"></i>
                    ${fellowship.leader}
                </p>

                

                <a 
                    href="fellowship.html?id=${fellowship.id}" 
                    target="_parent"
                    class="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                    Learn More →
                </a>

            </div>

        </div>
        `;
    });

    fellowshipContainer.innerHTML = output;
};

renderFellowships();

const detailContainer = document.getElementById("fellowship-detail");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const fellowshipDetail = fellowships.find(f => f.id === id);

if (!detailContainer) {
  console.error("Missing fellowship-detail container");
}

if (fellowshipDetail && detailContainer) {
  detailContainer.innerHTML = `
    <div class="max-w-7xl mx-auto p-6">

    <div class="w-full flex flex-col md:flex-row gap-2">
        <img src="${fellowshipDetail.image}" class="w-full h-96 object-cover rounded-xl" />
        <div class="w-full bg-gray-300 rounded-2xl">
        <div class="bg-orange-500 text-gray-200 rounded-t-2xl p-3">
            <h2 class="flex gap-3 items-center">
                <i class="fa-solid fa-calendar"></i> 
                This weeks meeting
            </h2>
        </div>
        
        </div>
    </div>
      <h1 class="text-4xl font-bold mt-6">
        ${fellowshipDetail.title}
      </h1>

      <p class="text-gray-600 mt-2">
        ${fellowshipDetail.location}
      </p>

      <p class="mt-4 text-gray-700 leading-relaxed">
        ${fellowshipDetail.description}
      </p>

    </div>
  `;
} else {
  detailContainer.innerHTML = `
    <p class="text-center text-red-500">Fellowship not found</p>
  `;
}
