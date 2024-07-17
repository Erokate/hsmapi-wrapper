import { 
    husam,
    morseCode,
    drake,
    birdFacts,
    mock,
    showerThoughts,
    superScript,
    struck,
    counter
} from "../dist/index.mjs";
import fs from "fs";

async function randomHusam(bool) {
    const hsm = await husam(bool)
    if(bool === true) {
        return hsm
    }
    console.log(hsm);
}

async function morse() {
    const morse = await morseCode('SOS')
    console.log(morse);
}

async function drakeMeme() {
    const meme = await drake('Other API', 'HSMApi')
    return meme
}

async function facts() {
    const fact = await birdFacts()
    console.log(fact);
}

async function thoughts() {
    const thought = await showerThoughts()
    console.log(thought);
}

async function mocked() {
    const text = await mock('HSMApi')
    console.log(text);
}

async function script() {
    const text = await superScript('HSMApi')
    console.log(text);
}

async function strucked() {
    const text = await struck('HSMApi')
    console.log(text);
}

/**
 * 
 * @param {string} e 
 * @param {{ themeName: string, buffer?:boolean }?} b
 * @returns 
 */
async function Counter(e, b) {
    const ct = await counter(e, b);
    console.log(ct);
    return ct
}

// morse()
// mocked()
// script()
// strucked()
// facts()
// thoughts()
// randomHusam() // URL
// randomHusam(true).then(hsm => {
//     const buffer = Buffer.from(hsm)
//     fs.writeFile('./test/assets/husam.jpeg', buffer, (err) => {
//         if(!err) console.log(`BAŞARILI`);
//     })
// }) // Buffer
// drakeMeme().then(meme => {
//     const buffer = Buffer.from(meme)
//     fs.writeFile('./test/assets/drake.jpeg', buffer, (err) => {
//         if(!err) console.log(`BAŞARILI`);
//     })
// })
// Counter('erokami')
// Counter('erokami', {buffer: false}).then(data => {
//     console.log(data);
//      const buffer = Buffer.from(data)
//      fs.writeFile('./test/assets/ctest.svg', buffer, (err) => {
//          if(!err) console.log(`BAŞARILI`);
//      })
// })