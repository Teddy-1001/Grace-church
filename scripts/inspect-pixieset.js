const url = "https://capturepoint.pixieset.com/stphilipshighlights/";

async function inspectGallery() {
  try {
    const response = await fetch(url);

    console.log("Status:", response.status);
    console.log("Final URL:", response.url);

    const html = await response.text();

    // Find image URLs
    const images = [
      ...new Set(
        html.match(
          /https?:\/\/[^"'\\\s]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'\\\s]*)?/gi
        ) || []
      ),
    ];

    // Find JavaScript files
    const scripts = [
      ...new Set(
        [...html.matchAll(/<script[^>]+src=["']([^"']+)/gi)]
          .map(match => match[1])
      ),
    ];

    console.log("\nIMAGE URLS FOUND:");

    images.forEach((image, index) => {
      console.log(`${index + 1}. ${image}`);
    });

    console.log("\nJAVASCRIPT FILES:");

    scripts.forEach((script, index) => {
      console.log(`${index + 1}. ${script}`);
    });

    console.log("\nTotal images:", images.length);
  } catch (error) {
    console.error("Gallery inspection failed:", error);
  }
}

inspectGallery();