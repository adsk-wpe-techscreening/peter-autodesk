import React from 'react';
import PropTypes from 'prop-types';

// Components
import RecommendationsCard from '../recommendations-card';
import { FlexContainer } from './styles';

const RecommendationsList = ({ recommendations }) => (
    <FlexContainer>
        {
            recommendations.map( r =>
                (
                    <RecommendationsCard
                        authorName={r.authorName}
                        bookTitle={r.bookTitle}
                        genreName={r.genreName}
                        isbnNumber={r.isbnNumber}
                    />
                )
            )
        }
    </FlexContainer>
);

RecommendationsList.propTypes = {
    /**
     * List of book recommendations
     */
    recommendations: PropTypes.array
};

export default RecommendationsList;