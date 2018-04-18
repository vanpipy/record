
(function SoundJS(global, AudioContext, Request) {
    'use strict';

    function SoundJS () {

        /*
         * @private
         * @param {Object} params
         */
        this.params = null;

        /*
         * @private
         * @param {AudioContextObject} context
         */
        this.context = null;

        /*
         * @private
         * @param {XMLHttpRequestObject} xhr
         */
        this.xhr = null;

        /*
         * @private
         * @param {} resource
         */
        this.resource = null;
    }

    SoundJS.prototype.create = function (options) {
        this.params = Object.assign(this.params, options);
        this.context = new AudioContext();
    };

    SoundJS.prototype.createMediaElementResource = function () {
        //TODO: get resource from element.
    };

    SoundJS.prototype.createBufferResource = function () {
        //TODO: request via xhr.
    };

    SoundJS.prototype.load = function (uri) {
        assert(uri, 'string|object');

        if (uri.nodeName === 'AUDIO') {
            this.createMediaElementResource();
        } else {
            this.createBufferResource();
        }
    };

    SoundJS.request = function (uri, options) {
        options = options ? options : {};
        var data = options.data ? options.data : null

        var r = new Request();

        r.responseType = 'arraybuffer';

        r.addEventListener('load', xhrLoadEvent, false);
        r.addEventListener('readystatechange', xhrStateChangeEvent, false);
        r.addEventListener('progress', xhrProgressEvent, false);

        r.open(options.method || 'GET', uri, true);

        r.send(data);

        return r;
    };

    function assert (variable, type) {
        //TODO: assert variable type needed.
    }

    function xhrLoadEvent (evt) {
        //TODO: loaded.
        //console.log(evt, 'loaded');
    }

    function xhrStateChangeEvent (evt) {
        //TODO: readyState changing.
        //console.log(evt, 'state changing', evt.currentTarget.readyState);
    }

    function xhrProgressEvent (evt) {
        //TODO: progress changing.
        //console.log(evt, 'progress', 'loaded: ' + evt.loaded, 'total: ' + evt.total);
    }

    function trim (string) {
        return string.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    global.SoundJS = SoundJS;
})(window, window.AudioContext || window.webkitAudioContext, XMLHttpRequest);
