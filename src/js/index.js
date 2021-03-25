import "./import/modules";
import noUiSlider from 'nouislider';
/**/
!function (e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e() }(function () { "use strict"; var o = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"]; function w(e) { return e.split("").reverse().join("") } function h(e, t) { return e.substring(0, t.length) === t } function f(e, t, n) { if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t) } function x(e) { return "number" == typeof e && isFinite(e) } function n(e, t, n, r, i, o, f, u, s, c, a, p) { var d, l, h, g = p, v = "", m = ""; return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function (e, t) { return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t) }(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m) } function r(e, t, n, r, i, o, f, u, s, c, a, p) { var d, l = ""; return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), d = !0), i && function (e, t) { return e.slice(-1 * t.length) === t }(p, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), f && (l = f(l)), !!x(l) && l)) } function i(e, t, n) { var r, i = []; for (r = 0; r < o.length; r += 1)i.push(e[o[r]]); return i.push(n), t.apply("", i) } return function e(t) { if (!(this instanceof e)) return new e(t); "object" == typeof t && (t = function (e) { var t, n, r, i = {}; for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1)if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) { if (!(0 <= r && r < 8)) throw new Error(n); i[n] = r } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) { if ("function" != typeof r) throw new Error(n); i[n] = r } else { if ("string" != typeof r) throw new Error(n); i[n] = r } return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), i }(t), this.to = function (e) { return i(t, n, e) }, this.from = function (e) { return i(t, r, e) }) } });
/**/

function menuMobUse() {
    var burger = document.querySelector('.header__burger');
    var nav = document.querySelector('.header__nav');
    var cat = document.querySelectorAll('.dropdown__header');
    var catMenu = document.querySelectorAll('.dropdown__menu');
    var menuItem = document.querySelectorAll('.header__menu-item');
    var banner = document.querySelector('.dropdown__banner');

    burger.addEventListener('click', () => {
        if (!nav.classList.contains('active')) {
            nav.classList.add('active');
            scrollHide('hide');
            burger.classList.add('active');
        }
        else {
            nav.classList.remove('active');
            banner.classList.remove('hide');
            cat.forEach((item) => {
                item.classList.remove('active');
                item.classList.remove('hide');
            });
            menuItem.forEach((item) => {
                item.classList.remove('hide');
            });
            scrollHide('show');
            burger.classList.remove('active');
        }
    });


    nav.addEventListener('click', (event) => {
        if (nav.classList.contains('active')) {
            cat.forEach((item) => {
                if (item == event.target && !item.classList.contains('active')) {
                    event.preventDefault();
                    item.classList.add('active');
                    item.classList.remove('hide');
                    var active = item;
                    cat.forEach(item => {
                        if (active != item) {
                            item.classList.add('hide');
                        }
                    });
                    banner.classList.add('hide');

                    menuItem.forEach((item) => {
                        if (!item.classList.contains('header__menu-item_with-child')) {
                            item.classList.add('hide');
                        }
                    });
                }
                else if (item == event.target && item.classList.contains('active')) {
                    event.preventDefault();
                    cat.forEach(item => {
                        if (active != item) {
                            item.classList.remove('hide');
                        }
                    });
                    item.classList.remove('active');

                    banner.classList.remove('hide');
                    menuItem.forEach((item) => {
                        item.classList.remove('hide');
                    });

                }

            });
        }
    });
}
function rangeSettings() {

    var inputMin = document.getElementById('range-input-min');
    var inputMax = document.getElementById('range-input-max');
    if (inputMin && inputMax) {
        var min = parseInt(inputMin.value, 10);
        var max = parseInt(inputMax.value, 10);



        var handlesSlider = document.getElementById('range');

        noUiSlider.create(handlesSlider, {
            start: [min, max],
            connect: true,
            range: {
                'min': [min],
                'max': [max]
            },
            format: wNumb({
                decimals: 0,
                thousand: ' ',
                suffix: ' ₽'
            })
        });



        handlesSlider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];

            if (handle) {
                inputMax.value = value;
            } else {
                inputMin.value = value;
            }
        });

        inputMin.addEventListener('change', function () {
            handlesSlider.noUiSlider.set([this.value, null]);
        });

        inputMax.addEventListener('change', function () {
            handlesSlider.noUiSlider.set([null, this.value]);
        });
    }
}
/*selects*/
function selectShow() {
    var container = document.querySelectorAll('.form-select');
    var body = document.getElementsByTagName('body')[0];

    if (container) {
        container.forEach(item => {

            var select = item.querySelector('.hidden-select');
            var selectedText = item.querySelector('.form-select__selected');
            var values = item.querySelectorAll('.form-select__option');
            var list = item.querySelector('.form-select-list');
            body.addEventListener('click', function (e) {
                if (item != e.target.closest('.form-select')) {
                    list.classList.remove('active');
                    selectedText.classList.remove('active');
                }
            });
            selectedText.addEventListener('click', function (e) {
                showSelectList(this, list);

            });

            values.forEach((item, i) => {
                item.addEventListener('click', function () {
                    var text = this.innerHTML;
                    selectedText.innerHTML = text;
                    select.options[i].selected = true;
                    var event = new Event('change');
                    select.dispatchEvent(event);
                    showSelectList(selectedText, list);
                });
            });

            select.addEventListener('reset', () => {
                selectedText.innerHTML = select.value;
            });
        });
    }
}

