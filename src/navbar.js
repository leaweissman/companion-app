const activeincons = document.querySelectorAll('.icons')

activeincons.forEach((activeicon) => {
    activeicon.addEventListener('click', () => {
        activeicon.classList.add('test');
    })
})



//const icons = document.querySelectorAll('.icon')
//icons.forEach(toggleicon);

//function toggleicon(activeiconfun) {
    //activeiconfun.addEventListener('click', () => {
        //const activeicons = document.querySelectorAll('.icon');
        //activeicons.classList.toggle('activeicons');
    //})
//}
