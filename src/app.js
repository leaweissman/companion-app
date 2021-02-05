const codebuddy = ['Nicole', 'André', 'Mali', 'Karin', 'Stefan', 'Daniel', 'Philip', 'Maize', 'Sophie', 'Calvin', 'Lea']

//<h5 class="dashboard__h5">Your Code Buddy for Today:</h5><section class="buddy"></section>

var randomcodebuddy1 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy2 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy3 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy4 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy5 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];

//function randomizer (){
//if (randomcodebuddy1 === randomcodebuddy2) {}
//}

const buddyfortheday = document.createElement('h5');
//const maintoday = document.querySelector('main');
//maintoday.parentNode.insertBefore(buddyfortheday, maintoday);

document.body.appendChild(buddyfortheday);
buddyfortheday.innerHTML = `<h5 class="dashboard__h5">Your Code Buddy for Today:</h5>`

const codebuddybox = document.createElement('section');
document.body.appendChild(codebuddybox);
codebuddybox.classList.add('buddy');
codebuddybox.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> Profile Name </h3>
        <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy2}</h3>
        `;
//const plussvg = document.createElement('img');
//document.body.appendChild(plussvg);
//plussvg.classList.add('plus');


const headlineTeam = document.createElement('h5');
document.body.appendChild(headlineTeam);
headlineTeam.innerHTML = `<h5 class="dashboard__h5">Your Current Team:</h5>`

const teambox = document.createElement('section');
document.body.appendChild(teambox);
teambox.classList.add('team');
teambox.innerHTML = `
<h3 class="team bl-light radius__top"> Profile Name </h3>
<h3 class="team bl-light">${randomcodebuddy2}</h3>
<h3 class="team bl-light">${randomcodebuddy3}</h3>
<h3 class="team bl-light">${randomcodebuddy4}</h3>
<h3 class="team bl-light radius__bottom">${randomcodebuddy5}</h3>`

const yesterdayjournal = document.createElement('h5');
document.body.appendChild(yesterdayjournal);
yesterdayjournal.classList.add('dashboard__h5');
yesterdayjournal.innerHTML = `<h5>Yesterdays Journal:</h5>`

const journalbox = document.createElement('section');
document.body.appendChild(journalbox);
journalbox.classList.add('journal', 'bl-shadow', 'radius__bottom', 'radius__top', 'journal__margin');
journalbox.innerHTML = `<h6>Rating:</h6>
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
<p class="citylife">"That's life in this city"</p>


<h6>Notes:</h6>

<p class="journal__notes notes">Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi.
    Et
    quidem se repellere, idque
    instituit docere sic omne animal, simul atque.
</p>`







