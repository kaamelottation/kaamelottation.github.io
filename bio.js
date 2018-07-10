var bio = function() {
  var data = [
    "Je suis né en mars",
    "J'ai grandis en Auvergne",
    "Slyb1 à recruté Yogourt sur Albion Online",
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
    "Il m'arrive de gratouiller ma guitare."
  ];

  return data[Math.floor(Math.random()*data.length)];
}
