module.exports = {
    getHome: (req, res, next)=>{
        return res.render('../views/basic/home')
    },

    getCredits: (req, res, next)=>{
        return res.render('../views/basic/credits')
    },
}