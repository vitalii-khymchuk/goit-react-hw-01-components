export default function Statistics({ data }) {
    return (
        <>
        <h2 class="title">Upload stats</h2>
  <ul class="stat-list">
                {data.map(({id, label, percentage}) => {
                    return (
                           <li class="item" key={id}>
                            <span class="label">{label}</span>
                            <span class="percentage">{ percentage}</span>
    </li>
                    )
                })}
            </ul>
            </>
    ) 
}