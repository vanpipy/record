'use strict';

(function() {

    var wave = WaveSurfer.create({
        container: '#wave',
        waveColor: 'black',
        progressColor: 'white',
        barWidth: 1
    });

    //That is werid, it always an async XMLHttoRequest loading.
    //No matter url or audio element.
    wave.load('secret_base.mp3');

    //SoundJS.request('secret_base.mp3');
    var sound = new SoundJS();

    sound.create({
        canvas: document.getElementById('canvas')
    });

    sound.load('secret_base.mp3');
})()
