import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";
import ComponentTitle from "./Title.jsx";
import Extension from "./Extlist.jsx";

import logodev from "./assets/logo-devlens.svg";
import stylespy from "./assets/logo-style-spy.svg";
import speedboost from "./assets/logo-speed-boost.svg";
import jsonwizard from "./assets/logo-json-wizard.svg";
import tabmaster from "./assets/logo-tab-master-pro.svg";
import buddy from "./assets/logo-viewport-buddy.svg";
import markup from "./assets/logo-markup-notes.svg";
import grid from "./assets/logo-grid-guides.svg";
import pallete from "./assets/logo-palette-picker.svg";
import linkchecker from "./assets/logo-link-checker.svg";
import domsnapshot from "./assets/logo-dom-snapshot.svg";
import consoleplus from "./assets/logo-console-plus.svg";

function App() {
  const [filter, setFilter] = useState("all");
  const [checkboxStates, setCheckboxStates] = useState({});
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const initialComp = [
    { id: "check-devlens", logo: logodev, title: "DevLens", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-stylespy", logo: stylespy, title: "StyleSpy", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-speedboost", logo: speedboost, title: "SpeedBoost", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-jsonwizard", logo: jsonwizard, title: "JsonWizard", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-tabmaster", logo: tabmaster, title: "TabMaster", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-buddy", logo: buddy, title: "Buddy", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-markup", logo: markup, title: "MarkupNotes", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-grid", logo: grid, title: "GridGuides", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-pallete", logo: pallete, title: "PalettePicker", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-linkchecker", logo: linkchecker, title: "LinkChecker", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-domsnapshot", logo: domsnapshot, title: "DomSnapshot", para: "Quickly inspect page layouts and visualize element boundaries." },
    { id: "check-consoleplus", logo: consoleplus, title: "ConsolePlus", para: "Quickly inspect page layouts and visualize element boundaries." },
  ];

  // Make these removable
  const [cards, setCards] = useState(initialComp);

  const handleRemove = (id) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  const filteredCards = cards.filter((box) => {
    if (filter === "active") return checkboxStates[box.id];
    if (filter === "inactive") return !checkboxStates[box.id];
    return true;
  });

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Extension setFilter={setFilter} filter={filter} theme={theme} />

      <div className="cards" style={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent: "center" }}>
        {filteredCards.map((box) => (
          <ComponentTitle
            theme={theme}
            key={box.id}
            id={box.id}
            logo={box.logo}
            title={box.title}
            para={box.para}
            status={checkboxStates[box.id] || false}
            onToggle={() =>
              setCheckboxStates(prev => ({
                ...prev,
                [box.id]: !prev[box.id]
              }))
            }
            onRemove={handleRemove} // <-- Added here
          />
        ))}
      </div>
    </div>
  );
}
export default App; 