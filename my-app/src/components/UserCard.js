import React, {useEffect} from "react";
import styled from 'styled-components';

const Container = styled.div`
    background: #f9f9f9;
    width: 80%;
   
    

`;

const InfoContainer = styled.div`
    background: #CAE9FF;
    display: flex;
    border-bottom-left-radius: 10%;
    color: #1B4965;
    font-size: 1rem;
    justify-content: space-around;
    font-family: Sans-serif;
    padding: 0 10px;
`;



const TopSection = styled.div`
    background: #1B4965;
    border-bottom-left-radius: 10%;
    border-radius: 1%;
`;

const Image = styled.img`
    width: 40%;
    height: auto;
    border-radius: 100%;
    margin-top: 20px;
`;

const Bio = styled.p`
    color: #1B4965;
    text-align: left;
    font-size: 1rem;
    padding: 0 10px 10px 10px;
`;

function UserCard(props){
    const { user } = props;
    useEffect(() =>{
        console.log(user);
    }, [user]);

    return(
        <Container>
            
            <TopSection>
                <Image src={props.user.avatar_url} alt="avatar"/>
                <p>{props.user.name}</p>
                <p>{props.user.location}</p>
            </TopSection>

            <InfoContainer>
                <p>Username: {props.user.login}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
            </InfoContainer>
                <Bio>{props.user.bio}</Bio>
           
        </Container>
    );
};

export default UserCard;