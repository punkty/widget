(function() {

// Cost widget code   
    function widgetCost(numberOfWidgets){
        var calculatedTotal = numberOfWidgets * 1.50
        return calculatedTotal
    }
    var inputField = document.querySelector('.amount'); 
    inputField.addEventListener('change', function(){
        var total = document.querySelector('.total');
        total.innerHTML =  widgetCost(inputField.value).toFixed(2).toString();
    
    });

// Modal Section

let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".displayModalBtn");
let closeBtn = document.querySelector(".close");


modalBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

})();


// Counter Widget Section
let counter = document.querySelector(".counter"),
    addButton = document.querySelector(".addCount"),
    minusButton = document.querySelector(".minusCount");
    counter.value = 0;


addButton.addEventListener('click',add);
minusButton.addEventListener('click', minus)

function add(){
    console.log()
    if(!(parseInt(counter.value) === 99)){
        counter.value = parseInt(counter.value) + 1;
    }
}

function minus(){
    if(!(parseInt(counter.value) === 0)){
        counter.value = parseInt(counter.value) - 1;
    }
}
