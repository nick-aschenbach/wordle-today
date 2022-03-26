#!/usr/bin/env node

const words = require('./wordle_words.json')

const index = Math.round((new Date().setHours(0,0,0,0)-new Date(2021,5,19,0,0,0,0)) / 864e5)
console.log(words[index])
