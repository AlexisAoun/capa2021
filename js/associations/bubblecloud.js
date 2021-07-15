var dataObjectclub = clubData;
var dataObjectasso = associationData;

var vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ "BDE", 30, 1000 ],
            [ "IMT'ernational", 15, 2000 ],
            [ "Cotrad", 15, 3000 ],
            [ "ZeGreenPeas", 15, 4000 ],
            [ "Egal’IMT", 15, 5000 ],
            [ "ARTEMIS", 15, 5000 ],
            [ "Le Caméléon déchaîné", 15, 5000 ],
            [ "Douai Moustache Club", 15, 5000 ],
            [ "Bar", 15, 5000 ],
            [ "IMTalks", 15, 5000 ],
            [ "Club robotique", 15, 5000 ],
            [ "Gala", 15, 5000 ],
            [ "Club des brasseurs", 15, 5000 ],
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
