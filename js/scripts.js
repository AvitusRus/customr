$(document).ready(function () {

    $(".browseOptions__Title").click(function () {
        $(".browseOptions__CheckBoxBlock").toggleClass("browseOptions__CheckBoxBlock--active");
    });

    $(".articleMainRight__options").click(function () {
        $(".articleFaqCategory").toggleClass("articleFaqCategory__hide");
    });


    if ($('.customText').length) {
        $('.customText').readmore({
            speed: 500,
            collapsedHeight: 160,
            lessLink: '<a href="#">Close</a>'
        });
    }

    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        }
    );
    wow.init();

    $('select').select2();

});


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    for (var i = 0; document.querySelectorAll('.workit').length > i; i++) {
        var elem = document.querySelectorAll('.workit')[i];
        var nc = "";
        var ts = getOffsetRect(elem).top - clientHeight() + 150;
        if (scrolled > ts && elem.getAttribute("data-animate") != 'true') {
            nc = "animate " + elem.getAttribute("class");
            elem.setAttribute("data-animate", "true");
            elem.setAttribute("class", nc);
        }
    }
};


function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {top: Math.round(top), left: Math.round(left)}
}

function showMore() {
    document.getElementById('toggleMore').classList.toggle('show');
    document.getElementById('toggleMore').classList.toggle('hide');
}


function changeValue(arr) {
    console.log(document.querySelectorAll('.digitPrice'));
    var arrOfDom = document.querySelectorAll('.digitPrice');
    for (var i = 0; i < arrOfDom.length; i++) {
        var dom = arrOfDom[i];
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        console.log(comma_separator_number_step)
        $(dom).animateNumber({
            number: arr[i],
            numberStep: function (now, tween) {
                var target = $(tween.elem);

                now = now.toFixed(2);

                target
                    .prop('number', 0) // keep current prop value
                    .text(now);
            }
        });
    }
}


function toggleContent(e, el) {
    console.log(e);

    switch (el.value) {
        case 'd20':
            changeValue([11.95, 16.95, 21.95]);
            break;
        case 'd25':
            changeValue([13.95, 18.95, 23.95]);
            console.log('d25');
            break;
        default:
            changeValue([0, 0, 0]);
            console.log('key undefined');
            break;
    }
}
