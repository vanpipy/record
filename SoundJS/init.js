'use strict';

(function() {

    var wave = WaveSurfer.create({
        container: '#wave',
        waveColor: 'black',
        progressColor: 'white',
    });

    //That is werid, it always an async XMLHttoRequest loading.
    //No matter url or audio element.
    wave.load('secret_base.mp3');

    //SoundJS.request('secret_base.mp3');

})()
