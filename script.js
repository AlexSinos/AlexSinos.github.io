const projects = document.querySelector(".projects")

projects.addEventListener('wheel', (event) => {
    projects.scrollLeft += event.deltaY;
    event.preventDefault()

})
