const lightstar = document.querySelectorAll('.lightstars')

lightstar.forEach((starwurst) => {
    starwurst.addEventListener('click', () => {
        starwurst.classList.toggle('filledstars');
    })
})

const lightrectangle = document.querySelectorAll('.lightrectangles')

lightrectangle.forEach((rectanglewurst) => {
    rectanglewurst.addEventListener('click', () => {
        rectanglewurst.classList.toggle('filledrectangles')
    })
})