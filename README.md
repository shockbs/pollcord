# Pollcord
send polls with discord.js
# Support Server: https://discord.gg/zeBet3HrU4 (Free GPT4 API comming soon)
## Why PollCord?
- performant
- beginnnner friendly

# Getting Started
install pollcord
```
npm i pollcord
```
Import pollcord
```js
import pollcord from "pollcord"
```
With cjs:
```js
const pollcord = require("pollcord")
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
you can also add content, embeds, components etc
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
```js
pollcord(interaction.client, interaction.channelId, { question: "Why PollCord?", answers: {{text:"Performant",emoji:"😏"}, {text:"Fully written in Typescript",emoji:"😍"}, {text: "Beginner Friendly",emoji:"😀"}}, duration: "7 days", multiSelect: true }, ,{ content: "@everyone plz vote this poll thx", embeds: [new EmbedBuilder().setColor("Blurple").setDescription("PollCord")], components: [new ActionRowBuilder().addComponents(new ButtonBuilder({style: ButtonStyle.Link, label: "Support", url: "https://discord.gg/zeBet3HrU4/"}))] })
```
poll only:
```js
pollcord(interaction.client, interaction.channelId, { question: "Why PollCord?", answers: {{text:"Performant",emoji:"😏"}, {text:"Fully written in Typescript",emoji:"😍"}, {text: "Beginner Friendly",emoji:"😀"}}, duration: "7 days" })
```
### Backlinks
[shockbs](https://shockbs.is-a.dev)
Support: https://discord.gg/zeBet3HrU4
