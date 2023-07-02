const Resepts = require('../model/model')
const controller = {
    getAll: async function(req,res){
        const data = await Resepts.find()
        res.render('index', {data})
    },
    admin: async function(req,res){
        const data = await Resepts.find()
        res.render('admin', {data})
    },
    adminAdd: async function(req,res){
        await Resepts.create({
            image: req.body.image,
            type: req.body.type,
            name:req.body.name,
            whatYouNeed:req.body.whatYouNeed ,
            howToDo: req.body.howToDo,
        })
        res.redirect('/admin')
    },
    editPage: async function(req,res){
        const data = await Resepts.find()
        const filteredData = data.filter(el=> el.id == req.params.id)
        res.render('edit', {filteredData})
    },
    edit: async function(req,res){
        await Resepts.findByIdAndUpdate(req.params.id, {
            image: req.body.image,
            type: req.body.type.split(","), 
            name:req.body.name,
            whatYouNeed:req.body.whatYouNeed ,
            howToDo: req.body.howToDo,
        })
        res.redirect('/admin')
    },
    sort: async function(req,res){
        const typeS = req.query.type;
        const data = await Resepts.find({type:typeS})
        res.render('index', { data });
    },
    sortAdmin: async function(req,res){
        const typeS = req.query.type;
        const data = await Resepts.find({type:typeS})
        res.render('admin', { data });
    },
    search: async function(req,res){
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        let searchName = req.body.name;
        const p = await Resepts.find()
        const data = p.filter(el => el.name == capitalize(searchName) || el.type == capitalize(searchName));
        res.render('index', {data})
        
    },
    adminDelete: async function(req,res){
        await Resepts.findByIdAndDelete(req.params.id)
        res.redirect('/admin')
    },
    getOne: async function(req,res){
        const data = await Resepts.findById(req.params.id)
        res.render('one', {data})
    },
    getTwo: async function(req,res){
        const data = await Resepts.findById(req.params.id)
        res.render('two', {data})
    },
}

module.exports = controller;