window.addEventListener("load", function () {
    $("a[href^=\\#define-]")
        .tooltip({
            html: true,
            title: function () {
                return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<div></div>').parent()
            }
        })
})