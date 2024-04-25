# Pollcord
[![https://nodei.co/npm/pollcord.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/pollcord.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/pollcord) <br/>
[![Node version](https://img.shields.io/node/v/pollcord.svg?style=flat)](https://nodejs.org/download/) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/shockbs/pollcord/issues) [![HitCount](https://hits.dwyl.com/shockbs/pollcord.svg?style=flat-square)](http://hits.dwyl.com/shockbs/pollcord) [![Vulnerabilities](https://snyk.io/test/github/shockbs/pollcord/badge.svg)](https://github.com/shockbs/pollcord) [![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/shockbs/pollcord/CI?label=build) ![Repo Size](https://img.shields.io/github/repo-size/shockbs/pollcord) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/shockbs/pollcord) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fshockbs%2Fpollcord.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fshockbs%2Fpollcord?ref=badge_shield)




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
## Star History

<a href="https://star-history.com/#shockbs/pollcord&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=shockbs/pollcord&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=shockbs/pollcord&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=shockbs/pollcord&type=Date" />
 </picture>
</a>
### Backlinks
[shockbs](https://shockbs.is-a.dev)
Support: https://discord.gg/zeBet3HrU4
