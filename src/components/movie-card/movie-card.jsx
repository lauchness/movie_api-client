import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const { movie, handleFavorite, onClick, _id } = this.props;

        return (
            <Card className="bg-dark">
                <Card.Img crossOrigin="true" variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title className="text-warning">{movie.Title}</Card.Title>
                    <Card.Text className="text-white">{movie.Description}</Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                        <Button variant="link">Open</Button>
                    </Link>
                    <Button variant="danger" onClick={() => handleFavorite(_id, 'add')}>add to favorites</Button>
                </Card.Body>
            </Card>
        );
    }
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired
    }).isRequired
};
