const fs = require('fs')
const algorithms = require('../functions/algorithms')

module.exports = {
    //dataseta
    getdataseta: (req, res, next)=>{
        return res.render('../views/algo/a')
    },

    //datasetb
    getdatasetb: (req, res, next)=>{
        return res.render('../views/algo/b')
    },
    
    //datasetc
    getdatasetc: (req, res, next)=>{
        return res.render('../views/algo/c')
    },

    //datasetd
    getdatasetd: (req, res, next)=>{
        return res.render('../views/algo/d')
    },

    //datasete
    getdatasete: (req, res, next)=>{
        return res.render('../views/algo/e')
    },

    //datasetf
    getdatasetf: (req, res, next)=>{
        return res.render('../views/algo/f')
    },

    //datasetg
    getdatasetg: (req, res, next)=>{
        return res.render('../views/algo/g')
    },

    //dataseth
    getdataseth: (req, res, next)=>{
        return res.render('../views/algo/h')
    },

    //dataseti
    getdataseti: (req, res, next)=>{
        return res.render('../views/algo/i')
    },

    //datasetj
    getdatasetj: (req, res, next)=>{
        return res.render('../views/algo/j')
    },

    //a
    getLCS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.lcsLength(array[i],array[i+1]))

        return res.render('../views/algo/lcs', { length: len })
    },

    //b
    getSCS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.scsLength(array[i],array[i+1]))

        return res.render('../views/algo/scs', { length: len })
    },

    //c
    getLD: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/abc.txt', 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.ldLength(array[i],array[i+1]))

        return res.render('../views/algo/ld', { length: len })
    },

    //d
    getLIS: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/degi.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.lisLength(splitNumbers))
        }
        return res.render('../views/algo/lis', { length: len })
    },

    //e
    getMCM: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/degi.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.mcm(splitNumbers))
        }
        return res.render('../views/algo/mcm', { length: len })
    },

    //f
    get01KP: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/fh.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<20 ; i=i+2){
            let splitNumbers1 = array[i].split(',')
            let splitNumbers2 = array[i+1].split(',')
            splitNumbers1[splitNumbers1.length-1] = splitNumbers1[splitNumbers1.length-1].replace('\r','')
            splitNumbers2[splitNumbers2.length-1] = splitNumbers2[splitNumbers2.length-1].replace('\r','')
            for(j in splitNumbers1){
                splitNumbers1[j] = Number(splitNumbers1[j])
                splitNumbers2[j] = Number(splitNumbers2[j])
            }
            len.push(algorithms.kp(splitNumbers1,splitNumbers2,357))
        }
        return res.render('../views/algo/01kp', { length: len })
    },

    //g
    getPP: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/degi.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.pp(splitNumbers))
        }
        return res.render('../views/algo/pp', { length: len })
    },

    //h
    getRCP: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/fh.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.rcp(splitNumbers,357))
        }
        return res.render('../views/algo/rcp', { length: len })
    },

    //i
    getCCMP: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/degi.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.ccmp(splitNumbers,357))
        }
        return res.render('../views/algo/ccmp')
    },

    //j
    getWBP: (req, res, next)=>{
        const len = []
        const data = fs.readFileSync('./dataset/j.txt', 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitStrings = array[i].split(',')
            splitStrings[splitStrings.length-1] = splitStrings[splitStrings.length-1].replace('\r','')
            len.push(algorithms.wbp('aliazlan',splitStrings,''))
        }
        console.log(len)
        return res.render('../views/algo/wbp', { length: len })
    },
    
}