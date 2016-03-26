(function (window, document, undefined) {
    function addCounter()
    {
        var counter = document.getElementById('counter');
        var newValue = parseInt(counter.getAttribute('value')) + 1;
        counter.setAttribute('value', newValue);
    }

    var cat = document.getElementById("cat");
    cat.addEventListener("click", addCounter);

})(window, document);