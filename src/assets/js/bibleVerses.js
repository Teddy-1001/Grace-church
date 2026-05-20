const verseElement = document.getElementById('verse-content');
const getVerse = async () => {
    if(!verseElement) return
    try {
        const res = await fetch('https://beta.ourmanna.com/api/v1/get?format=json');
        const data = await res.json();
        console.log(data)
        const verse = data.verse.details.text;
        const reference = data.verse.details.reference;
        verseElement.innerHTML = `
            <p class="text-xl italic text-gray-700 leading-relaxed">
                "${verse}"
            </p>

            <p class="text-sm mt-4 text-blue-700 font-semibold">
                — ${reference}
            </p>
        `;

    } catch (error) {
        console.error(error);
        verseElement.innerHTML = `
            <p class="text-red-500">
                Failed to load verse.
            </p>
        `;
    }
};

getVerse();

const sermons = [
    {
        title: "Walking in Faith",
        description: "Learning to trust God through every season of life.",
        video: "https://www.youtube.com/embed/m6HhDB_3siI",
        tag: "Latest"
    },

    {
        title: "Power of Prayer",
        description: "Discover the importance of prayer in daily living.",
        video: "https://www.youtube.com/embed/CsYcfMRm18U",
        tag: "Trending"
    },

    {
        title: "Victory in Christ",
        description: "Understanding the victory we have through Jesus.",
        video: "https://www.youtube.com/embed/tBwDYCtc004",
        tag: "New"
    },

    {
        title: "Grace and Mercy",
        description: "God’s grace is sufficient for every believer.",
        video: "https://www.youtube.com/embed/TR2YCN1VJoE",
        tag: "Popular"
    },

    {
        title: "Living Holy",
        description: "A call to live a transformed Christian life.",
        video: "https://www.youtube.com/embed/waLoRPBnRZM",
        tag: "Featured"
    }
];

const sermonsContainer = document.getElementById('sermons-container')
const renderSermons = () => {
    sermons.forEach((sermon) => {
        sermonsContainer.innerHTML += `
        <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
        <!-- Video -->
        <div class="relative h-80 overflow-hidden">
        <iframe
            class="w-full h-full"
            src="${sermon.video}"
            title="${sermon.title}"
            frameborder="0"
            allowfullscreen>
          </iframe>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

          <!-- Tag -->
          <span class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full font-medium">
            ${sermon.tag}
          </span>
          </div>

           <!-- Content -->
        <div class="p-6 text-center">

          <h2 class="text-xl font-bold text-gray-900">
            ${sermon.title}
          </h2>

          <p class="text-gray-600 mt-2 text-sm leading-relaxed">
            ${sermon.description}
          </p>

          <a href="${sermon.video}"
            target="_blank"
            class="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 transition">
            Watch Sermon →
          </a>

        </div>

      </div>
        `
    })
};

renderSermons()

