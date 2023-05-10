function showJobBackside(elem) {
    let card = elem.parentNode.parentNode;
    console.log(card);
    let cardHeight = card.clientHeight;
    console.log(cardHeight);
    
    card.classList.add('cards__item--backside-active');
    card.style.height = cardHeight + 'px';
}

function showJobFrontside(elem) {
    let card = elem.parentNode.parentNode.parentNode;
    console.log(card);

    card.classList.remove('cards__item--backside-active');
    card.style.height = '';
}

// (function($) {
//     $(document).ready(function(){
//         let $window = $(window);
//         let $mainMenuBar = $('#mainMenuBar');
//         let $mainMenuBarAnchor = $('#mainMenuBarAnchor');

//         $window.scroll(function() {
//             let window_top = $window.scrollTop();
//             let div_top = $mainMenuBarAnchor.offset().top;
//             if (window_top > div_top) {
//                 $mainMenuBar.addClass('sticky');
//                 $mainMenuBarAnchor.height($mainMenuBar.height());
//             }
//             else {
//                 $mainMenuBar.removeClass('sticky');
//                 $mainMenuBarAnchor.height(0);
//             }
//         })
//     })
// })(jQuery);

function serviceAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
  
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          let active = document.querySelectorAll(".accordion-div .accordion.active");
          for (let j = 0; j < active.length; j++) {
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.maxHeight = null;
          }
          panel.style.maxHeight = panel.scrollHeight + 100 + "px";
        }
        this.classList.toggle("active");
      });
    }
  
    let hash = location.hash.substr(1);
    console.log(hash);
    if (hash) {
      let activeTitle = document.getElementById(hash);
      activeTitle.click();
    }
  }

  serviceAccordion();

  // function sidebarHeight() {
  //   let mainContent = document.querySelector('.about__main-content .node__content').getBoundingClientRect();  
  //   let mainContentHeight = mainContent.height;

  //   let aboutGrid = document.getElementById('about-grid');
  //   aboutGrid.style.gridTemplateRows = mainContentHeight + 'px';
  //   console.log(aboutGrid.style);
      
  //   // let linkedin = document.querySelector('.wrappertest');
  //   // linkedin.setAttribute('style', 'height: ' + gridheight + 'px !important');
  //   // console.log(linkedin);
  // }
  
  // sidebarHeight();