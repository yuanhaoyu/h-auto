(function (win, doc) {
    // object check
    if (!win.H_AUTO_CONFIG) {
        win.H_AUTO_CONFIG = {}
    }
    // size check
    if (!win.H_AUTO_CONFIG.size) {
        win.H_AUTO_CONFIG.size = 100;
    } else {
        if (typeof win.H_AUTO_CONFIG.size !== 'number') {
            throw ('type error: win.H_AUTO_CONFIG.size must be number');
            return false;
        }
    }
    // important check
    if (win.H_AUTO_CONFIG.important === undefined) {
        win.H_AUTO_CONFIG.important = true;
    } else {
        if (typeof win.H_AUTO_CONFIG.important !== 'boolean') {
            throw ('type error: win.H_AUTO_CONFIG.important must be boolean');
            return false;
        }
    }
    // rotate check
    if (win.H_AUTO_CONFIG.rotate === undefined) {
        win.H_AUTO_CONFIG.rotate = true;
    } else {
        if (typeof win.H_AUTO_CONFIG.rotate !== 'boolean') {
            throw ('type error: win.H_AUTO_CONFIG.rotate must be boolean');
            return false;
        }
    }
    var docEle = doc.documentElement,
        evt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
        first = true,
        fn = function () {
            if (first) {
                var width = docEle.clientWidth;
                var remSize = win.H_AUTO_CONFIG.size * 2 * (width / 750);
                var remtype = win.H_AUTO_CONFIG.important ? 'px!important' : 'px';
                if (win.H_AUTO_CONFIG.max) {
                    remSize = remSize > win.H_AUTO_CONFIG.max ? win.H_AUTO_CONFIG.max : remSize;
                }
                width && (docEle.setAttribute('style', 'font-size:' + remSize + remtype));
                first = false;
            } else {
                setTimeout(function () {
                    var width = docEle.clientWidth;
                    var remSize = win.H_AUTO_CONFIG.size * 2 * (width / 750);
                    var remtype = win.H_AUTO_CONFIG.important ? 'px!important' : 'px';                    
                    if (win.H_AUTO_CONFIG.max) {
                        remSize = remSize > win.H_AUTO_CONFIG.max ? win.H_AUTO_CONFIG.max : remSize;
                    }
                    width && (docEle.setAttribute('style', 'font-size:' + remSize + remtype));
                }, 17)
            }
        }
    if (win.H_AUTO_CONFIG.rotate) {
        win.addEventListener(evt, fn, false);
    }    
    doc.addEventListener("DOMContentLoaded", fn, false);
}(window, document));
