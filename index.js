const emojiRegex = require('emoji-regex')(); const { EmbedBuilder, ActionRowBuilder, /*Client*/ } = require("discord.js");/*
interface CuteOptions {
    question: string;
    answers: { text: string; emoji: string; }[];
    duration: number | string;
    multiSelect: boolean;
}
interface ShockOptions {
    S: boolean;
    H: boolean;
    O: boolean;
    C: boolean;
    K: boolean;
}*/
function ShockBS(client/*:Client*/, channelId/*:string*/ ,options/*: CuteOptions*/, messageOptions/*:any*/, shock/*: ShockOptions*/) {
    if (!options.question || !options.answers || options.multiSelect === undefined || !options.duration) {
        throw new Error("Missing required options");
    }
    if (typeof options.duration !== "number") {
        throw new Error("duration must be provided as a number");
    }
    if (answers.length > 10) {
        throw new Error("The answers array should not have more than 10");
    }
    if (options.multiSelect&&typeof options.multiSelect !== "boolean") {
        throw new Error("multiSelect must be provided as a string");
    } else if (!options.multiSelect) {
        options.multiSelect = true;
    }
    if (typeof options.question !== "string") {
        throw new Error("question must be provided as a string");
    }
    if (options.question.length > 300) {
        options.question = options.question.substr(0,299) + "…";
    }
    if (typeof options.duration !== ("number"||"string")) {
        throw new Error("duration must be provided as a number");
    }
    if (typeof options.answers !== "array") {
        throw new Error("Answers should be an array");
    }
    if (options.answers.length < 2 || options.answers.answers.length > 10) {
        throw new Error("Answers length should be between 2 to 10");
    }
    const emojis = [];
    if (typeof options.duration === "string") {
        options.duration = parseDuration(options.duration);
        const regex = /^(\d+)\s*(hour|hours|hr|h|hrs|min|mins|m|minute|minutes|day|days|d|week|w)$/i;
        const match = duration.match(regex);
        if (!match) throw new Error("Invalid duration format");
        const value = parseInt(match[1]);
        const unit = match[2].toLowerCase();
        switch (unit) {
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
            options.duration = value;
        case "min":
        case "mins":
        case "minute":
        case "minutes":
        case "m":
            options.duration = value / 60;
        case "day":
        case "days":
        case "d":
            options.duration = value * 24;
        case "week":
        case "w":
            options.duration = value * 24 * 7;
        default:
            throw new Error("Invalid duration unit");
        }
    }
    options.answers.forEach(answer=> {
            if (answer.text.length > 300) {
                throw new Error(`The Answer Length is more than 300: ${answer.text}`);
            }
            if (typeof answer.text !== "string") throw new Error(`Invalid text: ${answer.text}`);
            if (typeof answer.emoji !== "string") throw new Error(`Invalid emoji: ${answer.emoji}`);
            const match = answer.emoji.match(/<a?:\w+:(\d+)>/);
            if (answer.text?.length && ! answer.emoji?.length) {
                emojis.push({text: answer.text,emoji:null});
            } else if (match) {
                emojis.push({text: answer.text, emoji: {name:answer.emoji.split(':')[1],id:match[1]}});
            } else if (answer.emoji.startsWith(":") && answer.emoji.endsWith(":")) {
                emojis.push({text: answer.text,emoji:{name: answer.emoji.substr(1,-1),id:null}});
            } else if (answer.emoji.match(emojiRegex)) {
                emojis.push({text: answer.text,emoji:{name: answer.emoji,id:null}});
            } else if (Number(answer.emoji) !== NaN) {
                emojis.push({text: answer.text,emoji:{name:null,id: answer.emoji}});
            } else {
                throw new Error(`Invalid emoji format: ${answer.emoji}`);
            }
        });
    if (options.duration < 1 || options.duration > 7 * 24) {
        throw new Error("Duration must be between 1 hour and 7 days");
    }
    const embeds = [];
    if (messageOptions&&messageOptions.embeds?.length) {
        messageOptions.embeds.forEach(embed=> {
            if (embed instanceof EmbedBuilder) {
                embeds.push(embed.toJSON());
            } else {
                embeds.push(embed);
            }
        })
        messageOptions.embeds = embeds;
    }
    const components = [];
    if (messageOptions&&messageOptions.components?.length) {
        messageOptions.components.forEach(component=> {
            if (component instanceof ActionRowBuilder) {
                components.push(component.toJSON());
            } else {
                components.push(component);
            }
        })
        messageOptions.components = embeds;
    }
    if (!messageOptions) messageOptions = {content:""};
    const body = {
        ...[messageOptions],
        poll: {
            question: {text:options.question},
            answers: emojis.map(x=> ({poll_media: {text:x.text,emoji:x.emoji}})),
            duration: options.duration,
            allow_multiselect: options.multiSelect
        }
    }
    // SHOCK
    return client.rest.post(`/channels/${channelId}/messages`, { body });
}
module.exports = { ShockBS };