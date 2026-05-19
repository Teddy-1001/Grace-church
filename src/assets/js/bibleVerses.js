const verseElement = document.getElementById('verse-content');
const getVerse = async () => {
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