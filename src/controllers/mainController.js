module.exports = {
    index : (req,res) => {
        return res.render('index')
    },
    music : (req,res) => {
        return res.render('music')
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact')
    },
    admin : (req,res) => {
        return res.render('admin',{
            user : req.query.user
        })
    },
    login : (req,res) => {
        return res.render('login')
    },
    noEntry : (req,res) => {
        return res.render('noEntry')
    }


}
