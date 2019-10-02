import React, {useEffect} from "react";

function UserCard(props){
    const { user } = props;
    useEffect(() =>{
        console.log(user);
    }, [user]);

    return(
        <div className="user">
            <img src={props.user.avatar_url} alt="avatar"/>
            <p>Username: {props.user.login}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>{props.user.bio}</p>

        </div>
    );
};

export default UserCard;