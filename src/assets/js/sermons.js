const sermons = [
  {
    title: "Walking in Faith",
    description: "Learning to trust God through every season of life.",
    preacher: "Parish Clergy",
    date: "Sunday Service",
    video: "https://www.youtube.com/embed/m6HhDB_3siI",
    tag: "Latest",
  },
  {
    title: "The Power of Prayer",
    description: "Discover the importance of prayer in daily Christian living.",
    preacher: "Parish Clergy",
    date: "Sunday Service",
    video: "https://www.youtube.com/embed/CsYcfMRm18U",
    tag: "Teaching",
  },
  {
    title: "Victory in Christ",
    description: "Understanding the victory we have through Jesus Christ.",
    preacher: "Guest Speaker",
    date: "Special Service",
    video: "https://www.youtube.com/embed/tBwDYCtc004",
    tag: "Featured",
  },
  {
    title: "Grace and Mercy",
    description: "God's grace is sufficient for every believer.",
    preacher: "Parish Clergy",
    date: "Sunday Service",
    video: "https://www.youtube.com/embed/TR2YCN1VJoE",
    tag: "Popular",
  },
  {
    title: "Living a Holy Life",
    description: "A call to live a transformed life in Christ.",
    preacher: "Parish Clergy",
    date: "Sunday Service",
    video: "https://www.youtube.com/embed/waLoRPBnRZM",
    tag: "Sermon",
  },
  {
    title: "Hold Fast Your Confession",
    description: "Reflection on our parish theme from Hebrews 4:14.",
    preacher: "Parish Clergy",
    date: "Theme of the Year",
    video: "https://www.youtube.com/embed/m6HhDB_3siI",
    tag: "Theme",
  },
];

const sermonsContainer = document.getElementById("sermons-container");

function youtubeWatchUrl(embedUrl) {
  const match = embedUrl.match(/embed\/([^?&]+)/);
  return match ? `https://www.youtube.com/watch?v=${match[1]}` : embedUrl;
}

function renderSermons() {
  if (!sermonsContainer) return;

  sermonsContainer.innerHTML = sermons
    .map(
      (sermon) => `
    <article class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition duration-300">
      <div class="relative aspect-video overflow-hidden bg-gray-900">
        <iframe
          class="w-full h-full"
          src="${sermon.video}"
          title="${sermon.title} — ACK St. Phillips Roadblock"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="bg-ack-purple/10 text-ack-purple text-xs px-3 py-1 rounded-full font-semibold">
            ${sermon.tag}
          </span>
          <span class="text-xs text-gray-500">${sermon.date}</span>
        </div>
        <h2 class="text-lg font-bold text-ack-purple-dark mt-3">${sermon.title}</h2>
        <p class="text-gray-600 mt-2 text-sm leading-relaxed">${sermon.description}</p>
        <p class="text-xs text-gray-500 mt-3">
          <i class="fa-solid fa-user text-ack-gold mr-1" aria-hidden="true"></i>${sermon.preacher}
        </p>
        <a href="${youtubeWatchUrl(sermon.video)}"
           target="_blank"
           rel="noopener noreferrer"
           class="inline-flex items-center gap-1 mt-4 text-ack-purple font-semibold text-sm hover:text-ack-gold transition">
          Watch on YouTube <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

renderSermons();
