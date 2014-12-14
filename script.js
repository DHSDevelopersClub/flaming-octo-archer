var menu = true;
var translator = document.getElementById('translator');
var translateExample = function () {
    var input = document.getElementById("text-input").value;
    translator.input = input;
    translator.updateOut();
};

$("#menuButton").click(function () {
    if (menu) {
        $(".mainPage").animate({
            left: "+=200"
        }, 200, function () {
            menu = !menu;
        });
    }
});

$(".mainPage").click(function () {
    if (!menu) {
        $(".mainPage").animate({
            left: "-=200"
        }, 200, function () {
            menu = !menu;
        });
    }
});
