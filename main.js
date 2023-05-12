// Mobaile Menu 

const bar = document.getElementById("bar");
const cross = document.getElementById("cross-main");
const menu = document.getElementById("mobile-menu");

cross.addEventListener("click", () => {
   menu.classList.remove('flex');
    menu.classList.add('hidden');
})

bar.addEventListener("click", () => {
    console.log('first')
    menu.classList.remove('hidden');
    menu.classList.add('flex');
})

// Mobaile Menu end 

