import React, {useEffect} from "react";

function UserCard(props){
    const { user } = props;
    useEffect(() =>{
        console.log(user);
    }, [user]);

    return(
        <div className="users">
            <img src={props.user.avatar_url} alt="profile pic"/>
            <p>Username: {props.user.login}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>{props.user.bio}</p>

        </div>
    );
};

export default UserCard;