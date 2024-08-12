import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  const [mode, setMode] = useState(true);

  const [introduction, setActiveIntroduction] = useState(true);
  const [about, setActiveAbout] = useState(false);
  const [projects, setActiveProjects] = useState(false);

  const handleActiveIntroduction = () => {
    setActiveIntroduction(true);
    setActiveAbout(false);
    setActiveProjects(false);
  };

  const handleActiveAbout = () => {
    setActiveIntroduction(false);
    setActiveAbout(true);
    setActiveProjects(false);
  };

  const handleActiveProjects = () => {
    setActiveIntroduction(false);
    setActiveAbout(false);
    setActiveProjects(true);
  };

  return (
    <main className={`container ${mode ? 'lightmode' : 'darkmode'}`}>
      <header>
        <div className="navbar">
          <Link
            to="/"
            className={`word ${mode ? 'lightmode' : 'darkmode'} ${
              introduction
                ? mode
                  ? 'active active-light'
                  : 'active active-dark'
                : 'nav'
            }`}
            onClick={handleActiveIntroduction}
          >
            Introduction
          </Link>
          <>/</>
          <Link
            to="about"
            className={`word ${mode ? 'lightmode' : 'darkmode'} ${
              about
                ? mode
                  ? 'active active-light'
                  : 'active active-dark'
                : 'nav'
            }`}
            onClick={handleActiveAbout}
          >
            About
          </Link>
          <>/</>
          <Link
            to="projects"
            className={`word ${mode ? 'lightmode' : 'darkmode'} ${
              projects
                ? mode
                  ? 'active active-light'
                  : 'active active-dark'
                : 'nav'
            }`}
            onClick={handleActiveProjects}
          >
            Projects
          </Link>
          <>/</>
          <div onClick={() => setMode(!mode)}>
            {mode ? (
              <div className="to-darkmode">☽</div>
            ) : (
              <div className="to-lightmode">☼</div>
            )}
          </div>
        </div>
      </header>
      <content>
        <Outlet context={{ mode }} />
      </content>
    </main>
  );
}

export default Layout;