function showSelectList(span, list) {
    if (!span.classList.contains('active')) {
        list.classList.add('active');
        span.classList.add('active');
    }
    else {
        list.classList.remove('active');
        span.classList.remove('active');
    }
}

/*scroll hide/show*/

function scrollHide(inf) {
    var html = document.getElementsByTagName('html')[0];
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (inf == 'hide') {
        html.classList.add('noscroll');
        html.style.paddingRight = scrollbarWidth + "px";
    }
    else if (inf == 'show') {
        html.classList.remove('noscroll');
        html.style.paddingRight = 0;
    }
    else {
        html.classList.remove('noscroll');
        html.style.paddingRight = 0;
    }
}


/*cart*/

function cartBtnClick() {
    var cartBlock = document.querySelectorAll(".add-cart");

    cartBlock.forEach(item => {
        var cartMinus = item.querySelector('.cart-less'),
            cartPlus = item.querySelector('.cart-more'),
            cartCount = item.querySelector('.cart-count'),
            cartBtn = item.querySelector('.add-to-cart'),
            cardQuantity = item.querySelector('.card-quantity');
        item.addEventListener('click', function (e) {
            if (cartBtn) {
                if (e.target.closest('.add-to-cart') == cartBtn && !item.classList.contains('card__add-cart')) {
                    cartBtn.classList.add('hide');
                    cardQuantity.classList.add('show');
                }
                if (e.target.closest('.add-to-cart') == cartBtn && document.documentElement.clientWidth < 769) {
                    cartBtn.classList.add('hide');
                    cardQuantity.classList.add('show');
                }
            }
        });
        cartMinus.addEventListener('click', () => {
            if (parseInt(cartCount.value, 10) > 1) {
                var val = parseInt(cartCount.value, 10);
                val--;
                cartCount.value = val;
            }
            else {
                if (!item.classList.contains('card__add-cart') || document.documentElement.clientWidth < 769) {
                    if (cartBtn) {
                        cartBtn.classList.remove('hide');
                        cardQuantity.classList.remove('show');
                    }
                }
            }

        });
        cartPlus.addEventListener('click', () => {
            var val = parseInt(cartCount.value, 10);
            val++;
            cartCount.value = val;
        });


    });
}

function showCart() {
    var cart = document.querySelector('.cart');
    var cartIcon = document.querySelector('#cart-icon');
    var resumeBtn = document.querySelector('.cart__resume');

    if (cart && cartIcon) {
        cartIcon.addEventListener('click', function () {
            if (cart.classList.contains('active')) {
                cart.classList.remove('active');
                scrollHide('show');
                bodyShadow(false);

            }
            else {
                cart.classList.add('active');
                scrollHide('hide')
                bodyShadow(true);
            }

        });
    }
    resumeBtn.addEventListener('click', () => {
        cart.classList.remove('active');
        scrollHide('show');
        bodyShadow(false);
    });

}

