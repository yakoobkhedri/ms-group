// open Sidebar

let openSidebar = document.getElementById('openSidebar');
let closeSidebar = document.getElementById('closeSidebar');

openSidebar.addEventListener('click' , function () {
  document.getElementById('sidebar').classList.add('active');
  document.querySelector('.dashboardHeader').classList.remove('active');
});
closeSidebar.addEventListener('click' , function () {
  document.getElementById('sidebar').classList.remove('active');
  document.querySelector('.dashboardHeader').classList.add('active');
})

// checkbox

let checkbox = Array.from(document.getElementsByClassName('checkbox'));
let checkboxRow = Array.from(document.getElementsByClassName('checkboxRow'));

checkboxRow.forEach((item) => {
    item.addEventListener('click', function () {
        item.querySelector('.checkbox').classList.toggle('active');
    })
})