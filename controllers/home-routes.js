const router = require('express').Router(); 
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req,res) => {
    Post.findAll({
        attributes: [
            'id',
            'post-url',
            'title',
        'created_at',
[sequelize.literal('(SELECT COUNT (*) FROM vote WHERE post.id = vote.post_id)', vote_count]
       ],
       include:[
           {
               model:'Comment',
               attributes:['id', ]
           }
       ]
    })
    res.render('homepage', {
        id:1,
        post_url: 'https;//handelbarsjs.com/guide/',
        title:'Handlebars Docs',
        created_at: new Date(),
        vote_count:10,
        comments: [{},{}],
        user:{
            username:'test_user'
        }
    });
});

module.exports = router;