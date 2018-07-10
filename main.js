(function() {
  var threeOtherNames = function (nameToNotUse) {
    const nameru = [];
    while(nameru.length < 3) {
      let name = names[Math.floor(Math.random()*names.length+1)];
      if (name !== nameToNotUse && name!==undefined && nameru.indexOf(name) === -1) nameru.push(name);
    }
    return nameru;
  }

  var quizz = function() {
    const charIDX = Math.floor(Math.random()*names.length);
    const quoteIDX = Math.floor(Math.random()*quotes[charIDX].quotes.length);

    return {
      text: quotes[charIDX].quotes[quoteIDX],
      name: names[charIDX]
    }
  }

  var shuffleArray = function (arr) {
    return arr
    .map(function(a){return [Math.random(), a]})
    .sort(function(a, b){return a[0] - b[0]})
    .map(function(a){return a[1]});
  };

  var validName = false;


  var setQuizz = function () {
    var response = quizz();

    var wrongResponses = threeOtherNames(response.name);
    wrongResponses.push(response.name);
    wrongResponses = shuffleArray(wrongResponses);

    var quote = document.getElementById("citation");

    wrongResponses.forEach(function(name, idx) {
      var responseTile = document.getElementById("response_"+idx);
      responseTile.innerHTML = name;
    })

    quote.innerHTML = response.text;
    validName = response.name;
  }

  function validateResponse(event) {
    var response = event.target.innerHTML
    var bonne_reponse = document.getElementById("bonne_reponse")
    var mauvaise_reponse = document.getElementById("mauvaise_reponse")
    if (response === validName) {
      bonne_reponse.innerHTML = bio();
      mauvaise_reponse.innerHTML = "";
    } else {
      mauvaise_reponse.innerHTML = "<img src='/karadoc.gif'>"
      bonne_reponse.innerHTML =  ""
    }
    setQuizz();
  }

  setQuizz();
  document.getElementById("response_0").addEventListener("click", validateResponse);
  document.getElementById("response_1").addEventListener("click", validateResponse);
  document.getElementById("response_2").addEventListener("click", validateResponse);
  document.getElementById("response_3").addEventListener("click", validateResponse);

})()
