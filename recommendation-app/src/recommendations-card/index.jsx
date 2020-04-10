import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Card } from './styles';

class RecommendationsCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <p>{`Title: ${this.props.bookTitle}`}</p>
                <p>{`Author: ${this.props.authorName}`}</p>
                <p>{`Genre: ${this.props.genreName}`}</p>
                <p>{`ISBN Number: ${this.props.isbnNumber}`}</p>
            </Card>
        );
    }

};

RecommendationsCard.propTypes = {
    /**
     * Author name
     */
    authorName: PropTypes.string,
    /**
     * Book title
     */
    bookTitle: PropTypes.string,
    /**
     * Genre name
     */
    genreName: PropTypes.string,
    /**
     * ISBN number
     */
    isbnNumber: PropTypes.string
};

export default RecommendationsCard;