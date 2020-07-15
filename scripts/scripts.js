// $(document).ready(function() {
//     // $('#top-wave').height($(window).height());
//     document.getElementById('#top-wave').setAttribute("height", $(window).height())
// });

// shape = document.getElementById("top-wave");
// shape.setAttribute("viewBox", "0 0 500 200");

var waypoint = new Waypoint({
    element: document.getElementById("test"),
    handler: function() {
        alert('Basic waypoint triggered');
    },
    // offset: 1000
})