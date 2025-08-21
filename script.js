let cards = document.querySelectorAll('.pokemonCard');

var btnPikachu = document.getElementById("pikachu").addEventListener("click", function() {
    cards.forEach(function(card){
      card.classList.add('naoAparente');
    });
    cards[0].classList.toggle('naoAparente');
  });

var btnCharizard = document.getElementById("charizard").addEventListener("click", function() {
  cards.forEach(function(card){
    card.classList.add('naoAparente');
  });
  cards[1].classList.toggle('naoAparente');
});
var btnBulbasauro = document.getElementById("bulbassauro").addEventListener("click", function() {
  cards.forEach(function(card){
    card.classList.add('naoAparente');
    });
    cards[2].classList.toggle('naoAparente');
  });
var btnSquirtle = document.getElementById("squirtle").addEventListener("click", function() {
  cards.forEach(function(card){
    card.classList.add('naoAparente');
    });
  cards[3].classList.toggle('naoAparente');
});
var btnVaporeon = document.getElementById("vaporeon").addEventListener("click", function() {
  cards.forEach(function(card){
    card.classList.add('naoAparente');
    });
  cards[4].classList.toggle('naoAparente');
});
