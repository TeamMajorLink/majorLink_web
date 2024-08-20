import React from 'react';
import styled from 'styled-components';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';

const Profile = styled.div`

`;

function ProfileCardMake() {
    return (
        <>
            <HeaderComponent />
                <Profile>
                    test
                </Profile>
            <Footer />
        </>
    );
}

export default ProfileCardMake