# Pollcord
send polls with discord.js
# Support Server: https://discord.gg/zeBet3HrU4 (Free GPT4 API comming soon)
## Why PollCord?
- performant
- beginnnner friendly
![image](https://i.ibb.co/KLsMTpn/Screenshot-2024-0423-201207.jpg)
# Getting Started
install pollcord
```
npm i pollcord
```
Import pollcord
```js
import PollCord from "pollcord";
const pollcord = PollCord.ShockBS
```
or
```js
const PollCord = require("pollcord");
const pollcord = PollCord.ShockBS
```
## Usage
```js
pollcord(client, channelId, pollCordOptions, messageOptions)
```
### client
- interaction
```js
pollcord(interaction.client, interaction.channelId, pollCordOptions, ,messageOptions)
```
- message
```js
pollcord(message.client, message.channelId, pollCordOptions, messageOptions)
```
## Docs
```js
import { Client } from "discord.js";
const client = new Client(...)
pollcord(
client,
// discord.js bot client
channelId: String,
// id of the channel to send at
{
  question: String,
  //the question of the poll
  answers: { text: string; emoji: string; }[],
  // an array of answers, text is required
  duration: number | string,
  // how long the poll should lasts, can be a number in hour or string(ex: 1 hour, 90mins, 1 week, etc)
  multiSelect: Boolean,
  //optional, whether to allow multi selection or not, default: true
},
{
  content: String,
  // the content of the poll message
  embeds: [],
  // an array containing EmbedBuilder(s) or embeds json
  components: [],
  // an aray containing the ActionRowBuilder(s) or rows jsons
  files: [],
  // files to attach together in the poll, message. can be AttachmentBuilder(s) or attachment json
  allowedMentions: {...},
  // allowedMentions for the poll message
}
)
```
### pollCordOptions:
```js
const pollCordOptions = {
  question: "How smart is ShockBS?", // question string
  answers: PollCordAnswers, //an array containing poll answers
  duration: "3 days", // you can also pass hours number
  multiSelect: true // whether to allow multi selection or not (default: true)
}
```
### PollCordAnswers:
```js
const PollCordAnswers = {
```
// without emojis (or you can pass `emoji: null`)
```js
{
  text: "200 IQ"
},
```
// passing emoji string
```js
{
  text: "210 IQ",
  emoji: "<a:name:123456789>"
},
```
// discord default emojis
```js
{
  text: "220 IQ",
  emoji: ":nerd:"
},
```
// default emojis
```js
{
  text: "230 IQ",
  text: "230 IQ",
  emoji: "🤓"
},
```
// passing emoji id
```js
{
  text: "240 IQ",
  emoji: "123456789"
}
```
```js
}
```
you can only have up to 10 answers per poll
### messageOptions (array)
you can also add content, embeds, components, files etc
```js
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"
const messageOptions = {
content: "@everyone plz vote this poll",
embeds: [
new EmbedBuilder().setColor("Blurple").setDescription("cool poll")
...
],
components: [
new ActionRowBuilder().addComponents(new ButtonBuilder({style: ButtonStyle.Link, label: "Support", url: "https://discord.gg/zeBet3HrU4/"}))
...
]
}
pollcord(base, channelId, pollCordOptions, messageOptions)
```
## Examples:
- poll only:
```js
pollcord(interaction.client, interaction.channelId, { 
  question: "Why PollCord?", 
  answers: [
    {text:"Performant", emoji:"😏"},
    {text:"easy to use", emoji:"😍"},
    {text: "Beginner Friendly", emoji:"😀"}
  ], 
  duration: "7 days" 
});
```
- additional:
```js
pollcord(interaction.client, interaction.channelId, { 
  question: "Why PollCord?", 
  answers: [
    {text: "Performant", emoji: "😏"},
    {text: "easy to use", emoji: "😍"},
    {text: "Beginner Friendly", emoji: "😀"}
  ], 
  duration: "7 days", 
  multiSelect: true 
}, { 
  content: "@everyone plz vote this poll thx", 
  embeds: [new EmbedBuilder().setColor("Blurple").setDescription("PollCord")], 
  components: [new ActionRowBuilder().addComponents(new ButtonBuilder({style: ButtonStyle.Link, label: "Support", url: "https://discord.gg/zeBet3HrU4/"}))]});

```
### Backlinks
[shockbs](https://shockbs.is-a.dev)
Support: https://discord.gg/zeBet3HrU4
