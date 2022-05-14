const dropdown = document.querySelector('.dropdown')
const toggleBtn = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')

toggleBtn.addEventListener('click',function(){
    menu.classList.toggle('show')
})

options.forEach(function(item){
    item.addEventListener('click',function(e) {
        const value = e.currentTarget.textContent.trim()
        toggleBtn.textContent = value
    })
});


