const modalContainer2 = document.
querySelector("#menu2 ul li");
const modalTriggers2 = document.
querySelectorAll("#menu2 ul li");

modalTriggers2.forEach(trigger => trigger.
    addEventListener("click", toggleModal))


    function toggleModal(){
        modalContainer2.classList.toggle("active2")
    }