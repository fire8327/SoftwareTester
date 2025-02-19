/* dropdown */
$(".dropdown").each((i, el) => {
    $(el).find(".dropdownToggler").click(() => {
        $(el).find(".dropdownToggler").find("img").toggleClass("rotate-180")
        $(el).find(".dropdownList").toggle(500)
    })
})