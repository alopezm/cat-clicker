(function (window, document, undefined) {

    var mapNames = {
        'Romeo' : 'media/cat0.jpg',
        'Lucho' : 'media/cat1.jpg',
        'Mandy' : 'media/cat2.jpg',
        'Billy' : 'media/comfortable-cat.jpg',
        'Shamizen' : 'media/cat-1404368.jpg'
    };

    function displayCat(event)
    {
        var target = event.target;
        if(target.tagName.toLowerCase() === 'li') {
            var name = target.innerText;
            var src = mapNames[name];

            document.getElementById('name').innerHTML = name;
            document.getElementById('cat').setAttribute('src', src);
            // reset the counter
            document.getElementById('counter').setAttribute('value', '0');
        }
    }

    function addCounter()
    {
        var counter = document.getElementById('counter');
        var newValue = parseInt(counter.getAttribute('value')) + 1;
        counter.setAttribute('value', newValue);
    }

    var names = document.getElementById("names");
    var cats = document.getElementsByClassName("cat");
    
    names.addEventListener("click", displayCat);

    for(var i = 0; i < cats.length; ++i) {
        cats[i].addEventListener("click", addCounter);
    }
})(window, document);