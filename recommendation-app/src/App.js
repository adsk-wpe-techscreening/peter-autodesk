import React, { useState } from 'react';

// Components
import CreateAccountForm from './create-account-form';
import RecommendationsSection from './recommendations-section';

// Styles
import {
    Logo,
    LogoContainer,
    Section
} from './styles';

import './App.css';

const App = () => {
    const [profile, setProfile] = useState({});
    const [recommendations, setRecommendations] = useState(null);
    const callback1 = () => {
        fetch('https://api.some-domain.com/library-services/users/${profile.userId}/recommendations')
            .then(data => data.json())
            .then(body => {
                setRecommendations(body);
            });
    };
    const callback2 = profile => {
        fetch('https://api.some-domain.com/users', {
            method: 'POST',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            body: JSON.stringify(profile)
        })
            .then(data => data.json())
            .then(body => {
                setProfile(body);
            });
    };
    return (
        <React.Fragment>
            <Section>
                <LogoContainer>
                    <Logo>||book finder||</Logo>
                </LogoContainer>
            </Section>
            {(() => {
                if (!profile.userId) {
                    return (<CreateAccountForm onSubmit={callback2}/>);
                } else {
                    return (
                        <RecommendationsSection
                            getRecommendations={callback1}
                            profile={profile}
                            recommendations={recommendations}
                        />
                    );
                }
            })()}
        </React.Fragment>
    );
}

export default App;