function showTabs() {
    var tabsItem = document.querySelectorAll('.card__tabs-item');
    var tabsText = document.querySelectorAll('.card__tabs-text');
    var tabsTitle = document.querySelectorAll('.card__tabs-title');
    var tabsList = document.querySelector('.card__tabs-list');
    var cloth = document.querySelector('.cloth-card');

    if (tabsTitle.length > 0) {
        var heightList = tabsList.offsetHeight;
        if (document.documentElement.clientWidth > 1280) {
            tabsList.style.height = tabsText[0].offsetHeight + heightList + "px";
        }

        tabsItem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                if (document.documentElement.clientWidth > 1280) {
                    tabsItem.forEach(text => {
                        text.classList.remove('active');
                    });
                    item.classList.add('active');
                    var heightText = tabsText[i].offsetHeight;
                    tabsList.style.height = heightText + heightList + "px";

                    if (cloth) {
                        sidebar.updateSticky();
                    }
                }
                else {

                    if (e.target.closest('.card__tabs-item') && item.classList.contains('active')) {
                        item.classList.remove('active');

                    }
                    else {
                        item.classList.add('active');

                    }
                }
            });
        });
    }
    if (cloth && document.documentElement.clientWidth > 1280) {
        sidebar.updateSticky();
    }

}





/*card cloth content scroll*/
var cloth = document.querySelector('.cloth-card');
if (cloth && document.documentElement.clientWidth > 1280) {
    var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '.cloth-card__container',
        innerWrapperSelector: '.cloth-card__content-wrapper',
        topSpacing: 20,
        bottomSpacing: 20
    });
}


/*card sizes*/

function showSizes() {
    var sizeRadio = document.querySelectorAll('.cloth-checkbox');
    var sizeTable = document.querySelectorAll('.card__size-wrapper-item');
    if (sizeTable.length > 0) {
        sizeRadio.forEach((item, i) => {
            item.addEventListener('click', () => {
                sizeTable.forEach(st => {
                    st.classList.remove('active');
                });
                sizeTable[i].classList.add('active');
            });
        });
    }

}
/*sliders*/
function Sliders() {
    if (document.documentElement.clientWidth < 960) {
        $(".cosm-popular__slider-js").owlCarousel({
            margin: 10,
            loop: true,
            autoWidth: true,
            items: 3,
            nav: false,
            dots: true
        });
        $(".cloth-card__pic-slider_js").owlCarousel({
            margin: 0,
            loop: true,
            items: 1,
            nav: false,
            dots: true
        });
        $(".cat2-goods__list-js").owlCarousel({
            margin: 10,
            loop: true,
            autoWidth: true,
            items: 3,
            nav: false,
            dots: true
        });
    }

}


function cartOrderStick() {
    var cartBtn = document.querySelector('.card__order');
    var cat = document.querySelector('.card__category');



    if (cartBtn && document.documentElement.clientWidth < 769) {
        var left = cartBtn.getBoundingClientRect().left;
        var catMarg = parseInt(getComputedStyle(cat).marginBottom, 10);

        var heightBtn = cartBtn.offsetHeight;


        window.addEventListener('scroll', function () {
            var bottom = cartBtn.getBoundingClientRect().top + heightBtn;
            var catBottom = cat.getBoundingClientRect().top + cat.offsetHeight;

            if (bottom < 0 && !cartBtn.classList.contains('fixed')) {
                cartBtn.style.paddingLeft = left + "px";
                cartBtn.classList.add("fixed");
                cartBtn.style.height = '65px';
                cat.style.marginBottom = catMarg + heightBtn + 'px';
            }
            else if (catBottom > 0) {
                cartBtn.classList.remove("fixed");
                cartBtn.style.height = 'auto';
                cartBtn.style.paddingLeft = "0px";
                cat.style.marginBottom = catMarg + 'px';
            }

        });
    }
}
/*filter-mob*/

