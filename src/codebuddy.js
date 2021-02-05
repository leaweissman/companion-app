const codebuddy = ['Nicole', 'André', 'Mali', 'Karin', 'Stefan', 'Daniel', 'Philip', 'Maize', 'Sophie', 'Calvin', 'Lea']


var randomcodebuddy1 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy2 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy3 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy4 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
var randomcodebuddy5 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];

//function randomizer (){
//if (randomcodebuddy1 === randomcodebuddy2) {}
//}




const codebuddybox = document.createElement('section');
document.body.appendChild(codebuddybox);
codebuddybox.classList.add('buddy');
codebuddybox.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy1}</h3>
        <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy2}</h3>
        <img src="images/Plus.svg" class="plus" alt="plus icon">
        `;

