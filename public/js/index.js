const slides = document.querySelectorAll('.slide')
let currentSlide = 0
const showSlide = (index) => {
    slides.forEach(slide => {
        slide.classList.remove('opacity-100')
        slide.classList.add('opacity-0')
    })
    slides[index].classList.remove('opacity-0')
    slides[index].classList.add('opacity-100')
}

setInterval(() => {
    currentSlide++
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
    showSlide(currentSlide)
}, 97000);


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


