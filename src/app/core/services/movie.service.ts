import { Injectable } from "@angular/core";
import { Movie } from "../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
    constructor() { }
    private listOfMovies() 
    {
        return [
        {
            id:1,
            title: 'Inception',
            year: 2010,
            genre: 'Sci-Fi',
            director: 'Christopher Nolan',
            rating: 8.8,
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
        },
        {
            id: 2,
            title: 'The Godfather',
            year: 1972,
            genre: 'Crime',
            director: 'Francis Ford Coppola',
            rating: 9.2,
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
        },
        {
            id: 3,
            title: 'The Dark Knight',
            year: 2008,
            genre: 'Action',
            director: 'Christopher Nolan',
            rating: 9.0,
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'
        },
        {
            id: 4,
            title: 'Pulp Fiction',
            year: 1994,
            genre: 'Crime',
            director: 'Quentin Tarantino',
            rating: 8.9,
            description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
        },
        {
            id: 5,
            title: 'The Shawshank Redemption',
            year: 1994,
            genre: 'Drama',
            director: 'Frank Darabont',
            rating: 9.3,
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
        },
        {
            id: 6,
            title: 'Forrest Gump',
            year: 1994,
            genre: 'Drama',
            director: 'Robert Zemeckis',
            rating: 7.8,
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man.'
        },
        {
            id: 7,
            title: 'The Matrix',
            year: 1999,
            genre: 'Sci-Fi',
            director: 'Lana Wachowski, Lilly Wachowski',
            rating: 8.7,
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
        },
        {
            id: 8,
            title: 'Fight Club',
            year: 1999,
            genre: 'Drama',
            director: 'David Fincher',
            rating: 8.8,
            description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.'
        },
        {
            id: 9,
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
            genre: 'Adventure',
            director: 'Peter Jackson',
            rating: 8.9,
            description: 'Gandalf and Aragorn lead the World of Middle-earth in the final battle against Sauron\'s forces.'
        },
        {
            id: 10,
            title: 'Interstellar',
            year: 2014,
            genre: 'Adventure',
            director: 'Christopher Nolan',
            rating: 8.6,
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
        },
        {
            id: 11,
            title: 'The Social Network',
            year: 2010,
            genre: 'Biography',
            director: 'David Fincher',
            rating: 7.7,
            description: 'As Harvard students create the social networking site that would become Facebook, they must deal with both personal and legal complications.'
        }] 
    }

    private movies: Movie[] = this.listOfMovies();

    getMovies(): Movie[] {
        return this.movies;
    }

    updateMovie(updatedMovie: Movie) {
      const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
      if (index !== -1) {
        this.movies[index] = updatedMovie;
      }
    }
    addMovie(newMovie: Movie) {
        this.movies.push(newMovie);
    }
}
