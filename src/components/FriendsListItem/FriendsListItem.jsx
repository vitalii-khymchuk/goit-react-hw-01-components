import css from 'components/FriendsListItem/FriendsListItem.module.css'
import PropTypes from 'prop-types'

export default function FriendsListItem({ friends }) {
    return (
        friends.map(({ avatar, id, name, isOnline }) => {
            const onlineIcon = isOnline ? css.online : "";
        return (<li className={css.item} key={id}>
            <span className={`${css.status} ${onlineIcon}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>)
     
    }) )
}

FriendsListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    }))
}