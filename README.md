# HSMApi Wrapper <!-- omit from toc -->

A HSMApi wrapper for node.js
<div  align="center">
	<h1>HSMApi Wrapper</h1>
	<div>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://img.shields.io/npm/dt/hsmapi?style=for-the-badge&logo=npm" alt="NPM Downloads" /></a>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://img.shields.io/npm/v/hsmapi?style=for-the-badge&logo=npm" alt="NPM Version" /></a>
		<a href="https://api.hsmsoftware.com/v1/"><img src="https://img.shields.io/website?url=https%3A%2F%2Fapi.hsmsoftware.com%2Fv1%2F&style=for-the-badge&label=API%20STATUS&link=https%3A%2F%2Fapi.hsmsoftware.com%2Fv1%2F" /></a>
	</div>
	<div>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://nodei.co/npm/hsmapi.png?downloads=true" alt="NPM Banner"></a>
	</div>
</div>

## Installation
`npm install hsmapi`

- [Installation](#installation)
- [Usage/Examples](#usageexamples)
  - [Normal usage example:](#normal-usage-example)
  - [Discord, random text example:](#discord-random-text-example)
  - [Discord, text example:](#discord-text-example)
  - [Discord, image example:](#discord-image-example)
    - [With image URL:](#with-image-url)
    - [With ArrayBuffer:](#with-arraybuffer)
  - [Counter usage example:](#counter-usage-example)
    - [Discord, string response](#discord-string-response)
    - [Discord, ArrayBuffer response:](#discord-arraybuffer-response)
- [Functions](#functions)
  - [Random](#random)
  - [Image](#image)
  - [Types](#types)
  - [Counter](#counter)
- [Support and Feedback](#support-and-feedback)


## Usage/Examples

### Normal usage example:
```javascript
import { morse } from 'hsmapi'

async function test() {
  console.log(await morse('SOS'))
}

test()
```

### Discord, random text example:
```javascript
const discord = require('discord.js')
const { showerThoughts } = require('hsmapi')
// ...
const thought = await showerThoughts()
message.channel.send(thought)
```

### Discord, text example:
```javascript
const discord = require('discord.js')
const { morseCode } = require('hsmapi')
// ...
const morse = await morseCode('SOS')
message.channel.send(morse) // ... --- ...
```

### Discord, image example:
#### With image URL:
```javascript
const discord = require('discord.js')
const { husam } = require('hsmapi')
// ...
const husamPicture = await husam()

await interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('#029ffa')
    .setImage(husamPicture)
    .setTimestamp(Date.now());
], files: [file] })
```
#### With ArrayBuffer:
```javascript
const husamPicture = await husam(true)

const file = new AttachmentBuilder(husamPicture, {
    name: 'husam.jpg'
})

await interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('#029ffa')
    .setImage('attachment://husam.jpg')
    .setTimestamp(Date.now());
], files: [file] })
```

### Counter usage example:
#### Discord, string response
```javascript
// For example, in the InteractionCreate event:
//...
const count = await counter('yourAppName')
console.log(`Usage Counter: Command used ${count} times!!`)
```
#### Discord, ArrayBuffer response:
```javascript
const discord = require('discord.js')
const { counter } = require('hsmapi')
//...
const count = await counter('yourAppName', { theme: 'moebooru' })

const file = new AttachmentBuilder(count, {
    name: 'counter.png'
})

await interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('#029ffa')
    .setImage('attachment://counter.png')
    .setTimestamp(Date.now());
], files: [file] })
```

## Functions

### Random

| Function         | Description                               |
| :--------------- | :---------------------------------------- |
| `husam()`        | Gives random husam image url.             |
| `husam(true)`    | Gives random husam image arraybuffer.     |
| `birdFacts()`    | Gives random facts about birds. (Turkish) |
| `showerThoughts()`| Gives random shower thoughts (Turkish)   |

### Image
| Function                | Description               |
| :---------------------- | :------------------------ |
| `drake('text1', 'text2')` | Make your own Drake Meme. |

### Types
| Function            | Description                             |
| :------------------ | :-------------------------------------- |
| `morseCode('text')` | Convert your text to morse code.        |
| `mock('text')`      | Write the text mockingly.               |
| `superScript('text')`| Convert your text to super script text. |
| `struck('text')`    | Make your text struck.                  |

### Counter
| Function        | Description                                                           |
| :-------------- | :-------------------------------------------------------------------- |
| `counter('name')` | The counter with the entered name increases by 1 each time it is run. |
| `counter('name', { theme: 'theme name' })` | The counter with the entered name increases by 1 each time it is run. <br> Available themes: `rule34`, `moebooru`, `gelbooru`, `asoul` <br> **!! Returns SVG** |
| `counter('name', { theme: 'theme name', buffer: true })` | The counter with the entered name increases by 1 each time it is run. <br> Available themes: `rule34`, `moebooru`, `gelbooru`, `asoul` <br> **!! Returns ArrayBuffer** |


## Support and Feedback

If you need support or feedback, please join our [discord server](https://hsmsoftware.com/birdheaven).
