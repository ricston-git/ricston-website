(function($, url) {
    $(function() {
        var pathname = url.pathname;
        console.log("pathname is: " + pathname);

        if(pathname.lastIndexOf("/industries", 0) === 0) {
            console.log("about to add class active");
            $("#ricston-industries-list").addClass("active");
        } else if(pathname.lastIndexOf("/tech", 0) === 0) {

        }
    });
})(jQuery, location);
