var censoredWords = ['sad','bad','mad'];
var customCensoredWords = [];
function censor(inStr){
    for(idx in censoredWords){
        console.log(idx);
        console.log(censoredWords[idx]);
        inStr = inStr.replace(censoredWords[idx],'****');
    }
    for(idx in customCensoredWords){
        console.log(idx);
        console.log(customCensoredWords[idx]);
        inStr = inStr.replace(customCensoredWords[idx],'****');
    }
    return inStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;