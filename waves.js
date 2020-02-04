

var piperpaused = document.getElementById('piperpaused');

piperpaused.onclick = function() {
    console.log('Clicked dumm!')
    document.getElementById("piperpaused").style.animationPlayState = "running"
}

var wave = document.getElementById('wave');

wave.onclick = function() {
    console.log('wave!')
    document.getElementById("wave").style.animationPlayState = "running"
}
// var wave = document.getElementById('wave');
// wave.onclick = function() {
//     console.log('worked')
//     document.getElementById("wave").style.animationPlayState = "running";
// }

// var wave2 = document.getElementById('wave2');
// wave2.onclick = function() {
//     console.log('wave2worked');
//     document.getElementById("wave2").style.animationPlayState = "running";
// }
