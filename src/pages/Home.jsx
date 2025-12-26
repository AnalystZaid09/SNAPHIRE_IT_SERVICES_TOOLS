import React from "react";
import { Link } from "react-router-dom";
import modulesConfig from "../modules/modulesConfig";

export default function Home() {
  // show 4 main cards linking to internal module pages
  const cards = modulesConfig.map((g) => ({ group: g.group, path: g.path, count: g.links.length }));
  return (
    <div>
      <h2>Home — Tools Portal</h2>
      <p>Choose a module. Click a card to open the module page (then open individual tools in new tabs).</p>

      <div className="card-grid">
        {cards.map((c) => (
          <Link key={c.group} to={c.path} className="card">
            <div>
              <h3>{c.group}</h3>
              <p>{c.count} tools</p>
            </div>
            <div className="card-action">Open</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
