(function() {
    const controlls = document.querySelectorAll(".aviaperevozki_overall_block");
    const activeClass = "aviaperevozki_overall_block--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".aviaperevozki_overall_block").classList.remove(activeClass);
    })
    control.closest(".aviaperevozki_overall_block").classList.add(activeClass);
    })
    })
    })();
    