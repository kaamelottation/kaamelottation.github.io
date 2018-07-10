var bio_data = [
  "Je suis né en mars",
  "J'ai grandis en Auvergne",
  "Slyb1 a recruté Yogourt sur Albion Online",
  "Je suis Yogourt.",
  "Albion Online c'est la bombe!",
  "J'aimeuh les oridnateurs.",
  "C'est mon premier emploi en France.",
  "Je reviens de Montreal.",
  "Node JS est mon interpreteur de javascript préféré.",
  "Javascript est mon language préféré.",
  "Chor Rin est mon alter ego spatial suicidaire à tendance caldari. (dans le bon ordre).",
  "Je suis developpeur backend, j'aime les APIs! GLOIRE AUX APIs!",
  "Une certaine passion pour la bière m'habite...",
  "Il m'arrive de gratouiller ma guitare.",
  "<a href='https://github.com/bassochette' target='_blank'> Mon compte github </a>",
  "Voila, tu sais tout!"
];

var bio = function() {
  if (bio_data.length > 0) {
    return bio_data.shift();
  } else {
    return 'Bravo tu as trouvé la bonne réponse!'
  }
}
