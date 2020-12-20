$(function(){
    $('.collapse').on('show.bs.collapse', function(){
        $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle')
    });
    $('.collapse').on('hide.bs.collapse', function(){
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle')
    });
    $('#myForm').validator({
        feedback: {
            success: 'fa fa-check-circle',
            error: 'fa fa-times-circle'
          }
    });

    $('.form-sel').select2({
        minimumResultsForSearch: Infinity
    });
});

// //привязка карты
// var myMap;
// function initMap() {
//   myMap = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });


//   //привязка маркера
// var marker = new google.maps.Marker({
//     position:{ lat: -34.397, lng: 150.644 },
//     map: myMap
// });
// var InfoWindow = new google.maps.InfoWindow({
//     content: '<h1>чуть-чуть не Сидней</h1>'
// });

// InfoWindow.open(myMap, marker);

// marker.addListener('click', function () {
//     InfoWindow.open(myMap, marker);
// })
// }
