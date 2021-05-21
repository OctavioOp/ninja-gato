$(document).ready(function () {
    $("img").on("click", function () {
       
        let cat = $(this).attr('data-alt-src');
        console.log(cat)
        let ninja= $(this).attr('src');
        console.log(ninja)

        $(this).attr('src', cat);
        $(this).attr('data-alt-src', ninja);

    });
    
})