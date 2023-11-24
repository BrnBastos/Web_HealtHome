import React from 'react';
import styled from 'styled-components';
import userImg from '../../Images/usericon.jpg'
import { useAuth } from '../AuthContext';

const PaddingContainer = styled.div`
padding-right: 40px;
`

const AsideContainer = styled.aside`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;



function UserInfo(){
  
  const { user } = useAuth();

  return(
  <UserInfoContainer>
    <UserImage src={userImg} alt="User" />
    <div>
      <strong>{user ? user.nome : 'Usuário'}</strong> 
    </div>
    <div>{user ? user.email : 'N/A'}</div>
  </UserInfoContainer>
  )
  };

const Aside = () => (
    <PaddingContainer>
        <AsideContainer>
        <UserInfo/>
        </AsideContainer>
    </PaddingContainer>
);

export default Aside;