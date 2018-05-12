/**** Custom JS ****/

//Written by Ahmed Magdy//

$(function () { //On Document Ready

    /***** Define Class for elements that slide using jQuery animation *****/

    //Constants for left and right position vals.
    const L = "left";
    const R = "right";

    class SlidElement {
        constructor(selector, direction) {
            this.selector = $(selector);
            this.direction = direction;
            this.orient();
        }
        lefty() {
            this.selector.css({
                opacity: 0.3,
                position: "relative",
                left: "50%"
            });
            this.animate();
        }
        righty() {
            this.selector.css({
                opacity: 0.3,
                position: "relative",
                right: "50%"
            });
            this.animate();
        }

        animate() {
            this.selector.animate({
                opacity: 1,
                left: '0'
            }, 3000);
        }
        orient() {
            if (this.direction === "left") {
                this.lefty();
            } else {
                this.righty();
            }
        }
    }

    /**** Start Animating *****/

    //Animating "Hero Jumbotron" section text.

    const $introText = new SlidElement("#intro-text", R);
    const $introSubText = new SlidElement("#intro-subtext", L);

    //Logic to slide elements on scrolling

    let $animation_elements = $('.anim');
    let $window = $(window);

    function check_if_in_view() {
        let window_height = $window.height();
        let window_top_position = $window.scrollTop();
        let window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            let $element = $(this);
            let element_height = $element.outerHeight();
            let element_top_position = $element.offset().top;
            let element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');

            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');






});