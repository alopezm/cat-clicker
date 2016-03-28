(function (window, document, undefined) {

    var model = {
        init: function() {
            this.cats = [
                {img: 'media/cat0.jpg', count: 0, name: 'Romeo'},
                {img: 'media/cat1.jpg', count: 0, name: 'Lucho'},
                {img: 'media/cat2.jpg', count: 0, name: 'Mandy'},
                {img: 'media/cat3.jpg', count: 0, name: 'Billy'},
                {img: 'media/cat5.jpg', count: 0, name: 'Shamizen'}
            ];
            this.saveCurrentCat(this.cats[0]);
        },
        getCats: function () {
            return this.cats;
        },
        getCat: function (name) {
            var selectCat = undefined;
            var filterCats = this.cats.filter(function (cat) {
                return cat.name === name;
            });
            if(filterCats.length >= 1) {
                selectCat = filterCats[0];
            }
            else {
                console.error('Error with the current cat');
            }
            return selectCat;
        },
        setCurrentCat: function(name) {
            this.currentCat = this.getCat(name);
        },
        saveCurrentCat: function (currentCat) {
            this.setCat(currentCat);
            this.currentCat = currentCat;
        },
        getCurrentCat: function() {
            return this.getCat(this.currentCat.name);
        },
        setCat: function (newCat) {
            // remove duplicates by name
            var cats = this.cats.filter(function (oldCat) {
                return oldCat.name !== newCat.name;
            });
            // Insert new cat
            cats.push(newCat);
            this.cats = cats;
        },
        updateCounterCurrentCat: function () {
            this.currentCat.count++;
            this.saveCurrentCat(this.currentCat);
        },
        getNames: function () {
            return this.cats.map(function (cat) {
                return cat.name;
            })
        }
    };

    var listCats = {
        init: function () {
            this.listCatsElement = document.getElementById('list-cats');
            this.render();
            this.bindElements();
        },
        bindElements: function () {
            this.listCatsElement.addEventListener("click", function (event) {
                var target = event.target;
                if(target.tagName.toLowerCase() === 'li') {
                    var name = target.innerText;
                    octopus.setCurrentCat(name);
                }
            });
        },
        render: function () {
            var names = octopus.getNames();
            var htmlStr = '';
            names.forEach(function(name) {
                htmlStr += '<li>'+name+'</li>';
            });
            this.listCatsElement.innerHTML = htmlStr;
        }
    };

    var view = {
        init: function () {
            this.catImgElement = document.getElementById("cat-img");
            this.catNameElement = document.getElementById('cat-name');
            this.catCounterElement = document.getElementById('cat-counter');

            this.render();
            this.catImgElement.addEventListener("click", this.bindCounter);
        },
        bindCounter: function () {
            octopus.updateCounterCurrentCat();
        },
        render: function () {
            var currentCat = octopus.getCurrentCat();
            this.catNameElement.innerHTML = currentCat.name;
            this.catImgElement.setAttribute('src', currentCat.img);
            this.catCounterElement.setAttribute('value', currentCat.count);
        }
    };

    var octopus = {
        init: function () {
            model.init();
            listCats.init();
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
            view.render();
        },
        updateCounterCurrentCat: function () {
            model.updateCounterCurrentCat();
            view.render();
        },
        getNames: function () {
            return model.getNames();
        }
    };

    octopus.init();
})(window, document);