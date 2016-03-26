(function (window, document, undefined) {
    function addCounter()
    {
        var counter = document.getElementById('counter');
        var newValue = parseInt(counter.getAttribute('value')) + 1;
        counter.setAttribute('value', newValue);
    }

    var cats = document.getElementsByClassName("cat");
    for(var i = 0; i < cats.length; ++i) {
        cats[i].addEventListener("click", addCounter);
    }
})(window, document);