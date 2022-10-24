import PropTypes from 'prop-types'
import css from 'components/Statistics/Statistics.module.css'
import randomHexColor from 'utils/randomHexColor'
export default function Statistics({ stats, title }) {
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>{ title.toUpperCase() }</h2>
  <ul className={css.statList}>
                {
                    stats.map(({ id, label, percentage }) => {
                         return (
                        <li className={css.item} style={{ backgroundColor: randomHexColor() }} key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{ percentage + '%'}</span>
    </li>
                    )
                })}
            </ul>
            </div>
    ) 
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}