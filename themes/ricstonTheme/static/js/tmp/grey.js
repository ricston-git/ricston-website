(function($, url) {
    $(function() {
        var pathname = url.pathname;
        console.log("pathname is: " + pathname);

        var addActiveClass = function(idStr) {
            $(idStr).addClass("active");
        }

        if(pathname === "/") {
            addActiveClass("#ricston-home-nav-menu");

        } else if(pathname.lastIndexOf("/industries/", 0) === 0) {
            // $("#ricston-industries-list").addClass("active");
            addActiveClass("#ricston-industries-nav-menu");
        } else if(pathname.lastIndexOf("/tech/", 0) === 0) {
            addActiveClass("#ricston-tech-nav-menu");
        }

        
    });
})(jQuery, location);
