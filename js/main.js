

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.bars');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

});