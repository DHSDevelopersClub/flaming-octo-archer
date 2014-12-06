var menu = true;
translator = document.getElementById('translator');
var translateExample = function () {
    input = document.getElementById("text-input").value;
    translator.input = input;
    translator.updateOut();
}
var elem = document.querySelector('.mainPage');

var showMenu = new Animation(elem, [
    {
        left: '0px'
            },
    {
        left: '200px'
            }
            ], {
    fill: 'forwards',
    duration: 200,
    iterations: 1
});

var hideMenu = new Animation(elem, [
    {
        left: '200px'
            },
    {
        left: '0px'
            }
            ], {
    fill: 'forwards',
    duration: 200,
    iterations: 1
});
var play = function () {
    if (menu) {
        var player = document.timeline.play(showMenu);
    } else {
        var player = document.timeline.play(hideMenu);
    }
    menu = !menu;
}
