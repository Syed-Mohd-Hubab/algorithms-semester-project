const fs = require('fs')
const algorithms = require('../functions/algorithms')

module.exports = {
    getHome: (req, res, next)=>{
        return res.render('../views/basic/home')
    },

    getLCS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<20 ; i=i+2){
            len.push(algorithms.lcsLength(array[i],array[i+1]))
        }
        return res.render('../views/basic/lcs', { length: len })
    },

    getSCS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<20 ; i=i+2){
            len.push(algorithms.scsLength(array[i],array[i+1]))
        }
        return res.render('../views/basic/scs', { length: len })
    },

    getLD: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<20 ; i=i+2){
            len.push(algorithms.ldLength(array[i],array[i+1]))
        }
        return res.render('../views/basic/ld', { length: len })
    },

    getLIS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/dei.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            const splitNumbers = array[i].split(',')
            console.log(splitNumbers)

            len.push(algorithms.lisLength(splitNumbers))
        }
        for(i in len)
            console.log(i+':'+len[i])
        return res.render('../views/basic/lis',{ length: len })
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