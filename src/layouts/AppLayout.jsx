import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import modulesConfig from "../modules/modulesConfig";

/**
 * AppLayout — simplified sidebar that shows only the 4 module pages (Amazon, Flipkart, Stock Movement, Reconciliation).
 * Clicking a group navigates to the internal page (group.path). Individual tool links are shown on those pages.
 */

export default function AppLayout() {
  const loc = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // close mobile drawer when route changes
    setDrawerOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    // lock body scroll when drawer open on mobile
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            ☰
          </button>
          <div className="title">Amazon Ops Super App — Tools Portal</div>
        </div>

       <div className="header-right">
  <Link to="/profile" className="profile-link">
    Profile
  </Link>
</div>

      </header>

      <div className="body">
        <aside className={`sidebar ${drawerOpen ? "open" : ""}`}>
          <div className="sidebar-top">
            <button
              className="close-drawer"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            <div className="sidebar-title">Modules</div>
          </div>

          <nav>
            <ul className="sidebar-simple-list">
              {modulesConfig.map((group) => {
                const isActive = loc.pathname === group.path || loc.pathname.startsWith(group.path + "/");
                return (
                  <li key={group.group} className={isActive ? "active" : ""}>
                    <Link to={group.path} onClick={() => setDrawerOpen(false)}>
                      {group.group}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {drawerOpen && <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />}

        <main
          className="content"
          onClick={() => {
            if (drawerOpen) setDrawerOpen(false);
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
