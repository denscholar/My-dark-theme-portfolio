const toggle = document.querySelector(".toggle");
const sideNav = document.querySelector(".side-nav");
const cancel = document.querySelector(".cancel");
const navItem = document.querySelectorAll(".nav-item");


toggle.addEventListener("click", () => {
  sideNav.style.display = "flex";
  toggle.style.display = "none";
  cancel.style.display = 'flex'
});
cancel.addEventListener("click", () => {
  sideNav.style.display = "none";
  cancel.style.display = "none";
  toggle.style.display = "flex";
});

navItem.forEach(item =>{
    item.addEventListener('click', () =>{
        if(sideNav.style.display = 'flex'){
            sideNav.style.display = "none";
            cancel.style.display = "none";
            toggle.style.display = 'flex';
        }
    })
})
    