function filterMobOpen() {
    var filter = document.querySelector('.filter');
    var filterShowBtn = document.querySelector('.filter__btn');
    var filterWrapper = document.querySelector('.filter__wrapper');
    var result = document.querySelector('.filter__result-btn');
    if (filter) {
        filterShowBtn.addEventListener('click', () => {
            if (!filterWrapper.classList.contains('active')) {
                filterWrapper.classList.add('active');
                scrollHide('hide');
                currentHide();
            }
        });

        var close = filterWrapper.querySelector('.popup__close');
        close.addEventListener('click', () => {
            filterWrapper.classList.remove('active');
            scrollHide('show');
            currentHide();
        });
        result.addEventListener('click', () => {
            filterWrapper.classList.remove('active');
            scrollHide('show');
            currentHide();
        });
    }
}
/*filter functions*/
var attrArray = [];
function filterMobWork() {
    var filter = document.querySelector('.filter');

    if (filter) {
        var inputs = filter.querySelectorAll('input');
        var selects = filter.querySelectorAll('select');
        var range = document.getElementById('range');
        if (range) {
            range.noUiSlider.on('change', function () {
                ListItemCreate(`Цена: от ${range.noUiSlider.get()[0]}`, `до ${range.noUiSlider.get()[1]}`, `range`, true);

            });
        }

        inputs.forEach((item, i) => {
            item.addEventListener('change', () => {
                if (item.getAttribute('type') != 'text') {
                    item.setAttribute('data-id', `inp-${i}`);
                    ListItemCreate(item.getAttribute('name'), item.value, `inp-${i}`, item.checked);
                }
                else {
                    ListItemCreate(`Цена: от ${range.noUiSlider.get()[0]}`, `до ${range.noUiSlider.get()[1]}`, `range`, true);
                }
            });
        });
        selects.forEach((item, i) => {
            item.addEventListener('change', () => {
                var selected = item.querySelector('option:checked');
                item.setAttribute('data-id', `opt-${i}`);
                ListItemCreate(selected.getAttribute('name'), item.value, `opt-${i}`, true);

            });
        });
    }
    /*delete filters*/
    let resBtn = document.querySelector('.filter__reset-btn');
    var range = document.getElementById('range');
    let currList = document.querySelector('.filter__current-list');

    if (resBtn && range) {
        resBtn.addEventListener('click', () => {
            var listItem = document.querySelectorAll('.filter__current-item');
            range.noUiSlider.reset();
            selects.forEach(item => {
                item.options[0].selected = true;

                var event = new Event('reset');
                item.dispatchEvent(event);
            });
            inputs.forEach(item => {
                if (item.getAttribute('type') == 'checkbox' || item.getAttribute('type') == 'radio') {
                    item.checked = false;
                }
            });
            listItem.forEach(item => {
                item.remove();
            });
            currentHide();
        });

    }
    if (currList) {
        currList.addEventListener('click', function (e) {
            var list = document.querySelectorAll('.filter__current-item');
            list.forEach(item => {
                if (e.target == item) {
                    let data = item.getAttribute('data-id');
                    item.remove();
                    attrArray.splice(attrArray.indexOf(data), 1);

                    if (data == 'range') {
                        range.noUiSlider.reset();

                    }
                    selects.forEach((sel, i) => {
                        if (sel.getAttribute('data-id') == data) {
                            sel.options[0].selected = true;
                            var event = new Event('reset');
                            sel.dispatchEvent(event);
                        }
                    });
                    inputs.forEach((inp, i) => {
                        if (inp.getAttribute('data-id') == data) {
                            inp.checked = false;

                        }
                    });
                }
            });
            currentHide();
        });
    }

}

function currentHide() {
    let list = document.querySelectorAll('.filter__current-item');
    let wrap = document.querySelector('.filter__current');
    let filter = document.querySelector('.filter__wrapper');
    if (wrap && filter.classList.contains('active')) {
        if (list.length == 0) {
            wrap.style.display = "none";
        }
        else {
            wrap.style.display = "block";
        }
    }
    else if (wrap) {
        wrap.style.display = "none";
    }

}
/*create*/

