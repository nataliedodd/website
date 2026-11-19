import React from "react";

function PhotographyPage() {
  return (
    <>
      <SocialLinks isPhotographyPage />
      <main className="holding-page photography-page">
        <div className="message">
          <p className="page-title">Photography</p>
          <p className="photography-note">
            A collection of moments, coming soon.
          </p>
          <a className="back-link" href="/">
            Back to the portfolio
          </a>
        </div>
      </main>
    </>
  );
}

function SocialLinks({ isPhotographyPage = false }) {
  return (
    <nav className="site-nav" aria-label="Social links and photography">
      <a
        className="icon-link"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7v6.2h-3.6V15c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9.2V9Z" />
        </svg>
      </a>
      <a
        className="icon-link"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.6-1.2-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      </a>
      <a
        className="camera-link"
        href={isPhotographyPage ? "/" : "/photography/"}
        aria-label={isPhotographyPage ? "Portfolio home" : "Photography"}
      >
        {isPhotographyPage ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9.25" />
            <path d="M2.9 12h18.2M12 2.75c2.35 2.55 3.55 5.63 3.55 9.25S14.35 18.7 12 21.25C9.65 18.7 8.45 15.62 8.45 12S9.65 5.3 12 2.75Z" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7.5h4l1.5-2h7l1.5 2h4v12H3z" />
            <circle cx="12" cy="13.5" r="4" />
          </svg>
        )}
      </a>
    </nav>
  );
}

export default function App() {
  const isPhotographyPage = window.location.pathname.replace(/\/+$/, "") === "/photography";

  React.useEffect(() => {
    document.title = isPhotographyPage
      ? "Photography — Natalie Dodd"
      : "Natalie Dodd — AI Product Designer";
  }, [isPhotographyPage]);

  if (isPhotographyPage) {
    return <PhotographyPage />;
  }

  return (
    <>
      <SocialLinks />
      <main className="holding-page">
        <div className="message">
          <h1>
            Hi, I’m Natalie, currently designing AI experiences at{" "}
            <a
              href="https://www.lseg.com/en/data-analytics"
              target="_blank"
              rel="noreferrer"
            >
              <strong>The London Stock Exchange Group</strong>
            </a>
            .
          </h1>
        </div>
      </main>
    </>
  );
}
