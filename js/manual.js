$(document).ready(function() {

    $('.arrow-top').on('click', () => {
        // document.documentElement.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});