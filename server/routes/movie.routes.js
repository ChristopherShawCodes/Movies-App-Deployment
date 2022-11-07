const MovieController = require('../controllers/movie.controllers')

module.exports = (app) =>{
    //getAllMovies
    app.get('/api/allMovies' , MovieController.getAllMovies)
    //getMovieById
    app.get('/api/movie/:id' , MovieController.getMovieById)
    //createNewMovie
    app.post('/api/addMovie', MovieController.addMovie)
    //updateMovie
    app.put('/api/update/:id' , MovieController.updateMovie)
    //deleteMovie
    app.delete('/api/delete/:id' , MovieController.deleteMovie)
}