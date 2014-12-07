var menu = true;
var translator = document.getElementById('translator');
var translateExample = function () {
    var input = document.getElementById("text-input").value;
    translator.input = input;
    translator.updateOut();
};
var elem = document.querySelector('.mainPage');
var elem2 = document.querySelector('.menu');
var elem3 = document.querySelector('.pageCover');

var showMenu1 = new Animation(elem, [
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


var hideMenu1 = new Animation(elem, [
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

var showMenu2 = new AnimationGroup([
    new Animation(elem2, [
        {
            left: '-200px'
            },
        {
            left: '0px'
            }
            ], {
        fill: 'forwards',
        duration: 200,
        iterations: 1
    }),

    new Animation(elem3, [
        {
            opacity: '0'
        },
        {
            opacity: '0.5'
        }
        ], {
        fill: 'forwards',
        duration: 200,
        iterations: 1
    })
]);

var hideMenu2 = new AnimationGroup([

    new Animation(elem2, [
        { left: '0px'},
        { left: '-200px'}
    ], {
    fill: 'forwards',
    duration: 200,
    iterations: 1
    }),

    new Animation(elem3, [
        {opacity: '0.5'},
        {opacity: '0'}
    ], {
    fill: 'forwards',
    duration: 200,
    iteration: 1
    })
]);

var play = function () {
    if (menu) {
        var player = document.timeline.play(showMenu1);
    } else {
        var player = document.timeline.play(hideMenu1);
    }
    menu = !menu;
}

var show = function () {
    elem3.style.display = 'block';
    elem2.style.boxShadow = "10px 0px 20px 0.1px #3b3b3b";
    var player = document.timeline.play(showMenu2);
}
var hide = function () {
    var player = document.timeline.play(hideMenu2);

    setTimeout(function(){
        elem3.style.display = 'none';
        elem2.style.boxShadow = 'none';
    }, 200);
}
