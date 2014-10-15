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

        } else if(pathname.lastIndexOf("/caseStudies/", 0) === 0) {

            addActiveClass("#ricston-casestudies-nave-menu");

        } else if(pathname.lastIndexOf("/integration/", 0) === 0) {

            addActiveClass("#ricston-integration-nav-menu");

        } else if(pathname.lastIndexOf("/contactUs/", 0) === 0) {

            addActiveClass("#ricston-contactus-nav-menu");

        }

        
    });
})(jQuery, location);
