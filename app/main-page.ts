import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech'

export function speak() {
    let TTS: TNSTextToSpeech = new TNSTextToSpeech();

    TTS.speak({
        text: "Hello egg head",
        speakRate: 0.48,
        volume: 1.0,
        language: "en-US",
        finishedCallback: function () {
            alert("Done speaking.");
        }
    })
}