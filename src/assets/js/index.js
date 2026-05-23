const tabButtons = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabButtons.forEach(button => {
    button.addEventListener('click', () => {

        const target = button.dataset.tab

        tabContents.forEach(content => {
            content.classList.add('hidden')
        })

        const panel = document.getElementById(target)
        if (panel) panel.classList.remove('hidden')

        tabButtons.forEach(btn => {
            btn.classList.remove('bg-ack-purple', 'text-white', 'shadow-md')
            btn.classList.add('bg-white', 'border', 'border-gray-200', 'text-gray-700')
            btn.setAttribute('aria-selected', 'false')
        })

        button.classList.remove('bg-white', 'border-gray-200', 'text-gray-700')
        button.classList.add('bg-ack-purple', 'text-white', 'shadow-md')
        button.setAttribute('aria-selected', 'true')
    })
})

//fetch footer
fetch('/src/components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data
    })
    .catch(err => console.error('Fooder load error', err)
    );

//fetch header
fetch('/src/components/header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
        //wait for dom update
        setTimeout(() => {
            initHeader()
        }, 0);
    })
    .catch(err => console.error('Header load error', err));

//mobile nav bar
function initHeader() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !mobileMenu) {
        console.log("Header elements not found");
        return;
    }

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
}

/** Parish location — used for map, directions, Bolt Food & Wasili links */
const PARISH_LOCATION = {
    lat: 0.549954,
    lng: 35.244222,
    name: 'ACK St. Phillips Roadblock',
    addressLine: 'Near Eldoret–Nakuru Highway, Roadblock estate, Eldoret, Kenya',
    get fullText() {
        return `${this.name}\n${this.addressLine}\nhttps://maps.google.com/?q=${this.lat},${this.lng}`;
    },
    get mapsQuery() {
        return encodeURIComponent(`${this.name}, ${this.addressLine}`);
    },
    get geoUri() {
        return `geo:${this.lat},${this.lng}?q=${this.lat},${this.lng}(${encodeURIComponent(this.name)})`;
    },
};

function initDeliveryLinks() {
    const copyBtn = document.getElementById('copy-parish-location');
    const copyLabel = document.getElementById('copy-parish-label');
    const wasiliLink = document.getElementById('wasili-ride-link');
    const boltLink = document.getElementById('bolt-food-link');

    if (wasiliLink) {
        wasiliLink.href = PARISH_LOCATION.geoUri;
        wasiliLink.title = `Open maps / ride apps with destination: ${PARISH_LOCATION.name}`;
    }

    if (boltLink) {
        boltLink.title = 'Open Bolt Food — paste the copied parish address as your delivery location';
    }

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
        const text = PARISH_LOCATION.fullText;
        try {
            await navigator.clipboard.writeText(text);
            if (copyLabel) {
                const original = copyLabel.textContent;
                copyLabel.textContent = 'Copied!';
                setTimeout(() => {
                    copyLabel.textContent = original;
                }, 2000);
            }
        } catch {
            window.prompt('Copy this address for Bolt Food or Wasili:', text);
        }
    });
}

initDeliveryLinks();

