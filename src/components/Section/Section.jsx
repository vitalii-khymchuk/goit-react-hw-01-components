import section from 'components/Section/Section.module.css'

export default function Section({ title, children }) {
    return (
        <section className={ section.section}>
            <h2 className={section.title}>{ title }</h2>
            {children}
        </section>
    )
}
