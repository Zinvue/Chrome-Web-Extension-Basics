//replaces all words on webpage with another
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;                          //defines variables that replace
            var replacedText = text.replace(/pear/gi, 'kumquat'); //first word replace   |    pear to kumquat
            var replacedTextTwo = text.replace(/apple/gi, 'kumquat'); //second word replace  |  apple to kumquat

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);  //actually replaces
            }

            if (replacedTextTwo !== text) {
                element.replaceChild(document.createTextNode(replacedTextTwo), node);
            }
        }
    }
}

//changes "paragraph" backgrounds to pink
let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    elt.style['background-color'] = '#FF00FF'  //pink
}
