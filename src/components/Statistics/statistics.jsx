// import data from "./data.json"

const StatsTitle = () => {
    return (
        <h2 class="title">Upload stats</h2>
    )
}

const StatsData = () => {
    return (
        <ul class="stat-list">
            <li class="item">
                <span class="label">.docx</span>
                <span class="percentage">4%</span>
            </li>
            <li class="item">
                <span class="label">.mp3</span>
                <span class="percentage">14%</span>
            </li>
            <li class="item">
                <span class="label">.pdf</span>
                <span class="percentage">41%</span>
            </li>
            <li class="item">
                <span class="label">.mp4</span>
                <span class="percentage">12%</span>
            </li>
        </ul>
    )
}

export const Statistics = () => {
    return (
        <div>
            <StatsTitle />
            <StatsData />
        </div>
    )
}
