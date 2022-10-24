import PropTypes from 'prop-types'
import profile from 'components/Profile/Profile.module.css'

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
      <div className={profile.profile}>
        <div className={profile.description}>
    <img
            src={avatar}
            alt={`${username}'s avatar`}
            className={profile.avatar}
    />
        <p className={profile.name}>{ username}</p>
        <p className={profile.tag}>{`@${tag}`}</p>
          <p className={profile.location}>{ location}</p>
  </div>

        <ul className={profile.stats}>
    <li>
        <span className={profile.label}>Followers</span>
        <span className={profile.quantity}>{ stats.followers}</span>
    </li>
    <li>
            <span className={profile.label}>Views</span>
      <span className={profile.quantity}>{ stats.views}</span>
    </li>
    <li>
          <span className={profile.label}>Likes</span>
      <span className={profile.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
}