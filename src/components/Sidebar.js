import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toogleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toogleSidebar}>
        <FaTimes />
      </button>
      <div className={isOpen ? "side-container" : ""}>
        <Links styleClass={isOpen ? "sidebar-links" : ""} />
        <SocialLinks styleClass={isOpen ? "sidebar-icons" : ""} />
      </div>
    </aside>
  )
}

export default Sidebar
