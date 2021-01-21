import Jump from "jump.js";
import * as basicLightbox from 'basiclightbox'

export const ssSmoothScroll = function () {
    const triggers = document.querySelectorAll(".smoothscroll");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const target = trigger.getAttribute("href");

        Jump(target, {
          duration: 1200,
        });
      });
    });
  };

 export const ssBackToTop = function () {
    const pxShow = 900;
    const goTopButton = document.querySelector(".ss-go-top");

    if (!goTopButton) return;

    // Show or hide the button
    if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= pxShow) {
        if (!goTopButton.classList.contains("link-is-visible"))
          goTopButton.classList.add("link-is-visible");
      } else {
        goTopButton.classList.remove("link-is-visible");
      }
    });
  }; //



     /* Lightbox
    * ------------------------------------------------------ */
  export const ssLightbox = function() {

    const folioLinks = document.querySelectorAll('.folio-item a');
    const modals = [];

    folioLinks.forEach(function(link) {
        let modalbox = link.getAttribute('href');
        let instance = basicLightbox.create(
            document.querySelector(modalbox),
            {
                onShow: function(instance) {
                    //detect Escape key press
                    document.addEventListener("keydown", function(evt) {
                        evt = evt || window.event;
                        if(evt.keyCode === 27){
                        instance.close();
                        }
                    });
                }
            }
        )
        modals.push(instance);
    });

    folioLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modals[index].show();
        });
    });

};  // end ssLightbox


/* Alert boxes
* ------------------------------------------------------ */
export const ssAlertBoxes = function() {

    const boxes = document.querySelectorAll('.alert-box');

    boxes.forEach(function(box) {

        box.addEventListener('click', function(e){
            if (e.target.matches(".alert-box__close")) {
                e.stopPropagation();
                e.target.parentElement.classList.add("hideit");

                setTimeout(function() {
                    box.style.display = "none";
                }, 500)
            }    
        });

    })

}; // end ssAlertBoxes
