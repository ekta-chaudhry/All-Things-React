import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Feed");
  return <div>
    <button onClick={() => setCurrentTab("Feed")} style={{color: currentTab == "Feed" ? "red": "black"}}>Feed</button>
    <button onClick={() => setCurrentTab("Notifications")} style={{color: currentTab == "Notifications" ? "red": "black"}}>Notifications</button>
    <button onClick={() => setCurrentTab("Messages")} style={{color: currentTab == "Messages" ? "red": "black"}}>Messages</button>
    <button onClick={() => setCurrentTab("Jobs")} style={{color: currentTab == "Jobs" ? "red": "black"}}>Jobs</button>
  </div>
}


export default App
