import homeStudents from "../public/homeStudents.jpg"


export const Home = () => {
  return (
    <div className="container">
      <div className="homeHome">
        <h2 className="homeHomeTitle">Explore Student Connections</h2>
        <p className="homeHomePara">Welcome to the STUDENT NETWORK, your platform to connect with mentors and alumnis, explore diverse communities, engage in forums, and register for competitions. Join us to access student, mentor and alumni profiles with a responsive design for both mobile and PC, keeping you informed about college and field-related activities </p>
        <img className="homeStudentsImg" src={homeStudents} alt="" />
      </div>
      <div className="homeEvents">
        <h2 className="homeEventsTitle">Event Details</h2>
        <div className="homeEventContainer">
          No events at the moment
        </div>
      </div>
      <div className="homeBlog">
        <h2 className="homeBlogTitle">
          Blog Feed
        </h2>
        <div className="homeBlogContainer">
          <div className="homeBlogCard"></div>
          <div className="homeBlogCard"></div>
        </div>
      </div>
    </div>
  )
}