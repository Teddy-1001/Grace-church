const tabButtons = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabButtons.forEach(button => {
    button.addEventListener('click', () => {

        const target = button.dataset.tab

        // Hide all content
        tabContents.forEach(content => {
            content.classList.add('hidden')
        })

        // Show selected content
        document.getElementById(target).classList.remove('hidden')

        // Reset all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white')
            btn.classList.add('bg-gray-200', 'text-gray-700')
        })

        // Active button
        button.classList.remove('bg-gray-200', 'text-gray-700')
        button.classList.add('bg-blue-600', 'text-white')
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

