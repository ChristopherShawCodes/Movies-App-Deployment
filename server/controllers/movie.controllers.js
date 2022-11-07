const Movie = require('../models/movie.model')
const movieRoutes = require('../routes/movie.routes')



const getAllMovies = (req,res) =>{
    Movie.find()
    .then((result) =>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
})
}

const getMovieById = (req,res) =>{
    Movie.findById(req.params.id)
    .then((result) =>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
})
}


const addMovie = (req,res) =>{
    Movie.create(req.body)
    .then((result) =>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}


const updateMovie = (req,res) =>{
    //since we used :id in our route we have access
    //to the id here in the controller
    //we also need to pass what gets updated
    //in this case it is the req.body that we will update
    Movie.updateOne({_id:req.params.id},req.body, {new:true, runValidators:true})
    .then((result) =>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
})
}

const deleteMovie = (req,res) =>{
    Movie.deleteOne({_id:req.params.id})
    .then((result) =>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
})
}


module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}