import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Styles
import {
    ContentWrapper,
    Heading,
    SubmitButton
} from '../shared-styles';

import {
    Form,
    Input
} from './styles';

const CreateAccountForm = ({ onSubmit }) => {
    const [firstName, firstNameFunction] = useState('');
    const [lastName, lastNameFunction] = useState('');
    const [email, emailFunction] = useState('');
    const [phone, phoneFunction] = useState('');
    const [profilePhotoUrl, profilePhotoUrlFunction] = useState('');

    const renderHeading = () => (
        <Heading>Create account</Heading>
    );

    const renderForm = () => (
        <Form>
            <Input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={event => firstNameFunction(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={event => lastNameFunction(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={event => emailFunction(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={event => phoneFunction(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Profile photo url"
                value={profilePhotoUrl}
                onChange={event => profilePhotoUrlFunction(event.target.value)}
            />
        </Form>
    );

    const renderSubmitButton = () => (
        <SubmitButton
            type="submit"
            onClick={ event => {
                event.preventDefault();
                onSubmit({
                    email,
                    firstName,
                    lastName,
                    phone,
                    profilePhotoUrl
                });
            }}
        >
            CREATE ACCOUNT
        </SubmitButton>
    );

    return (
        <ContentWrapper>
            {renderHeading()}
            {renderForm()}
            {renderSubmitButton()}
        </ContentWrapper>
    );
}

CreateAccountForm.propTypes = {
    /**
     * Callback to handle user profile submission
     */
    onSubmit: PropTypes.func
};

export default CreateAccountForm;