const codebuddy = ['Nicole', 'André', 'Mali', 'Karin', 'Stefan', 'Daniel', 'Philip', 'Maize', 'Sophie', 'Calvin', 'Lea']


let randomcodebuddy1 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy2 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy3 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy4 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy5 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy6 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy7 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy8 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy9 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
let randomcodebuddy10 = codebuddy[Math.floor(Math.random() * codebuddy.length) + 1];
//function randomizer (){
//if (randomcodebuddy1 === randomcodebuddy2) {}
//}




const codebuddybox1 = document.createElement('section');
document.body.appendChild(codebuddybox1);
codebuddybox1.classList.add('buddy');
codebuddybox1.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy1}</h3>
        <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy2}</h3>
        `;

const codebuddybox2 = document.createElement('section');
document.body.appendChild(codebuddybox2);
codebuddybox2.classList.add('buddy');
codebuddybox2.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy3}</h3>
                <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy4}</h3>
                `;

const codebuddybox3 = document.createElement('section');
document.body.appendChild(codebuddybox3);
codebuddybox3.classList.add('buddy');
codebuddybox3.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy5}</h3>
                <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy6}</h3>
                `;

const codebuddybox4 = document.createElement('section');
document.body.appendChild(codebuddybox4);
codebuddybox4.classList.add('buddy');
codebuddybox4.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy7}</h3>
                <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy8}</h3>
                `;

const codebuddybox5 = document.createElement('section');
document.body.appendChild(codebuddybox5);
codebuddybox5.classList.add('buddy', 'buddyend');
codebuddybox5.innerHTML = ` <h3 class="bl-light radius__top buddy__name"> ${randomcodebuddy9}</h3>
                <h3 class="bl-light radius__bottom buddy__name">${randomcodebuddy10}</h3>
                `;