import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="siteName" >STUDENT NETWORK</div>
        <div className="options">OPTIONS</div>
        <ul className="navLinks">
          <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/home">Home</NavLink></li>
          <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/blog">Blog</NavLink></li>
          <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/file_share">File Share</NavLink></li>
          <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/members">Members</NavLink></li>
        </ul>
      </nav>

    </>
  )
}