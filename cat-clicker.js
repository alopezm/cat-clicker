(function (window, document, undefined) {

    var model = {
        init: function() {
            this.initCats();
            this.setCurrentCat(this.getFirstCat());
        },
        initCats: function () {
            var cats = {
                'Romeo' : {img: 'media/cat0.jpg', count: 0},
                'Lucho' : {img: 'media/cat1.jpg', count: 0},
                'Mandy' : {img: 'media/cat2.jpg', count: 0},
                'Billy' : {img: 'media/cat3.jpg', count: 0},
                'Shamizen' : {img: 'media/cat-1404368.jpg', count: 0}
            };

            for(var name in cats) {
                cats[name].name = name;
            }
            this.cats = cats;
        },
        getCats: function () {
            return this.cats;
        },
        getCat: function (name) {
            var cats = this.getCats();
            return cats[name];
        },
        getFirstCat: function() {
            var names = this.getNames();
            return names[0];
        },
        setCurrentCat: function(name) {
            this.currentCat = name;
        },
        getCurrentCat: function() {
            return this.getCat(this.currentCat);
        },
        setCat: function (cat) {
            this.cats[cat.name] = cat;
        },
        updateCounterCurrentCat: function () {
            var currentCat = this.getCurrentCat();
            currentCat.count++;
            this.setCat(currentCat);
        },
        getNames: function () {
            return Object.keys(this.getCats());
        }
    };
    
    var view = {
        init: function () {
            this.initCatSelector();
            this.displayCat();

            var cat = document.getElementById("cat");
            cat.addEventListener("click", this.bindCounter);

        },
        bindCounter: function ()
        {
            var counter = document.getElementById('counter');
            var currentCat = octopus.getCurrentCat();
            octopus.updateCounterCurrentCat();
            counter.setAttribute('value', currentCat.count);
        },
        displayCat: function () {
            var cat = octopus.getCurrentCat();
            document.getElementById('name').innerHTML = cat.name;
            document.getElementById('cat').setAttribute('src', cat.img);
            document.getElementById('counter').setAttribute('value', cat.count);
        },
        initCatSelector: function () {
            var namesElem = document.getElementById('names');
            var names = octopus.getNames();
            var htmlStr = '';
            names.forEach(function(name) {
                htmlStr += '<li>'+name+'</li>';
            });
            namesElem.innerHTML = htmlStr;

            namesElem.addEventListener("click", function (event) {
                var target = event.target;
                if(target.tagName.toLowerCase() === 'li') {
                    var name = target.innerText;
                    octopus.setCurrentCat(name);
                    view.displayCat();
                }
            });
        }
    };

    var octopus = {
        init: function () {
            model.init();
            view.init();
        },
        getCat: function (name) {
            return model.getCat(name);
        },
        getCats: function () {
            return model.getCats();
        },
        getCurrentCat: function () {
            return model.getCurrentCat();
        },
        setCurrentCat: function (name) {
            model.setCurrentCat(name);
        },
        updateCounterCurrentCat: function () {
            model.updateCounterCurrentCat();
        },
        getNames: function () {
            return model.getNames();
        }
    };

    octopus.init();
})(window, document);