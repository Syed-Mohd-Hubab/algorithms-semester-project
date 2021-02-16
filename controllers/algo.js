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
        let filename = './dataset/'
        const len = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.lcsLength(array[i],array[i+1]))

        return res.render('../views/algo/lcs', { array: array , length: len })
    },

    //b
    getSCS: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.scsLength(array[i],array[i+1]))

        return res.render('../views/algo/scs', { array: array , length: len })
    },

    //c
    getLD: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(i in array)
            array[i] = array[i].replace('\r','')
        for(let i=0 ; i<20 ; i=i+2)
            len.push(algorithms.ldLength(array[i],array[i+1]))

        return res.render('../views/algo/ld', { array: array , length: len })
    },

    //d
    getLIS: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.lisLength(splitNumbers))
        }
        return res.render('../views/algo/lis', { array: array , length: len })
    },

    //e
    getMCM: (req, res, next)=>{
        let filename = './dataset/'
        const answer = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            answer.push(algorithms.mcm(splitNumbers))
        }
        return res.render('../views/algo/mcm', { array: array , answer: answer })
    },

    //f
    get01KP: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        const weight = 357
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
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
            len.push(algorithms.kp(splitNumbers1,splitNumbers2,weight))
        }
        return res.render('../views/algo/01kp', { array: array , length: len, weight: weight })
    },

    //g
    getPP: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.pp(splitNumbers))
        }
        return res.render('../views/algo/pp', { array: array , length: len })
    },

    //h
    getRCP: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        const rodlength = 357
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<20 ; i=i+2){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers){
                splitNumbers[j] = Number(splitNumbers[j])
            }
            len.push(algorithms.rcp(splitNumbers,rodlength))
        }
        return res.render('../views/algo/rcp', { array: array , length: len, rodlength: rodlength })
    },

    //i
    getCCMP: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        const coinchange = 357
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitNumbers = array[i].split(',')
            splitNumbers[splitNumbers.length-1] = splitNumbers[splitNumbers.length-1].replace('\r','')
            for(j in splitNumbers)
                splitNumbers[j] = Number(splitNumbers[j])
            len.push(algorithms.ccmp(splitNumbers,coinchange))
        }
        return res.render('../views/algo/ccmp', { array: array , length: len, coinchange: coinchange })
    },

    //j
    getWBP: (req, res, next)=>{
        let filename = './dataset/'
        const len = []
        const name = 'aliazlan'
        filename = filename + req.params.dataset + '.txt'
        const data = fs.readFileSync(filename, 'utf8')
        const array = data.split('\n')
        for(let i=0 ; i<10 ; i++){
            let splitStrings = array[i].split(',')
            splitStrings[splitStrings.length-1] = splitStrings[splitStrings.length-1].replace('\r','')
            len.push(algorithms.wbp(name,splitStrings,''))
            if(len[i]!=true)
                len[i]=false
        }
        return res.render('../views/algo/wbp', { array: array , length: len, name: name })
    },
    
}