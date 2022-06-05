const modalContainer1 = document.
querySelector("#menu ul li");
const modalTriggers1 = document.
querySelectorAll("#menu ul li");

modalTriggers1.forEach(trigger => trigger.
    addEventListener("click", toggleModal))


    function toggleModal(){
        modalContainer1.classList.toggle("active2")
    }