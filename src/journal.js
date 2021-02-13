const journalEntriesList = document.querySelector('main')

fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then(result => result.json())
    .then(journalEntries => {
        const allJournalEntries = journalEntries.map((journalEntries, index) => renderJournalEntries(journalEntries, index))
        const ratingfun = journalEntries.map((entry, index) => getRating(entry, index))

        /*const comprehensionfun = journalEntries.map((entry, journalEntry.id) => getComprehension(entry, journalEntry.id))*/
    })

    .catch((error) => console.log(error.message))


function getRating(ratingOfJournalEntry, index) {
    const rating = ratingOfJournalEntry.rating
    if (rating == 1) {
        console.log(rating)
        const star = createStar()
        const starContainer = document.getElementById(index)
        starContainer.append(star)
    }
    if (rating == 2) {
        console.log(rating)
        const star = createStar()
        const starContainer = document.getElementById(index)
        const star2 = createStar()
        starContainer.append(star)
        starContainer.append(star2)
    }
    if (rating == 3) {
        console.log(rating)
        const star = createStar()
        const starContainer = document.getElementById(index)
        const star2 = createStar()
        const star3 = createStar()
        starContainer.append(star)
        starContainer.append(star2)
        starContainer.append(star3)
    }
    if (rating == 4) {
        console.log(rating)
        const star = createStar()
        const starContainer = document.getElementById(index)
        const star2 = createStar()
        const star3 = createStar()
        const star4 = createStar()
        starContainer.append(star)
        starContainer.append(star2)
        starContainer.append(star3)
        starContainer.append(star4)
    }
    if (rating == 5) {
        console.log(rating)
        const star = createStar()
        const starContainer = document.getElementById(index)
        const star2 = createStar()
        const star3 = createStar()
        const star4 = createStar()
        const star5 = createStar()
        starContainer.append(star)
        starContainer.append(star2)
        starContainer.append(star3)
        starContainer.append(star4)
        starContainer.append(star5)
    }
}

function createStar() {
    const star = document.createElement('img')
    star.classList.add('filledstars')
    return star
}




/*function getComprehension(comprehensionOfJournalEntry, journalEntry.id) {
    const comprehension = comprehensionOfJournalEntry.comprehension
    if (comprehension == 6) {
        console.log(comprehension)
        const rectangleContainer = document.getElementById(journalEntry.id)
        const rectangle = createRectangle()
        const rectangle2 = createRectangle()
        const rectangle3 = createRectangle()
        const rectangle4 = createRectangle()
        const rectangle5 = createRectangle()
        const rectangle6 = createRectangle()
        rectangleContainer.append(rectangel)
        rectangleContainer.append(rectangle2)
        rectangleContainer.append(rectangle3)
        rectangleContainer.append(rectangle4)
        rectangleContainer.append(rectangle5)
        rectangleContainer.append(rectangle6)
    }
}


function createRectangle() {
    const rectangle = document.createElement('img')
    rectangle.classList.add('filledrectangles')
    return rectangle
}*/




function renderJournalEntries(journalEntry, index) {
    const box = document.createElement('section')
    box.classList.add('journal', 'bl-shadow', 'radius__bottom', 'radius__top')

    box.innerHTML = `<h5 class="journal__yesterday">YESTERDAY</h5>
<h6>Rating:</h6>
<div class="journal__stars" id=${index}>
</div>
<h6>Comprehension:</h6>
<div class="journal__box">
<img class="filledrectangles" alt="rectangle" id=${journalEntry.id}></div>
<h6 class="journal__motto">Motto:</h6>
<p class="journal__motto citylife">${journalEntry.motto}</p>
<h6>Notes:</h6>
<p class="journal__notes notes">${journalEntry.notes}</p>`

    journalEntriesList.appendChild(box)

}