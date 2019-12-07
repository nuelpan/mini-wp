const Article = require('../models/article')

class ArticleCtrl {

    static getArticle(req, res, next) {
        
        Article.find()
        .sort({created_at:'desc'})
            .then(article => {
                res.status(200).json(article)
            })
            .catch(next)
    }

    static getOneArticle(req, res, next) {
        Article.findById(req.params.id)
            .then(article => {
                res.status(200).json(article)
            })
            .catch(next)
    }

    static createArticle(req, res, next) {
        console.log('fired')
        const {title, content, created_at} = req.body
        
        Article.create({
            title,
            content,
            created_at
        })
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(next)
    }

    static deleteArticle(req, res, next) {
        
        Article.deleteOne({
            _id: req.params.id
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)

    }

}

module.exports = ArticleCtrl