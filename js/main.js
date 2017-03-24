(function() {
    function widgetCost(numberOfWidgets){
        var calculatedTotal = numberOfWidgets * 1.50
        return calculatedTotal
    }
    var inputField = document.querySelector('.amount'); 
    inputField.addEventListener('change', function(){
        var total = document.querySelector('.total');
        total.innerHTML =  widgetCost(inputField.value).toFixed(2).toString();
    
    });

})();
