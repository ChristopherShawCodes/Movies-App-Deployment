const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'Title is required.'],
        minLength: [2,'Title must be longer than 2 characters'],
        maxLength: [30, 'Title can be no longer than 30 characters']
    },
    director: {
        type: String,
        required:[true,'Director is required.'],
        minLength: [2,'Director name must be longer than 2 characters'],
        maxLength: [30, 'Director can be no longer than 30 characters']
    },
    rating: {
        type: String,
        required:[true,'Rating is required.'],
        enum:['G', 'PG' , 'PG-13', 'R', 'NC-17'],
    },
    genre: {
        type: String,
        required:[true,'Genre is required.'],
        enum: ['Comedy',
                'Drama',
                'Horror',
                'Sci-Fi',
                'Fantasy',
                'Action',
                'Family',
                'Animated',
                'Documentary',
                'Thriller',
                'Anime']
    },
    releaseYear:{
        type: Number,
        required:[true,'Release Year is required.'],
        max: [2023, "Release Year can't be in the future."],
        min: [1895, "The first to present projected moving pictures to a paying audience were the Lumière brothers in December 1895 in Paris, France. They used a device of their own making, the Cinématographe, which was a camera, a projector and a film printer all in one.Try Again. "]

    },
    duration:{
        type: String,
        required:  [true,'Duration is required.'],
        minLength: [3,'Duration must be longer than 3 characters'],
        maxLength: [15, 'Duration can be no longer than 15 characters (1hr 48min)']
    },
    boxArt:{
        type: String,
        required:[true,'An Image is required.']
    }
},{timestamps: true})


//creating a collection and calling the collection 'Movie' in the database using the structure of MovieSchema
const Movie = mongoose.model('Movie', MovieSchema)


//export to use in other places
module.exports = Movie