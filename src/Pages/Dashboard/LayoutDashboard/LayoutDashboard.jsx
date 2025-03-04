import { useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Dashboard from "../UserDashboard/UserDashboard";
// import DevGuildAI from "../Dev-Guild/Dev_Guild";
import "./LayoutDashboard.css";
import SoloDev_Guild from "../Dev-Guild/SoloDev_Guild";
import GroupDev_Guild from "../Dev-Guild/GroupDev_Guild";
import Settings_Area from "../../Settings/Settings_Area";
import RightSidebar from "../../../Components/RightSidebar/RightSidebar";

function LayoutDashboard() {
    const [activeComponent, setActiveComponent] = useState("Dashboard");
      const [isDarkTheme, setIsDarkTheme] = useState(false);

    const componentMap = {
        Dashboard: <Dashboard />,
        SoloDevGuildAI: <SoloDev_Guild />,
        GroupDevGuildAI: <GroupDev_Guild/>,
        Settings: <Settings_Area/>,
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle('dark');
      };
    
    return (
        <div className="layout-dashboard">
            <Sidebar setActiveComponent={setActiveComponent} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
            
            <div className="main-content-User-Dashboard">
                {componentMap[activeComponent]}
            </div>

            <RightSidebar/>
        </div>
    );
}

export default LayoutDashboard;
