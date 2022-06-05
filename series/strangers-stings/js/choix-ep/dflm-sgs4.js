const modalContainer4 = document.
querySelector("#menu4 ul li");
const modalTriggers4 = document.
querySelectorAll("#menu4 ul li");

modalTriggers4.forEach(trigger => trigger.
    addEventListener("click", toggleModal))


    function toggleModal(){
        modalContainer4.classList.toggle("active2")
    }