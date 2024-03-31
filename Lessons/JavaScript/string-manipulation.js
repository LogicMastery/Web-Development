var headingSentence = document.getElementById("random-sentence")
var randomsentence = headingSentence.innerText

var UpperSentence = randomsentence.toUpperCase()
var LowerSentence = randomsentence.toLowerCase()
var firstElevenChars = randomsentence.substr(0, 11)

var AllWords = randomsentence.split(" ")
var BracketWords = "[" + AllWords.join("][m") + "]"

var FirstThreeWords = AllWords.slice(0, 3)

var MiddleWords = AllWords.slice(5, 10)
var MakeSentence = MiddleWords.join(" ")

headingSentence.innerText = MakeSentence