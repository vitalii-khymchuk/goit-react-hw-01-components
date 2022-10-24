import PropTypes from 'prop-types'
import css from 'components/FriendList/FriendList.module.css'

export default function FriendList({children}) {
    return (
        <ul className={css.friendList}>
{children}
</ul>
    )
}

FriendList.propTypes = {
    children: PropTypes.node,
}