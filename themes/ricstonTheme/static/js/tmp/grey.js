(function($, url) {
    $(function() {
        var pathname = url.pathname;

        var addActiveClass = function(idStr) {
            $(idStr).addClass("active");
        }

        if(pathname === "/" || pathname === "/aboutUs/" || pathname === "/ourServices/") {
            addActiveClass("#ricston-home-nav-menu");
        } else if(pathname.lastIndexOf("/industries/", 0) === 0) {
            addActiveClass("#ricston-industries-nav-menu");
        } else if(pathname.lastIndexOf("/tech/", 0) === 0) {
            addActiveClass("#ricston-tech-nav-menu");
        }

        
    });
})(jQuery, location);
