/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import MoviesData from './MoviesData';



export default function MovieDetails({ match }) {
    const movie = MoviesData.filter(movie => movie.movie_id === parseInt(match.params.id))
    console.log(movie)

    return (
        <div class="container" >
            <div class="row">
                <div class="col align-self-center">
                    <div class="card">
                        <img class="card-img-top" src={movie[0].thumb} alt="Card image cap" />
                        <div class="card-body">
                            {movie[0].title} - {movie[0].release_year}
                            <p class="card-text">category: {movie[0].category_name}<br />
                                Duration: {movie[0].running_time} min
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}