//Final JavaScript
const ringflip = function() {
    const sadgirlsring = [
{ quote: "<a href='https://etobleh.net/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/etobleh.png' alt='etobleh.net'/></a>", author: "<p>ETOBLEH.NET<p>" },
{ quote: "<a href='https://aeriecat.space/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/aerie.png' alt='Aerie's web blog'/></a>", author: "<p>Aerie's space<p>" },
{ quote: "<a href='https://cashmerecrypt.art/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/cashmerecrypt.png' alt='cashmerecrypt.art'/></a>", author: "<p>Cashmere Crypt<p>" },
{ quote: "<a href='https://sadgirlsclub.wtf/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/sgc.png' alt='SadGirlsClub.WTF'/></a>", author: "<p>SadGirlsClub<p>" },
{ quote: "<a href='http://jarlold.rf.gd/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/bowl.png' alt='jarlold.rf.gd'/></a>", author: "<p>Jarlold's Site<p>" },
{ quote: "<a href='https://eilefsen.no/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/emma.png' alt='https://eilefsen.no/'/></a>", author: "<p>Emma's Site<p>" },
{ quote: "<a href='https://stardvst.xyz/' target='_blank'><img src='https://sadgirlsclub.wtf/engine/media/sadgirlsring/stardvst.png' alt='https://stardvst.xyz/'/></a>", author: "<p>Stardust's Cyberspace<p>" }
];

    let arrayIndex = Math.floor(Math.random() * sadgirlsring.length);
    document.getElementById("sadbanner").innerHTML = sadgirlsring[arrayIndex].quote;
    document.getElementById("siteauthor").innerHTML = sadgirlsring[arrayIndex].author;

}
window.addEventListener ('load', function () {
    setInterval (ringflip, 5500);
}, false);
window.onload = function() {
    generateQuote();
}
