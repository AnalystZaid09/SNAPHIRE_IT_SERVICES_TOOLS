import React from "react";
import modules from "../modules/modulesConfig";

export default function Flipkart() {
  const group = modules.find(g => g.group === "Flipkart");
  return (
    <div>
      <h2>Flipkart — Tools</h2>
      <p>Click an item to open the tool (opens in a new tab).</p>

      <div className="card-grid">
        {group.links.map((l, i) => (
          <a key={i} className="card" href={l.url} target="_blank" rel="noopener noreferrer">
            <div>
              <h3>{l.name}</h3>
              <p>{l.url}</p>
            </div>
            <div className="card-action">Open</div>
          </a>
        ))}
      </div>
    </div>
  );
}
