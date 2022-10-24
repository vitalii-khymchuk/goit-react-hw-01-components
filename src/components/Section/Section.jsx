import PropTypes from 'prop-types'
import section from 'components/Section/Section.module.css'

export default function Section({ title, children }) {
    return (
        <section className={ section.section}>
            {title && <h2 className={section.title}>{ title }</h2>}
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}