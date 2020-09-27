$(function() {
var words = [
    'une dév. Web',
    'une dév. Web Mobile',
    'FullStack JS'
],
i = 0;

    // on gère l'affichage des écrans < 992px
$('.navbar-responsive').toggle();

$('.menu').click(function(){
    $('.navbar-responsive').toggle();
})

// affichage aléatoire des phrases du header toutes les 3.5s
setInterval(function(){
$("#word").fadeOut(function(){
$(this).html(words[i = (i+1) % words.length]).fadeIn();
});
}
, 3500);

// Scroll vers les différentes sections
$(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
});

// Affichage des progressbar
window.sr = ScrollReveal();
sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 1000,
    distance: '100%'
})
});

const icon = document.getElementById("menu");
const sidebar = document.getElementById("navbar-responsive");

icon.onclick = () => sidebar.classList.toggle("is-visible");

