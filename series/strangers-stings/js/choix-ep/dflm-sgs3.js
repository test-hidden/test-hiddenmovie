const modalContainer3 = document.
querySelector("#menu3 ul li");
const modalTriggers3 = document.
querySelectorAll("#menu3 ul li");

modalTriggers3.forEach(trigger => trigger.
    addEventListener("click", toggleModal))


    function toggleModal(){
        modalContainer3.classList.toggle("active2")
    }