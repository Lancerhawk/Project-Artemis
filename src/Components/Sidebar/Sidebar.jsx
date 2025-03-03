import "./Sidebar.css";
import Logo from "../../assets/Logo/logo.png";
import Profilepic from "../../assets/profilepic.png";
import { useState } from "react";

function Sidebar({ setActiveComponent, toggleTheme, isDarkTheme }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");
    const [isDevGuildOpen, setDevGuildOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleNavClick = (componentName) => {
        setActiveComponent(componentName);
        setActiveLink(componentName);
        setSidebarOpen(false);
    };

    const toggleDevGuildDropdown = () => {
        setDevGuildOpen(!isDevGuildOpen);
    };

    return (
        <div className={`sidebar-component ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                {isSidebarOpen ? "←" : "→"}
            </button>

            <div className={`sidebar-top ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
                <img className="sidebar-logo" src={Logo} alt="Logo" />
                <h1 className="sidebar-company-name">aRTEMIS</h1>

                <button
                    className="theme-toggle-sidebar"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkTheme ? '☀️' : '🌙'}
                </button>
            </div>

            <div className={`sidebar-nav-links ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
                <button
                    className={`sidebar-nav-btn ${activeLink === "Dashboard" ? "active" : ""}`}
                    onClick={() => handleNavClick("Dashboard")}
                >
                    Dashboard
                </button>

                <div className="sidebar-dropdown">
                    <button
                        className={`sidebar-nav-btn dropdown-btn ${isDevGuildOpen ? "open" : ""}`}
                        onClick={toggleDevGuildDropdown}
                    >
                        Dev-Guild {isDevGuildOpen ? "▲" : "▼"}
                    </button>
                    <div className={`dropdown-content ${isDevGuildOpen ? "show" : ""}`}>
                        <button
                            className={`sidebar-nav-btn sub-option ${activeLink === "SoloDevGuildAI" ? "active" : ""}`}
                            onClick={() => handleNavClick("SoloDevGuildAI")}
                        >
                            Solo Guild
                        </button>
                        <button
                            className={`sidebar-nav-btn sub-option ${activeLink === "GroupDevGuildAI" ? "active" : ""}`}
                            onClick={() => handleNavClick("GroupDevGuildAI")}
                        >
                            Group Guild
                        </button>
                    </div>
                </div>


                <button
                    className={`sidebar-nav-btn ${activeLink === "CreativeGuildAI" ? "active" : ""}`}
                    onClick={() => handleNavClick("CreativeGuildAI")}
                >
                    Creative-Guild AI
                </button>
                <button
                    className={`sidebar-nav-btn ${activeLink === "AboutUs" ? "active" : ""}`}
                    onClick={() => handleNavClick("AboutUs")}
                >
                    Busi-Guild AI
                </button>
                <button
                    className={`sidebar-nav-btn ${activeLink === "Services" ? "active" : ""}`}
                    onClick={() => handleNavClick("Services")}
                >
                    Tutor-Guild AI
                </button>
                <button
                    className={`sidebar-nav-btn ${activeLink === "Contact" ? "active" : ""}`}
                    onClick={() => handleNavClick("Contact")}
                >
                    Report
                </button>
            </div>

            <div className={`sidebar-profile-bottom ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
                <img className="sidebar-profile-pic" src={Profilepic} alt="Profile" />
                <p className="sidebar-profile-name">Eren Yeager</p>
                <div className="sidebar-bottom-buttons">
                    <button
                    className=
                        "sidebar-bottom-btn sidebar-settings-btn"
                    onClick={() => handleNavClick("Settings")}
                >
                    User Settings
                </button>
                    <button className="sidebar-bottom-btn sidebar-logout-btn">Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
