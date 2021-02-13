
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


/* Stars & Rectangles filling by click */


const lightstars = document.querySelectorAll('.journal__stars img')

lightstars.forEach((lightstar) => {
    lightstar.addEventListener('click', (el) => {
        const indexofclickedstars = [].indexOf.call(lightstars, el.target);


        for (let i = 0; i <= indexofclickedstars; i++) {
            lightstars[i].classList.add('filledstars');
        }

        for (let i = indexofclickedstars + 1; i <= lightstars.length - 1; i++) {
            lightstars[i].classList.remove('filledstars');
        }


    })
})


const lightrectangles = document.querySelectorAll('.journal__box img')

lightrectangles.forEach((rectangle) => {
    rectangle.addEventListener('click', (el) => {
        const indexofclickedrectangle = [].indexOf.call(lightrectangles, el.target);


        for (let i = 0; i <= indexofclickedrectangle; i++) {
            lightrectangles[i].classList.add('filledrectangles');

        }

        for (let i = indexofclickedrectangle + 1; i <= lightrectangles.length - 1; i++) {
            lightrectangles[i].classList.remove('filledrectangles');
        }

    })

})


/*Local Storage*/

let journalEntryListMotto = JSON.parse(localStorage.getItem('entryItemMotto')) || [];
console.log(journalEntryListMotto)

let journalEntryListNotes = JSON.parse(localStorage.getItem('entryItemNotes')) || [];
console.log(journalEntryListNotes)

const form = document.querySelector('form')
const saveButton = document.querySelector('.button__orange')


const inputFieldMotto = document.querySelector('.form__motto')
const inputFieldNotes = document.querySelector('.form__notes')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    journalEntryListMotto.push(inputFieldMotto.value)
    localStorage.setItem('entryItemMotto', JSON.stringify(journalEntryListMotto));

    journalEntryListNotes.push(inputFieldNotes.value)
    localStorage.setItem('entryItemNotes', JSON.stringify(journalEntryListNotes));


    inputFieldMotto.value = '';
    inputFieldNotes.value = '';
})



/*Local Storage mit ausgelagerten Functions


let journalEntryListMotto = loadToLocalStorage('entryItemMotto') || [];
console.log(journalEntryListMotto)

let journalEntryListNotes = loadToLocalStorage('entryItemNotes') || [];
console.log(journalEntryListNotes)


function saveToLocalStorage(keyMotto, valueMotto, keyNotes, valueNotes) {
    localStorage.setItem(keyMotto, JSON.stringify(valueMotto))
    localStorage.setItem(keyNotes, JSON.stringify(valueNotes))
}


function loadToLocalStorage(key) {
    const localString = localStorage.getItem(key)
    const originValue = JSON.parse(localString)
    return originValue
}

function addMottoNotes(motto, notes) {
    journalEntryListMotto.push(motto)
    journalEntryListNotes.push(notes)
}


form.addEventListener('submit', (event) => {
    event.preventDefault()

    addMottoNotes(inputFieldMotto.value, inputFieldNotes.value)

    saveToLocalStorage('entryItemMotto', journalEntryListMotto, 'entryItemNotes', journalEntryListNotes)

    inputFieldMotto.value = '';
    inputFieldNotes.value = '';
})*/


/* Post request */

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){

    event.preventDefault()

    const inputMotto = form.motto /*html attribute in textarea*/
    const inputNotes = form.notes /*html attribute in textarea*/

    postMottoNotes(inputMotto.value, inputNotes.value)

    form.reset()
    inputMotto.focus
    inputNotes.focus
}

function postMottoNotes(motto, notes) {
    const newMottoNotes = {rating: 4, comprehension: 8, motto, notes
    }

    post('https://muc-2020-w1-student-api.vercel.app/api/journals', newMottoNotes)
}

function post(url, newEntryMottoNotes){
   return fetch (url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newEntryMottoNotes)
    })
    .then(result => result.json())
    .then(data => console.log(data))
}



  