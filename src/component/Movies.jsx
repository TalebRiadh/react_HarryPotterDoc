import React from 'react'
import MoviesData from './MoviesData';
import { Link } from 'react-router-dom'


export default function Movies() {
    const movies = MoviesData.map((movie) =>
        <tr key={movie.movie_id}>
            <td >
                <img className="materialboxed" width="120" height="150" src={movie.thumb} />
            </td>
            <td >
                <Link to={`/movies/${movie.movie_id}`}>
                    {movie.title}
                </Link>
            </td>
            <td >{movie.release_year}</td>
        </tr >
    )

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >Thumb</th>
                        <th scope="col" >Title</th>
                        <th scope="col" >Release Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies}
                </tbody>
            </table>
        </div>
    )
}

