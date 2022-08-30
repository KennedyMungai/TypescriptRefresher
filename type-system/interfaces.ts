const currentMovie = {
    title: "Dune",
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ['action', 'adventure', 'drama']
}

const logMovie = (movie: {
    title: string,
    date: Date,
    rating: Number,
    genre: string[]
}):void => {
    console.log(`Title: ${movie.title}`)
    console.log(`Date: ${movie.date}`)
    console.log(`Rating: ${movie.rating}`)
    console.log(`Genre: ${movie.genre}`)
}

logMovie(currentMovie)