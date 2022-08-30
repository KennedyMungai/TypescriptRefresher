interface Movie {
    title: string,
    date: Date,
    rating: number,
    genre: string[],

    report(): string
}

const currentMovie: Movie = {
    title: "Dune",
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ['action', 'adventure', 'drama'],

    report(): string{
        return `
            Title: ${this.title}
            Date: ${this.date}
            Rating: ${this.rating}
            Genre: ${this.genre.join(', ')}    
        `
    }
}

const logMovie = (movie: Movie):void => {
    // console.log(`Title: ${movie.title}`)
    // console.log(`Date: ${movie.date}`)
    // console.log(`Rating: ${movie.rating}`)
    // console.log(`Genre: ${movie.genre}`)

    console.log(movie.report())
}

logMovie(currentMovie)