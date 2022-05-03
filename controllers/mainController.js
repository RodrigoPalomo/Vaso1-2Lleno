let mainController = {
    home : function(req, res){
        res.render('home');
    },
    about : function(req, res){
        res.render('about');
    }
}

module.exports = mainController;