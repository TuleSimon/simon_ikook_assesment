import React, { useState } from "react";
import "./tab.css";

function Tab() {
  const [tab, selectedTab] = useState(0);

  return (
    <div className="flex">
      <button
        onClick={(e) => selectedTab(0)}
        className={`tabButton ${tab == 1 && "inactive2"}`}
      >
        Sharing Menu
      </button>

      <button
        onClick={(e) => selectedTab(1)}
        className={`tabButton ${tab == 0 && "inactive"}`}
      >
        Plated Menu
      </button>
    </div>
  );
}

export default Tab;
