import styles from  './FriendListItem.module.css'
export function FriendListItem({avatar, name, isOnline, id}) {
    return (
        <li className="item" key={id}>
            <span className={styles.status+" "+(isOnline? styles.statusOnline : styles.statusOffline )}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className="name">{name}</p>
        </li>
    )
}