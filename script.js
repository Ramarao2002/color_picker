function myfunred(){
    document.getElementById('text').style.backgroundColor="red";
}

function myfunblue(){
    document.getElementById('text').style.backgroundColor="blue";
}
function myfungreen(){
    document.getElementById('text').style.backgroundColor="green";
}
function myfunviolet(){
    document.getElementById('text').style.backgroundColor="violet";
}
function myfunpink(){
    document.getElementById('text').style.backgroundColor="pink";
}
function myfunyellow(){
    document.getElementById('text').style.backgroundColor="yellow";
}
function myfunorange(){
    document.getElementById('text').style.backgroundColor="orange";
}
function myfunblack(){
    document.getElementById('text').style.backgroundColor="black";
}
function myfunturquoise(){
    document.getElementById('text').style.backgroundColor="turquoise";
}
function myfunpurple(){
    document.getElementById('text').style.backgroundColor="purple";
}
function myfunbrown(){
    document.getElementById('text').style.backgroundColor="brown";
}
function myfungold(){
    document.getElementById('text').style.backgroundColor="gold";
}
function myfunmaroon(){
    document.getElementById('text').style.backgroundColor="maroon";
}
function myfuncadetblue(){
    document.getElementById('text').style.backgroundColor="cadetblue";
}
function myfuncream(){
    document.getElementById('text').style.backgroundColor="chocolate";
}
function myfungrey(){
    document.getElementById('text').style.backgroundColor="grey";
}
function myfunseagreen(){
    document.getElementById('text').style.backgroundColor="powderblue";
}
function myfundeeppink(){
    document.getElementById('text').style.backgroundColor="deeppink";
}
function myfunindigo(){
    document.getElementById('text').style.backgroundColor="indigo";
}
function myfunlightgreen(){
    document.getElementById('text').style.backgroundColor="lightgreen";
}

function myfunyellowgreen(){
    document.getElementById('text').style.backgroundColor="yellowgreen";
}
function myfundodgerblue(){
    document.getElementById('text').style.backgroundColor="dodgerblue";
}

function myfunwhite(){
    document.getElementById('text').style.backgroundColor="white";
}



//for text color

function myfunredtext(){
    document.getElementById('text').style.color="red";
}

function myfunbluetext(){
    document.getElementById('text').style.color="blue";
}
function myfungreentext(){
    document.getElementById('text').style.color="green";
}
function myfunviolettext(){
    document.getElementById('text').style.color="violet";
}
function myfunpinktext(){
    document.getElementById('text').style.color="pink";
}
function myfunyellowtext(){
    document.getElementById('text').style.color="yellow";
}
function myfunorangetext(){
    document.getElementById('text').style.color="orange";
}
function myfunblacktext(){
    document.getElementById('text').style.color="black";
}
function myfunturquoisetext(){
    document.getElementById('text').style.color="turquoise";
}
function myfunpurpletext(){
    document.getElementById('text').style.color="purple";
}
function myfunbrowntext(){
    document.getElementById('text').style.color="brown";
}
function myfungoldtext(){
    document.getElementById('text').style.color="gold";
}
function myfunmaroontext(){
    document.getElementById('text').style.color="maroon";
}
function myfuncadetbluetext(){
    document.getElementById('text').style.color="cadetblue";
}
function myfuncreamtext(){
    document.getElementById('text').style.color="chocolate";
}
function myfungreytext(){
    document.getElementById('text').style.color="grey";
}
function myfunpowderbluetext(){
    document.getElementById('text').style.color="powderblue";
}
function myfundeeppinktext(){
    document.getElementById('text').style.color="deeppink";
}
function myfunindigotext(){
    document.getElementById('text').style.color="indigo";
}
function myfunlightgreentext(){
    document.getElementById('text').style.color="lightgreen";
}

function myfunyellowgreentext(){
    document.getElementById('text').style.color="yellowgreen";
}
function myfundodgerbluetext(){
    document.getElementById('text').style.color="dodgerblue";
}

function myfunwhitetext(){
    document.getElementById('text').style.color="white";
}


//download button
function myfundownload(){
    html2canvas(document.getElementById('content')). then (canvas => {
        const link=document.createElement('a') 
        link.href=canvas.toDataURL('image/png')
        link.download='image-png'
        link.click();
    });
}