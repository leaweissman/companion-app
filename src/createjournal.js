/*const lightstar = document.querySelectorAll('.lightstars')

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

*/



/*const lightstar1 = document.querySelector('.lightstars1')

lightstar1.addEventListener('click', () => {
    lightstar5.classList.remove('filledstars')
    lightstar4.classList.remove('filledstars')
    lightstar3.classList.remove('filledstars')
    lightstar2.classList.remove('filledstars')
    lightstar1.classList.add('filledstars')

})

const lightstar2 = document.querySelector('.lightstars2')

lightstar2.addEventListener('click', () => {
    lightstar5.classList.remove('filledstars')
    lightstar4.classList.remove('filledstars')
    lightstar3.classList.remove('filledstars')
    lightstar2.classList.add('filledstars')
    lightstar1.classList.add('filledstars')
})

const lightstar3 = document.querySelector('.lightstars3')

lightstar3.addEventListener('click', () => {
    lightstar5.classList.remove('filledstars')
    lightstar4.classList.remove('filledstars')
    lightstar3.classList.add('filledstars')
    lightstar2.classList.add('filledstars')
    lightstar1.classList.add('filledstars')
})

const lightstar4 = document.querySelector('.lightstars4')

lightstar4.addEventListener('click', () => {
    lightstar5.classList.remove('filledstars')
    lightstar4.classList.add('filledstars')
    lightstar3.classList.add('filledstars')
    lightstar2.classList.add('filledstars')
    lightstar1.classList.add('filledstars')
})

const lightstar5 = document.querySelector('.lightstars5')

lightstar5.addEventListener('click', () => {
    lightstar5.classList.toggle('filledstars')
    lightstar4.classList.add('filledstars')
    lightstar3.classList.add('filledstars')
    lightstar2.classList.add('filledstars')
    lightstar1.classList.add('filledstars')
})*/




const lightstars = document.querySelectorAll('.journal__stars img')

lightstars.forEach((lightstar) => {
    lightstar.addEventListener('click', (el) => {
        const indexofclickedstars = [].indexOf.call(lightstars, el.target);


        for (let i = indexofclickedstars; i <= lightstars.length - 1; i++) {
            lightstars[i].classList.remove('filledstars');
        }

        for (let i = 0; i <= indexofclickedstars; i++) {
            lightstars[i].classList.add('filledstars');
        }

    })
})



const lightrectangles = document.querySelectorAll('.journal__box img')

lightrectangles.forEach((rectangle) => {
    rectangle.addEventListener('click', (el) => {
        const indexofclickedrectangle = [].indexOf.call(lightrectangles, el.target);

        for (let i = indexofclickedrectangle; i <= lightrectangles.length - 1; i++) {
            lightrectangles[i].classList.remove('filledrectangles');


            for (let i = 0; i <= indexofclickedrectangle; i++) {
                lightrectangles[i].classList.add('filledrectangles');

            }
        }

    })

})