var bio_data = [
  "Je suis né en mars 89",
  "Je suis Bourbonnais et un peu Auvergnat mais le dites pas aux Bourbonnais!",
  "J'ai étudié à SUPINFO",
  "Le CSS c'est pas mon truc...",
  "Slyb1 a recruté Yogourt sur Albion Online",
  "Je suis Yogourt ou Julien dans ce monde.",
  "Albion Online c'est la bombe! <a href='https://albiononline.com/?ref=ZWCXX1QQDW' target='_blank'>(Mind If I Roll Need recrute!)</a>",
  "Sans déconner, c'est grâce à Albion Online que je suis là.",
  "Zenika est mon premier emploi en France.",
  "Je reviens de 4 ans à Montreal.",
  "NON! Je n'aime pas la poutine!",
  "Par contre une bonne truffade, je ne refuserai jamais!",
  "Node JS est mon interpreteur de javascript préféré.",
  "Javascript est mon language favori.",
  "Chor Rin est mon alter ego spatial suicidaire à tendance Caldari. (dans le bon ordre).",
  "Je suis un developpeur backend, j'aime les APIs! GLOIRE AUX APIs!",
  "Une certaine passion pour la bière m'habite...",
  "Il m'arrive de gratouiller ma guitare.",
  "npm install -g lorem-kaamelottsum && lorem-kaamelottsum",
  "Voilà, tu sais tout!"
];

var bio = function() {
  if (bio_data.length > 0) {
    return bio_data.shift();
  } else {
    return "<img src='/bravo.gif'>"
  }
}
