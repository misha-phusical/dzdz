(function() {
    const controlls = document.querySelectorAll(".language_link");
    const activeClass = "lang--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".language_link").classList.remove(activeClass);
    })
    control.closest(".language_link").classList.add(activeClass);
    })
    })
    })();
    