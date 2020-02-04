
// waves.onclick = function() {
//     purple.style.animationPlayState = 'running';
//     blue.style.animationPlayState = 'running';
//     emerald.style.animationPlayState = 'running'
// }

// $('.feet').on('click', function(){
//     $(this).toggleClass('active');
// }); 
// ---------------------------------
// incrementCounter = () => {
//     var count = this.StaticRange.counter;
//     count += 1;

//     this.setState({
//         counter: count
//     });

//     this.incrementIteration();
// }

// incrementIteration = () => {
//     var magicNumber = 3;
//     var numberofClicks = this.state.counter;
//     var iterations = numberofClicks % magicNumber;
//     console.log(iterations);

//     this.setState({
//         iteration: iterations
//     });
// }
// ----------------------------------------

// document.getElementById('waves')onclick = function (e) {
//     count++;
//     if (e.preventDefault) {
//         e.preventDefault();
//     }
//     e.returnValue = false;
// }

// ----------------------------------------------

// var clicks = 0;
// function onClick() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
//     console.log (clicks);
// };

//----------------------------------------------------

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("feet").innerHTML = clicks;
    var magicNumber = 3;
    var numberofClicks = clicks
    var iterations = numberofClicks % magicNumber;
    console.log (iterations);

    switch (iterations) {
        case 1:
            console.log ("wave_stage_1");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(-200px); transition-duration: 3s");
            break;
        case 2:
            console.log ("wave_state_2");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(-300px); transition-duration: 3s");
            break;
        case 0:
            console.log ("write_stage_0");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(0px); transition-duration: 3s");
            break;
        }

    }

// ------------------------------------------------------------------

// checkWaveStatus = () => {
//     document.getElementById("waves").innerHTML = threewaves;
//     switch (iterations) {
//         case 1:
//             console.log (wave1);
//             break;
//         case 2:
//             console.log (wave2);
//             break;
//         case 0:
//             console.log (wave0);
//             break;
//         }
//     }



//----------------------------------------------------

// incrementIteration = () => {
//     var magicNumber = 3;
//     var numberofClicks = clicks
//     var iterations = numberofClicks % magicNumber;
//     console.log(iterations);
// }
