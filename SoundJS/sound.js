
(function SoundJS(global, AudioContext, XMLHttpRequest) {
    'use strict';

    function SoundJS () {

        /*
         * @private
         * @param {Object} params
         */
        this.params = {};

        /*
         * @private
         * @param {AudioContextObject} context
         */
        this.context = null;

        /*
         * @private
         * @param {} resource
         */
        this.resource = null;

        this.analyser = null;

        this.piexlRatio = window.devicePixelRatio;

        this.peaks = [];

        this.canvasPeaks = [];
    }

    SoundJS.prototype.create = function (options) {
        this.params = Object.assign(this.params, options);
        this.context = new AudioContext();
        this.resource = this.context.createBufferSource();
        this.analyser = this.context.createAnalyser();
        this.canvas = this.params.canvas;
        this.canvasContext = this.canvas.getContext('2d');
        this.barWidth = 1;
    };

    SoundJS.prototype.createBufferResource = function (uri) {
        this.xhr(uri);
    };

    SoundJS.prototype.extractBuffer = function () {
        var width = this.canvas.width * this.piexlRatio;
        var start = 0;
        var end = width;

        var buffer = this.resource.buffer;
        var duration = this.resource.buffer.duration;


        var sampleSize = buffer.length / width;
        var sampleStep = ~~(sampleSize / 10);
        var channel = buffer.numberOfChannels;

        var c = 0;

        for (; c < channel; c++) {
            var peaks = this.peaks[c] || [];
            var channelData = buffer.getChannelData(c);
            var i = start;

            this.peaks[c] = peaks;
            peaks[2 * (width - 1)] = 0;
            peaks[2 * (width - 1) - 1] = 0;

            for (; i < end; i++) {
                var sampleStart = ~~(i * sampleSize);
                var sampleEnd = ~~(sampleStart + sampleSize);
                var max = 0;
                var min = 0;
                var k = sampleStart;

                for (; k < sampleEnd; k += sampleStep) {
                    var value = channelData[k];

                    if (value > max) {
                        max = value;
                    }

                    if (value < min) {
                        min = value;
                    }
                }

                peaks[2 * i] = max;
                peaks[2 * i + 1] = min;
            }
        }

        return this.drawBuffer(peaks, width, start, end);
    };

    SoundJS.prototype.drawBuffer = function (peaks, width, start, end) {
        var step = this.piexlRatio + this.barWidth;
        var peaks = this.mergePeaks();
        var height = this.canvas.height / 2;

        for (; start < end; start += step) {
            var peak = peaks[Math.floor(start)];
            var h = Math.round(peak / 1 * height);
            this.canvasPeaks.push([start, height - h / 2, this.barWidth * this.piexlRatio, h]);
        }

        return this.drawCanvas();
    };

    SoundJS.prototype.drawCanvas = function () {
        var peaks = this.canvasPeaks;
        var i = 0;
        var l = peaks.length;

        for (; i < l; i++) {
            this.canvasContext.fillRect(peaks[i][0], peaks[i][1], peaks[i][2], peaks[i][3]);
        }
    }

    SoundJS.prototype.mergePeaks = function () {
        var i = 0;

        var peakOne = this.peaks[0];
        var peakTwo = this.peaks[1];

        for (var l = peakOne.length; i < l; i++) {
            if (peakOne[i] > 0 && peakTwo[0] > 0 && peakOne[i] < peakTwo[i]) {
                peakOne[i] = peakTwo[i];
            }

            if (peakOne[i] < 0 && peakTwo[0] < 0 && peakOne[i] > peakTwo[i]) {
                peakOne[i] = peakTwo[i];
            }
        }

        return peakOne;
    };

    SoundJS.prototype.onLoad = function (e) {
        var self = this;

        this.context.decodeAudioData(this.request.response, function (buffer) {
            self.resource.buffer = buffer;

            self.resource.connect(self.analyser);
            self.resource.loop = true;

            self.extractBuffer();
        });
    };

    SoundJS.prototype.onProgress = function (e) {
        //TODO: Listen the progress.
    };

    SoundJS.prototype.load = function (uri) {
        this.createBufferResource(uri);
    };

    SoundJS.prototype.xhr = function (uri, options) {
        options = options ? options : {};
        var data = options.data ? options.data : null

        this.request = new XMLHttpRequest();

        var r = this.request;

        r.responseType = 'arraybuffer';

        r.addEventListener('load', this.onLoad.bind(this), false);
        //r.addEventListener('readystatechange', this.onStateChange, false);
        r.addEventListener('progress', this.onProgress.bind(this), false);

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
