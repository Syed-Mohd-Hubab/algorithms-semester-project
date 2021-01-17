const fs = require('fs')
const algorithms = require('../functions/algorithms')

module.exports = {
    getHome: (req, res, next)=>{
        return res.render('../views/basic/home')
    },

    getLCS: (req, res, next)=>{
        const len = algorithms.lcsLength('ABCBDAB','BDCABA')
        console.log(`length: ${len}`)
        // const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        // const array = data.split('\n')
        // for(i in array){
        //     console.log(`${i}: ${array[i]}\n`)
        // }
        return res.render('../views/basic/lcs')
    },

    getSCS: (req, res, next)=>{
        const len = algorithms.scsLength('ABCBDAB','BDCABA')
        console.log(`length: ${len}`)
        return res.render('../views/basic/scs')
    },

    getLD: (req, res, next)=>{
        const len = algorithms.ldLength('kitten','sitting')
        console.log(`length: ${len}`)
        return res.render('../views/basic/ld')
    },

    getLIS: (req, res, next)=>{
        const len = algorithms.lisLengthp([ 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ])
        console.log(`length: ${len}`)
        return res.render('../views/basic/lis')
    },

    getMCM: (req, res, next)=>{
        const len = algorithms.mcm([13, 7, 24, 49, 4, 16, 39, 85, 64, 40, 43, 56, 8, 39, 36, 11, 85, 54, 81, 38, 23, 39, 33, 99, 35, 54, 12, 54, 61, 80, 88, 6, 83, 64, 66, 55, 70, 28, 14, 42, 23, 3, 74, 81, 1, 38, 76, 58, 83, 4, 65, 85, 41, 95, 74, 15, 59, 55, 79, 2, 64, 36, 8, 23, 28, 10, 83, 20, 57, 32, 71, 28, 84, 44, 34, 7, 97, 43, 35, 46, 42, 53, 25, 99, 22, 37])
        console.log(`length: ${len}`)
        return res.render('../views/basic/mcm')
    },

    get01KP: (req, res, next)=>{
        const len = algorithms.kp([20, 5, 10, 40, 15, 25],[1, 2,  3,  8,  7, 4],357)
        console.log(`length: ${len}`)
        return res.render('../views/basic/01kp')
    },

    getPP: (req, res, next)=>{
        const val = algorithms.pp([ 3, 3, 3, 3, 3, 1 ])
        console.log(`Yes or No: ${val}`)
        return res.render('../views/basic/pp')
    },

    getRCP: (req, res, next)=>{
        const val = algorithms.rcp([ 1, 5, 8, 9, 10, 17, 17, 20 ],4)
        console.log(`value: ${val}`)
        return res.render('../views/basic/rcp')
    },

    getCCMP: (req, res, next)=>{
        const val = algorithms.ccmp([ 1, 2, 3, 4 ], 15)
        console.log(`value: ${val}`)
        return res.render('../views/basic/ccmp')
    },

    getWBP: (req, res, next)=>{
        const val = algorithms.wbp("Wordbreakproblem", [ "this", "th", "is", "famous", "Word", "break",
        "b", "r", "e", "a", "k", "br", "bre", "brea", "ak", "problem" ], '')
        console.log(`True or False: ${val}`)
        return res.render('../views/basic/wbp')
    },
    
}