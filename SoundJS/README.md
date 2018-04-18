# Web Audio API

1. Create audio context
2. Inside the context, create sources - such as `<audio>`, oscillator stream.
3. Create effect nodes, such as reverb, biquad filter, panner, compressor.
4. Choose final destination of audio, for example your system speaker.
5. Connect the sources up to the effects, and the effects to the destination.


    ---------------------------------------------------------
    |                   Audio Context                       |
    |                                                       |
    |   ----------      -----------      ---------------    |
    |   | Inputs | ---> | Effects | ---> | Destination |    |
    |   ----------      -----------      ---------------    |
    |                                                       |
    ---------------------------------------------------------


# Web Audio API Interfaces


### Audio data: what's in a sample
When an audio signal is processed, sampling means the conversion of a continuous signal to a discrete signal; or put another way, a coutinuous sound wave, such as a band playing live, is converted to a sequence of samples( a discrete-time signal) that allow a computer to handle the audio in distinct blocks.

### The concept of Audio buffers: frames, samples and channels
An AudioBuffer takes as its parameters a number of channels, a length, meaning the number of sample frames inside the buffer, and a sample rate, which is the number of sample frames played per second.

A sample is a single float32 value that represents the value of the audio stream at each specific point in time, in a specific channel(left or right, if in the case of stereo).

A frame, or sample frame, is the set of all values for all channels that will paly at a specific point in time: all the samples of all the channels that play at the same time(two for a stereo sound, six for 5.1 etc.)

The sample rate is the number of those samples(or frames, since all samples of a frame paly at the same time) that will play in one second, measured in Hz. the higher the sample rate, the better the sound quality.

# Implement

    //Set audio context.
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    //Set effects middleware.
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    var analyser = audioCtx.createAnalyser();

    var source = audioCtx.createMediaElementSource(DOM);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);


