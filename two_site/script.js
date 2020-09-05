function dbl_click(opencom) {
    location.href = href;
}

// 클릭 이벤트 온 오프
$(function () {
    $('.closeButton').click(function () {
        $('.overlay-computer').hide();
    });
    $('.folder-computer').click(function () {
        $('.overlay-computer').show();
    });
});

$(function () {
    $('.head__circle--close').click(function () {
        $('.terminal').hide();
    });
    $('.terminal-computer').click(function () {
        $('.terminal').show();
    });
});
// 클릭 이벤트 온 오프

var aText = new Array(
    "<span class='terminal__text__span'>hi, i'm haeryun</span>",
    "<span class='terminal__text__span'>Dreaming of a Web developer</span>",
    "<span class='terminal__text__span'>be studying steadily!</span>",
    "<span class='terminal__text__span'>and build beautiful websites</span>",
    "<span class='terminal__text__span'>i drink a lot of HOT SIX</span>",
    "<span class='terminal__text__span'># # # # # # # # # #</span>",
    "<span class='terminal__text__span'>see my <a href='http://smap.or.kr/kimhaeryun/re_site/'>portfolio</a> or profile on <a href='https://github.com/kimhaeryun'>github</a>",
    "<span class='terminal__text__span'>and</span>",
    "<span class='terminal__text__span'>read my <a href='https://kimhaeryun.blogspot.com/'>blog</a> and <a href='https://www.facebook.com/minjun960'>facebook</a></span> and <a href='https://www.instagram.com/kim_haeryun/'>Instagram</a></span>"
);
var iSpeed = 50;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 200);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

$(function () {
    $(".terminal").draggable();
});
$(function () {
    $(".overlay-computer").draggable();
});

// const openButton = document.getElementById("folder-computer");
// const modal = document.querySelector(".overlay-computer");
// const overlay = modal.querySelector(".fa fa-times");
// const closeBtn = modal.querySelector("closeercam");
// const openModal = () => {
//     modal.classList.remove("folder-computer");
// }
// const closeModal = () => {
//     modal.classList.add("closeercam");
// }
// overlay.addEventListener("click", closeModal);
// closeBtn.addEventListener("click", closeModal);
// openButton.addEventListener("click", openModal);