// Провірка підтримки webp, добавлення класу webp or no-webp
export function isWebp() {
    // Провірка підтримки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавлення класа webp or no-webp для body
    testWebp(function (support) {
       let className = support === true ? 'webp' : 'no-webp';
       document.documentElement.classList.add(className);
    });
}

/* Провірка мобільного браузера */
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавлення класа touch для HTML якщо браузер мобільний */
export function addTouchClass() {
	// Добавлення класа _touch для HTML якщо браузер мобільний
	if (isMobile.any()) document.documentElement.classList.add('touch');
}


