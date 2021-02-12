const journalEntriesList = document.querySelector('main')

fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then(result => result.json())
    .then(journalEntries => {
        journalEntries.slice().map(renderJournalEntries)
    })
    .catch((error) => console.log(error.message))

function renderJournalEntries(journalEntry) {
    const box = document.createElement('section')
    box.classList.add('journal', 'bl-shadow', 'radius__bottom', 'radius__top')

    box.innerHTML = `<h5 class="journal__yesterday">YESTERDAY</h5>
<h6>Rating:</h6>
<div class="journal__stars">
    <img src="images/Star@2x.svg" alt="star">
</div>
<h6>Comprehension:</h6>
<div class="journal__box">
<img src="images/Rectangle@2x.svg" alt="rectangle">
                            
</div>
<h6 class="journal__motto">Motto:</h6>
<p class="journal__motto citylife">${journalEntry.motto}</p>
<h6>Notes:</h6>
<p class="journal__notes notes">${journalEntry.notes}</p>`

    journalEntriesList.appendChild(box)

}






/*<section class="journal bl-shadow radius__bottom radius__top">
    <h5 class="journal__yesterday">YESTERDAY</h5>
    <h6>Rating:</h6>
    <div class="journal__stars">
        <img src="images/Star@2x.svg" alt="star">
            <img src="images/Star@2x.svg" alt="star">
                <img src="images/Star@2x.svg" alt="star">
                    <img src="images/Star@2x.svg" alt="star">
                        <img src="images/Star@2x.svg" alt="star">
            </div>
                        <h6>Comprehension:</h6>
                        <div class="journal__box">
                            <img src="images/Rectangle@2x.svg" alt="rectangle">
                                <img src="images/Rectangle@2x.svg" alt="rectangle">
                                    <img src="images/Rectangle@2x.svg" alt="rectangle">
                                        <img src="images/Rectangle@2x.svg" alt="rectangle">
                                            <img src="images/Rectangle@2x.svg" alt="rectangle">
                                                <img src="images/Rectangle@2x.svg" alt="rectangle">
                                                    <img src="images/Rectangle@2x.svg" alt="rectangle">
                                                        <img src="images/Rectangle@2x.svg" alt="rectangle">
                                                            <img src="images/Rectangle@2x.svg" alt="rectangle">
                                                                <img src="images/Rectangle@2x.svg" alt="rectangle">
            </div>

                                                                <h6>Motto:</h6>
                                                                <p class="journal__motto citylife">"That's life in this city"</p>


                                                                <h6>Notes:</h6>

                                                                <p class="journal__notes notes">Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi.
                                                                Et
                                                                quidem se repellere, idque
                                                                instituit docere sic omne animal, simul atque.
            </p>
        </section>*/