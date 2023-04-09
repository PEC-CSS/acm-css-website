import "./styles.scss";

const Calendar = () => {
    return (
        <div className="calendar">
            <h1>Event Calendar</h1>
            <iframe src="https://embed.styledcalendar.com/#I8ZaAqmpSmERwzvAx0HD" title="PEC ACM Calendar" class="styled-calendar-container" style={{ width: "100%", border: "none" }} data-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
        </div>
    )
}

export default Calendar;