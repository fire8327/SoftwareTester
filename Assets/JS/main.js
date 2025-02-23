/* dropdown */
$(".dropdown").each((i, el) => {
    $(el).find(".dropdownToggler").click(() => {
        $(el).find(".dropdownToggler").find("img").toggleClass("rotate-180")
        $(el).find(".dropdownList").toggle(500)
    })
})

/* menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-md:top-0 max-md:top-full max-md:-translate-y-full")
    $("#overlay").toggleClass("hidden")
})
