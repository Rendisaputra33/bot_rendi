require('module-alias/register')
const express = require('express')
const env = require('module').init()
const app = express()

const { Client } = require('discord.js')

const client = new Client()

client.login(process.env.KEY)

client.on('ready', () => {
    console.log(client.user.username + ' telah login')
})

client.on('message', message => {
    console.log(message.author.username)
    switch(message.content) {
        case 'hello':
            message.reply(`hai ${message.author.username}`)
            break
        case 'whats your name':
            message.reply(`my name is ${client.user.username}`)
            break
        default:
            console.log(message.content)
            break
    }
})


