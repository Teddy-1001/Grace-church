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
    });
}

