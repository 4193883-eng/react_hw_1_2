import styles from './FriendList.module.css';
import {FriendListItem} from "../FriendListItem/FriendListItem.jsx";
export function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => {
                return (
                    <FriendListItem avatar={friend.avatar} id={friend.id} isOnline={friend.isOnline} name={friend.name}/>
                )
            })}
        </ul>
    )
}