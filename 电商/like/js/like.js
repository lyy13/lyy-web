// window.onload = function () {
//     var leftBtn = document.getElementsByClassName('left')[0]   
//     var rightBtn = document.getElementsByClassName('right')[0]   
//     var itemList = document.getElementsByClassName('item')
//     var _self = this
//     EventUtil.addHandler(leftBtn, 'click', function (event) {        // 点左键
//         var nextItem = ''
//         for (var i = 0, len = itemList.length; i < len; i++) {
//             if (itemList[i].classList.contains('active')) {
//                 itemList[i].classList.remove('active')
//                 if (i != 0) {
//                     nextItem = itemList[i].previousElementSibling
//                 } else {
//                     nextItem = itemList[i].parentNode.lastElementChild
//                 }
//                 nextItem.classList.add('active')
//                 break
//             }
//         }
//     });


//     EventUtil.addHandler(rightBtn, 'click', Document.nextPic(event));

//     function nextPic () {
//         var nextItem = ''
//         for (var i = 0, len = itemList.length; i < len; i++) {
//             if (itemList[i].classList.contains('active')) {
//                 itemList[i].classList.remove('active')
//                 if (i != len - 1) {
//                     nextItem = itemList[i].nextElementSibling
//                 } else {
//                     nextItem = itemList[i].parentNode.firstElementChild
//                 }
//                 nextItem.classList.add('active')
//                 break
//             }
//         }
//     }

//     var setSlide = function () {
//         var timer = setInterval(itemList, 3000);
//         // 设置鼠标移入移出事件
//         EventUtil.addHandler(itemList, "mouseover", function () {
//             clearTimeout(timer);
//         })
//         EventUtil.addHandler(itemList, "mouseout", function () {
//             timer = setInterval(carselObj.nextPic, 3000);
//         })
//     }()


// }


var MVC = {};

var EventUtil = {
    getEvent: function (event) {
        return event ? event : window.event;
    },

    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getTarget: function (event) {
        return event.target || window.srcElement;
    }
};

MVC.controller = function () {
    var C = {
        start: function () {  // 渲染视图
            this.__listen();  // 添加监听事件
        },
        __listen: function () {
            var leftBtn = document.getElementsByClassName('left')[0]
            var rightBtn = document.getElementsByClassName('right')[0]
            var itemList = document.getElementsByClassName('item')

            EventUtil.addHandler(leftBtn, 'click', function (event) {        // 点左键
                var nextItem = ''
                for (var i = 0, len = itemList.length; i < len; i++) {
                    if (itemList[i].classList.contains('active')) {
                        itemList[i].classList.remove('active')
                        if (i != 0) {
                            nextItem = itemList[i].previousElementSibling
                        } else {
                            nextItem = itemList[i].parentNode.lastElementChild
                        }
                        nextItem.classList.add('active')
                        break
                    }
                }
            });

            EventUtil.addHandler(rightBtn, 'click', function () {
                var itemList = document.getElementsByClassName('item')
                var nextItem = ''
                for (var i = 0, len = itemList.length; i < len; i++) {
                    if (itemList[i].classList.contains('active')) {
                        itemList[i].classList.remove('active')
                        if (i != len - 1) {
                            nextItem = itemList[i].nextElementSibling
                        } else {
                            nextItem = itemList[i].parentNode.firstElementChild
                        }
                        nextItem.classList.add('active')
                        break
                    }
                }
            });

            function nextPic() {
                console.log('1')
                var itemList = document.getElementsByClassName('item')
                var nextItem = ''
                for (var i = 0, len = itemList.length; i < len; i++) {
                    if (itemList[i].classList.contains('active')) {
                        itemList[i].classList.remove('active')
                        if (i != len - 1) {
                            nextItem = itemList[i].nextElementSibling
                        } else {
                            nextItem = itemList[i].parentNode.firstElementChild
                        }
                        nextItem.classList.add('active')
                        break
                    }
                }
            }

            var setSlide = function () {
                var timer = setInterval(nextPic, 3000);
                var list = document.getElementById("it");
                var listChlidren = list.getElementsByTagName("li");
                for (var i = 0, len = listChlidren.length; i < len; i++) {
                    listChlidren[i].onmouseover = function () {
                        clearTimeout(timer);
                        console.log(2);
                    }
                    listChlidren[i].onmouseout = function () {
                        timer = setInterval(nextPic, 5000);
                    }
                }

                var list1 = document.getElementById("ib");
                var listChlidren1 = list1.getElementsByTagName("li");
                for (var j = 0, len = listChlidren1.length; j < len; j++) {
                    listChlidren1[j].onmouseover = function () {
                        clearTimeout(timer);
                        console.log(2);
                    }
                    listChlidren1[j].onmouseout = function () {
                        timer = setInterval(nextPic, 5000);
                    }
                }
                // 设置鼠标移入移出事件
            //     EventUtil.addHandler(itemList, "mouseover", function () {
            //         console.log("2")
            //         clearTimeout(timer);
            //     })
                // EventUtil.addHandler(itemList, "mouseout", function () {
                //     console.log("3")
                //     timer = setInterval(nextPic, 5000);
                // })
            }()
        },

    }
    return C
}()

var C = MVC.controller;
window.onload = function () {
    C.start();
    $(window).scroll(function () { 
  var menu_top = $('#menu_wrap').offset().top; 
  if ($(window).scrollTop() >= menu_top) { 
  $('.menu').addClass('menuFixed') 
  } 
  else { 
  $('.menu').removeClass('menuFixed') 
  } 
 }); 
}


