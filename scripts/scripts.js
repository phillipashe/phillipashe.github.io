// $(document).ready(function() {
//     // $('#top-wave').height($(window).height());
//     document.getElementById('#top-wave').setAttribute("height", $(window).height())
// });

// shape = document.getElementById("top-wave");
// shape.setAttribute("viewBox", "0 0 500 200");

// var waypoint = new Waypoint({
//     element: document.getElementById("test"),
//     handler: function() {
//         alert('Basic waypoint triggered');
//     },
//     // offset: 1000
// })

$(document).ready(function() {
    $("#ajax-body").load("../static/about.html");
    $("#about").click(function() {
        $("#ajax-body").load("../static/about.html");
        $(".nav-item").removeClass("active");
        $("#about").parent().addClass("active");


        $("#title").text("Hi! I'm Phil.");
        $("#subtitle").text("Your friendly neighborhood software engineer!");
        $(".description").removeClass("fade-in")
        $(".description").width()
        $(".description").addClass("fade-in")
    });
    $("#resume").click(function() {
        $("#ajax-body").load("../static/resume.html");
        $(".nav-item").removeClass("active");
        $("#resume").parent().addClass("active");

        $("#title").text("Experience");
        $("#subtitle").text("All the great places I've been!");
        $(".description").removeClass("fade-in")
        $(".description").width()
        $(".description").addClass("fade-in")
    });
    $("#projects").click(function() {
        $("#ajax-body").load("../static/projects.html");
        $(".nav-item").removeClass("active");
        $("#projects").parent().addClass("active");

        $("#title").text("Recent Projects");
        $("#subtitle").text("Some for business, others for pleasure.");
        $(".description").removeClass("fade-in")
        $(".description").width()
        $(".description").addClass("fade-in")
    });

    $("html").on("click", "#jrni-click", function() {
        let c = $("#jrni-click").parent().siblings("ul");
        if (!c.hasClass('expanded')) {
          $("#jrni-click").text('X')
          c.addClass('expanded');
          c.append(
            '<li>Responsible for the development of new features, and custom JRNI versions for high profile clients</li>'+
            '<li>Developed a node-based importer for our clients to bring Kronos HR software to JRNI</li>'+
            '<li>Worked together in an Agile remote team of 3</li>'+
            '<li>Used a tech stack consisting of AngularJS, Node.js, and Ruby</li>'+
            '<li>Deployments made Amazon Web Services (AWS), use of Lambda functions</li>'+
            '<li>Frequent use of Postman to test APIs and implemented Lambda functions</li>'+
            '<li>Git with Github & Gitlab used for source control</li>');
          }
          else {
            $("#jrni-click").text('Click to expand')
            c.removeClass('expanded');
            c.empty();
           }
    });

    $("html").on("click", "#applause-click", function() {
        let c = $("#applause-click").parent().siblings("ul");
        if (!c.hasClass('expanded')) {
        $("#applause-click").text('X');
        c.addClass('expanded');
        c.append(
            '<li>Responsible for implementing new features as part of an Agile team of engineers</li>'+
            '<li>Designed and deployed RESTful APIs</li>'+
            '<li>Created nested components for reuse</li>'+
            '<li>Applied CSS and Boostrap for responsive webpages</li>'+
            '<li>Wrote unit tests using Jasmine framework for frontend tests, and Spock framework for backend tests</li>'+
            '<li>Frequent use of Java and Javascript</li>'+
            '<li>Interacted with MySQL database using Spring Boot and Hibernate</li>'+
            '<li>Developed in a Unix based environment (MacOS)</li>'+
            '<li>Used Postman to test and secure created RESTful APIs</li>'+
            '<li>Git & Github used as source control</li>');
        }
        else {
          $("#applause-click").text('Click to expand');
          c.removeClass('expanded');
          c.empty();
        }
    });

    $("html").on("click", "#ttm-click", function() {
        let c = $("#ttm-click").parent().siblings("ul");
        if (!c.hasClass('expanded')) {
        $("#ttm-click").text('X')
        c.addClass('expanded');
        c.append(
            '<li>Responsible for deploying automation scripts to enhance production capabilities</li>'+
            '<li>Cut engineer circuit review time by 8-10 hours per week, by implementing web-based data viewing solutions</li>'+
            '<li>Designed and deployed JavaScript based web app for engineers to change values, preventing errors</li>'+
            '<li>Improved existing drilling automation by scripting in job information previously entered by hand</li>'+
            '<li>Debugged and improved existing automation codebase used by the company</li>'+
            '<li>Frequent use of Perl, PHP, Python, and JavaScript</li>'+
            '<li>Developed in a Linux environment on CentOS</li>');
        }
        else {
          $("#ttm-click").text('Click to expand');
          c.removeClass('expanded');
          c.empty();
        }
    });
});