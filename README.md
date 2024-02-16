# HSMApi Wrapper

A HSMApi wrapper for node.js
<div  align="center">
	<h1>HSMApi Wrapper</h1>
	<div>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://img.shields.io/npm/dt/hsmapi?style=for-the-badge&logo=npm" alt="NPM Downloads" /></a>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://img.shields.io/npm/v/hsmapi?style=for-the-badge&logo=npm" alt="NPM Version" /></a>
		<a href="https://api.hsmsoftware.com/v1/"><img src="https://img.shields.io/uptimerobot/status/m796377643-4c5e3892654c0f6ddb39c463?up_message=online&style=for-the-badge&label=API%20STATUS" /></a>
	</div>
	<div>
		<a href="https://www.npmjs.com/package/hsmapi"><img src="https://nodei.co/npm/hsmapi.png?downloads=true" alt="NPM Banner"></a>
	</div>
</div>

## Installation
`npm install hsmapi`

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
```javascript
const discord = require('discord.js')
const { husam } = require('hsmapi')
// ...
const husamPicture = await husam()

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

## Functions

### Random

| Function | Description                |
| :-------- | :------------------------- |
| husam() | Gives random husam image. |
| birdFacts() | Gives random facts about birds. (Turkish) |
| showerThoughts() | Gives random shower thoughts (Turkish) |

### Image
| Function | Description                |
| :-------- | :------------------------- |
| drake('text1', 'text2') | Make your own Drake Meme. |

### Image
| Function | Description                |
| :-------- | :------------------------- |
| morseCode('text') | Convert your text to morse code. |
| mock('text') | Write the text mockingly. |
| superScript('text') | Convert your text to super script text. |
| struck('text') | Make your text struck. |


## Support and Feedback

If you need support or feedback, please join our [discord server](https://hsmsoftware.com/birdheaven).

  