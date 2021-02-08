const activeicons = document.querySelectorAll('.icons')

activeicons.forEach((activeicon) => {
    activeicon.addEventListener('click', () => {
        console.log('clicked')
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
