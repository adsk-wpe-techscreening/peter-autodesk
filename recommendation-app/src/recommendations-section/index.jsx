import React from 'react';
import PropTypes from 'prop-types';

// Components
import RecommendationsList from '../recommendations-list';

// Styles
import {
    ContentWrapper,
    Heading,
    SubmitButton
} from '../shared-styles';
import {
    ProfileIcon
} from './styles';

const RecommendationsSection = ({
    getRecommendations,
    profile,
    recommendations
}) => {
    return (
        <div>
            <ContentWrapper>
                <Heading>{'Welcome ' + profile.firstName + ' ' + profile.lastName + '!'}</Heading>
                <ProfileIcon src={profile.profilePhotoUrl} />
                <SubmitButton onClick={getRecommendations}>GET RECOMMENDATIONS</SubmitButton>
            </ContentWrapper>
            {
                recommendations && <RecommendationsList recommendations={recommendations}/>
            }
        </div>
    );
}

RecommendationsSection.propTypes = {
    /**
     * Callback to handle user action to get recommendations
     */
    getRecommendations: PropTypes.func,
    /**
     * User profile information
     */
    profile: PropTypes.object,
    /**
     * List of book recommendations
     */
    recommendations: PropTypes.array
};

export default RecommendationsSection;