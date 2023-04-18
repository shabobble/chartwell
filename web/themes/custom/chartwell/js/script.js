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

(function($) {
    $(document).ready(function(){
        let $window = $(window);
        let $mainMenuBar = $('#mainMenuBar');
        let $mainMenuBarAnchor = $('#mainMenuBarAnchor');

        $window.scroll(function() {
            let window_top = $window.scrollTop();
            let div_top = $mainMenuBarAnchor.offset().top;
            if (window_top > div_top) {
                $mainMenuBar.addClass('sticky');
                $mainMenuBarAnchor.height($mainMenuBar.height());
            }
            else {
                $mainMenuBar.removeClass('sticky');
                $mainMenuBarAnchor.height(0);
            }
        })
    })
})(jQuery);