const codebuddy = ['Nicole', 'André', 'Mali', 'Karin', 'Stefan', 'Daniel', 'Philip', 'Maize', 'Sophie', 'Calvin', 'Lea']

//<h5 class="dashboard__h5">Your Code Buddy for Today:</h5><section class="buddy"></section>

let randomcodebuddy1 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy2 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy3 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy4 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy5 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];


const headlineTeam1 = document.createElement('h5');
document.body.appendChild(headlineTeam1);
headlineTeam1.innerHTML = `<h5 class="dashboard__h5">Team 1</h5>`

const teambox1 = document.createElement('section');
document.body.appendChild(teambox1);
teambox1.classList.add('team');
teambox1.innerHTML = `
<h3 class="team bl-light radius__top"> Profile Name </h3>
<h3 class="team bl-light">${randomcodebuddy2}</h3>
<h3 class="team bl-light">${randomcodebuddy3}</h3>
<h3 class="team bl-light">${randomcodebuddy4}</h3>
<h3 class="team bl-light radius__bottom">${randomcodebuddy5}</h3>`


const headlineTeam2 = document.createElement('h5');
document.body.appendChild(headlineTeam2);
headlineTeam2.innerHTML = `<h5 class="dashboard__h5">Team 2</h5>`

const teambox2 = document.createElement('section');
document.body.appendChild(teambox2);
teambox2.classList.add('team', 'team__2');
teambox2.innerHTML = `
<h3 class="team bl-light radius__top"> Profile Name </h3>
<h3 class="team bl-light">${randomcodebuddy2}</h3>
<h3 class="team bl-light">${randomcodebuddy3}</h3>
<h3 class="team bl-light">${randomcodebuddy4}</h3>
<h3 class="team bl-light radius__bottom">${randomcodebuddy5}</h3>`