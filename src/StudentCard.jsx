function StudentCard({ name, course, marks }) {
    return(
        <>
        <div className="StudentCard">
        <h2>{name}</h2>
        <p>Course: {course}</p>

        <button>Hide Details</button>
        <h3>Status:Active</h3>
        <h4>Toggle Status</h4>

        </div>

        
        </>
    );
}
export default StudentCard;