function ListItemCreate(title, val, attr, cond) {
    var listItem = document.querySelectorAll('.filter__current-item');
    let currList = document.querySelector('.filter__current-list');
    if (listItem.length == 0) {
        var id = attr;
        attrArray.push(id);
        let li = document.createElement('li');
        li.className = "filter__current-item";
        li.setAttribute('data-id', attr);
        li.innerHTML = `${title} ${val}`;
        currList.append(li);
    }
    else {
        listItem.forEach(item => {
            if (attrArray.indexOf(attr) == -1 && cond != false) {
                attrArray.push(attr);
                let li = document.createElement('li');
                li.className = "filter__current-item";
                li.setAttribute('data-id', attr);
                li.innerHTML = `${title} ${val}`;
                currList.append(li);
            }
            else if (item.getAttribute('data-id') == attr && cond == true) {
                item.innerHTML = `${title} ${val}`;
            }
            else if (item.getAttribute('data-id') == attr && cond == false) {
                attrArray.splice(attrArray.indexOf(attr), 1);
                item.remove();

            }

        });
    }
    currentHide();
}




/*about questions*/

function showAnswer() {
    var wrapper = document.querySelectorAll('.about-questions__wrapper');
    var popup = document.querySelectorAll('.about-questions__popup');
    if (wrapper.length > 0) {
        popup.forEach(i => {
            i.addEventListener('click', function (e) {
                if (e.target == this) {
                    e.target.closest('.about-questions__wrapper').classList.remove('active');
                    scrollHide('show');
                }
            });
        });
        wrapper.forEach(item => {
            var close = item.querySelector('.popup__close');
            item.querySelector('.about-questions__header').addEventListener('click', function () {
                item.classList.add('active');
                scrollHide('hide');
            });
            close.addEventListener('click', function (e) {
                item.classList.remove('active');
                scrollHide('show');
            });
        });
    }

}
function hideBanner() {
    var banner = document.querySelector('.about-banner');
    var video = document.querySelector('.about-banner__video');
    if (banner) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
                banner.classList.add('hidden');
                video.pause();
            }
            else {
                banner.classList.remove('hidden');
                video.play();
            }
        });
    }

}
/*header dropdown */

function headerDrop() {
    let header = document.querySelector('.header');
    let menuItem = document.querySelectorAll('.header__menu-item_with-child');

    menuItem.forEach(item => {
        item.addEventListener("mouseover", function () {
            bodyShadow(true)
        });
        item.addEventListener("mouseout", function () {
            bodyShadow(false)
        });
    });
}


/*smooth scroll*/
function smoothScroll() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
/*header scroll*/

function headerScroll() {
    let header = document.querySelector('.header');
    let body = document.querySelector('body');
    let lastScrollTop = 0;

    document.addEventListener('scroll', function () {
        let top = window.pageYOffset;

        if (lastScrollTop > top && window.pageYOffset > 0) {
            body.classList.add('menuscroll');
            header.classList.add('menuscroll');

        }

        else {
            body.classList.remove('menuscroll');
            header.classList.remove('menuscroll');
        }
        lastScrollTop = top;
    });
}
/*shadow*/
function bodyShadow(condition) {
    let shadow = document.querySelector('.b-shadow');
    let cart = document.querySelector('.cart');
    if (condition == true) {
        shadow.classList.add('active');
    }
    else if (!cart.classList.contains('active')) {
        shadow.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    menuMobUse();
    rangeSettings();
    selectShow();
    cartBtnClick();
    showTabs();
    Sliders();
    cartOrderStick();
    showSizes();
    showAnswer();
    hideBanner();
    showCart();
    filterMobWork();
    filterMobOpen();
    currentHide();
    smoothScroll();
    headerDrop();
    headerScroll();


});

window.onresize = function () {
    //showTabs();
    Sliders();
    //cartOrderStick();

};

