var selected = [false, false, false, false, false]
var numbers = [1, 2, 4, 8, 16]

function calculate(i) {
    if (selected[i]) {
        selected[i] = false;
    }
    else {
        selected[i] = true;
    }
}

function end() {
    var sum = 0;
    for(let i=0; i<selected.length; i++) {
        if (selected[i])
            sum += numbers[i];
    }
    if (sum === 0) {
        alert('Please choose a number...');
    }
    else{
        var loc = window.location.pathname;
        window.location = loc.substring(0, loc.lastIndexOf('/')) + '/end.html?answer='+sum;
        // document.write("<h1 style='text-align: center;'>The number your had selected is: "+sum+"</h1> <br> <a id='play-button' href='step1.html'>Play again</a>");
        // document.getElementsById('container').innerHTML = "<h1 style='text-align: center;'>The number your had selected is: "+sum+"</h1> <br> <a id='play-button' href='step1.html'>Play again</a>";
    }
}