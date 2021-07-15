var dataObjectclub = clubData;
var dataObjectasso = associationData;

var BDEcloud = new Vue({
    el: "#BDEcloud",
    data: {
        values: [
            [ "BDE", 50, 1000 ],
            [ "IMT'ernational", 15, 2000 ],
            [ "Cotrad", 15, 4000 ],
            [ "ZeGreenPeas", 15, 4000 ],
            [ "Egal’IMT", 15, 1000 ],
            [ "ARTEMIS", 15, 4000 ],
            [ "Le Caméléon déchaîné", 15, 4000 ],
            [ "Douai Moustache Club", 15, 1000 ],
            [ "Bar", 15, 4000 ],
            [ "IMTalks", 15, 1000 ],
            [ "Club robotique", 15, 4000 ],
            [ "Gala", 15, 4000 ],
            [ "Club des brasseurs", 15, 1000 ],
        ],
        colors: function(data) {
            if(data[2] > 4000) {
                return 2;
            } else if(data[2] > 3000) {
                return 1;
            }
              return 0;
            },
        styles: {
          titleFontSize: 15,
          titleFontWeight: 'bold',
        }
    },
    methods: {
        onClickEvent: function(obj, e) {
            console.log(obj.data);
            var top = document.getElementById(obj.data[0]).offsetTop;
            window.scrollTo(0, top);
        }
    }
});

var BDAcloud = new Vue({
    el: "#BDAcloud",
    data: {
        values: [
            [ "BDA", 50, 1000 ],
            [ "Club vidéo", 15, 4000 ],
            [ "Dance with mines", 15, 4000 ],
            [ "Club théâtre", 15, 4000 ],
            [ "Chorale", 15, 1000 ],
            [ "La fanfare", 15, 1000 ],
            [ "Imterlude", 15, 1000 ],
            [ "Comité musique", 15, 1000 ],
            [ "Club Sépia", 15, 1000 ],
            [ "L’Artelier", 15, 1000 ],
            [ "Cousu’mines", 15, 4000 ],
            [ "Club oenologie", 15, 4000 ],
            [ "Popcorn Club", 15, 1000 ],
            [ "IMTremplin", 15, 4000 ],
            [ "Club Sono Parkin’Son", 15, 1000 ],
            [ "Chess’Mate", 15, 4000 ],
            [ "La Mine aux merveilles", 15, 1000 ],
            [ "Club débats", 15, 1000 ],
            [ "Cuis’mines", 15, 1000 ],
        ],
        colors: function(data) {
            if(data[2] > 4000) {
                return 2;
            } else if(data[2] > 3000) {
                return 1;
            }
              return 0;
            },
        styles: {
          titleFontSize: 15,
          titleFontWeight: 'bold',
        }
    },
    methods: {
        onClickEvent: function(obj, e) {
            console.log(obj.data);
            var top = document.getElementById(obj.data[0]).offsetTop;
            window.scrollTo(0, top);
        }
    }
});

var BDScloud = new Vue({
    el: "#BDScloud",
    data: {
        values: [
            [ "BDS", 50, 1000 ],
            [ "Supporters", 15, 2000 ],
            [ "Club Rugby", 15, 3000 ],
            [ "Club Poker", 15, 4000 ],
            [ "IMTLD E-sport", 15, 4000 ],
            [ "Comité CCE", 15, 1000 ],
            [ "Comité Cartel", 15, 4000 ],
            [ "IMT Lille Maurice", 15, 1000 ],
            [ "Pompoms", 15, 4000 ],
            [ "Weski", 15, 1000 ],
            [ "Club cirque", 15, 1000 ],
        ],
        colors: function(data) {
            if(data[2] > 4000) {
                return 2;
            } else if(data[2] > 3000) {
                return 1;
            }
              return 0;
            },
        styles: {
          titleFontSize: 15,
          titleFontWeight: 'bold',
        }
    },
    methods: {
        onClickEvent: function(obj, e) {
            console.log(obj.data);
            var top = document.getElementById(obj.data[0]).offsetTop;
            window.scrollTo(0, top);
        }
    }
});

var BDHcloud = new Vue({
    el: "#BDHcloud",
    data: {
        values: [
            [ "BDH", 50, 1000 ],
            [ "Téléthon", 15, 4000 ],
            [ "4L trophy", 15, 4000 ],
            [ "ZeGreenPeas", 15, 4000 ],
            [ "Egal’IMT", 15, 1000 ],
            [ "ARTEMIS", 15, 1000 ],
            [ "Le Caméléon déchaîné", 15, 4000 ],
            [ "Douai Moustache Club", 15, 1000 ],
            [ "Bar", 15, 1000 ],
            [ "IMTalks", 15, 1000 ],
            [ "Club robotique", 15, 4000 ],
            [ "Gala", 15, 1000 ],
            [ "Club des brasseurs", 15, 1000 ],
        ],
        colors: function(data) {
            if(data[2] > 4000) {
                return 2;
            } else if(data[2] > 3000) {
                return 1;
            }
              return 0;
            },
        styles: {
          titleFontSize: 15,
          titleFontWeight: 'bold',
        }
    },
    methods: {
        onClickEvent: function(obj, e) {
            console.log(obj.data);
            var top = document.getElementById(obj.data[0]).offsetTop;
            window.scrollTo(0, top);
        }
    }
});
