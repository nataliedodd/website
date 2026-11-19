import React from "react";

const photographs = [
  "01-img_8360-copy.jpg",
  "02-img_8345-copy.jpg",
  "03-img_8897-copy.jpg",
  "04-img_8546-copy.jpg",
  "05-img_8447.jpg",
  "06-disney07.jpg",
  "07-image.jpeg",
  "08-image.jpeg",
  "09-image.jpeg",
  "10-image.jpeg",
  "11-img_7393.jpg",
  "12-img_1896.jpg",
  "13-image-asset.jpeg",
  "14-img_7125.jpg",
  "15-dc142549-e3b4-4aea-b882-6775717eb126.jpg",
  "16-img_7052.jpg",
  "17-img_9707.jpg",
  "18-img_9779.jpg",
  "19-img_9723.jpg",
  "20-18160684_319065571842337_4495778921421209600_n.jpg",
  "21-18160539_749373625240980_6392892798135173120_n.jpg",
];

const previousWork = [
  "01-Screenshot+2022-12-16+at+16.33.01.png.webp",
  "02-Screenshot+2022-12-16+at+17.19.13.png.webp",
  "03-Frame+1.png.webp",
  "04-screencapture-mypthub-net-2023-01-03-20_00_25.png.webp",
  "05-mmp-wide-image.jpg.webp",
  "06-mmp-big-image2.jpg.webp",
  "07-mmp-wide-image2.jpg.webp",
  "08-17157843_1808482209474919_5938499765394077938_o.jpg.webp",
  "09-longhouse-emblem-black.jpg.webp",
  "10-MMC-06-PropertyDetails-990.jpg.webp",
  "11-asset+5.jpeg.webp",
  "12-asset+4.jpeg-2.webp",
  "13-asset+0.jpeg.webp",
  "14-MMC-03-Big-650x500.jpg.webp",
  "15-asset+4.jpeg.webp",
  "16-CcAxm0_WEAAlML2.jpg.webp",
  "17-CcAwZp2XIAA2RVG.jpg.webp",
  "18-Cb2v83bUEAILOKQ.png.webp",
  "19-brandwatchchicago-5.jpg.webp",
  "20-08b6281fa14c8e27b28b9a6e400a88bb.jpg.webp",
  "21-_MG_0522+copy.jpg.webp",
  "22-_MG_0707+copy.jpg.webp",
  "23-asset+2.jpeg.webp",
  "24-asset+1.jpeg.webp",
  "25-Screenshot+2023-01-03+at+20.18.02.png.webp",
  "26-screencapture-upzelo-2022-12-19-20_44_42+copy.png.webp",
  "27-trade-show-2.jpg.webp",
  "28-Screen+Shot+2018-09-04+at+17.25.34.png.webp",
  "29-_DSF7610.JPG.webp",
  "30-_DSF7588.JPG.webp",
  "31-_DSF7596.JPG.webp",
  "32-_DSF7637.jpg.webp",
];

function PhotographyPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <SocialLinks isPhotographyPage />
      <main className="photography-page gallery-page">
        <h1 className="gallery-title">Photography</h1>
        <div className="photo-grid">
          {photographs.map((photo, index) => (
            <img
              key={photo}
              src={`${baseUrl}photography/${photo}`}
              alt={`Photograph ${index + 1} by Natalie Dodd`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </main>
    </>
  );
}

function PreviousWorkPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <SocialLinks isPhotographyPage />
      <main className="previous-work-page">
        <h1 className="previous-work-title">Previous work</h1>
        <div className="previous-work-grid">
          {previousWork.map((image, index) => (
            <img
              key={image}
              src={`${baseUrl}previous-work/${image}`}
              alt={`Previous work example ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </main>
    </>
  );
}

function SocialLinks({ isPhotographyPage = false }) {
  const baseUrl = import.meta.env.BASE_URL;

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
        href={
          isPhotographyPage
            ? baseUrl
            : `${baseUrl}#photography`
        }
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
  const getRoute = () => {
    const path = window.location.pathname.replace(/\/+$/, "");
    const hash = window.location.hash.replace(/^#\/?/, "");
    const pathRoute = path.endsWith("/photography")
      ? "photography"
      : path.endsWith("/previous-work")
        ? "previous-work"
        : "";
    return hash || pathRoute;
  };

  const [route, setRoute] = React.useState(getRoute);

  React.useEffect(() => {
    const updateRoute = () => setRoute(getRoute());
    window.addEventListener("hashchange", updateRoute);
    window.addEventListener("popstate", updateRoute);

    return () => {
      window.removeEventListener("hashchange", updateRoute);
      window.removeEventListener("popstate", updateRoute);
    };
  }, []);

  const isPhotographyPage =
    route === "photography";
  const isPreviousWorkPage =
    route === "previous-work";

  React.useEffect(() => {
    document.title = isPhotographyPage
      ? "Photography — Natalie Dodd"
      : isPreviousWorkPage
        ? "Previous work — Natalie Dodd"
      : "Natalie Dodd — AI Product Designer";
  }, [isPhotographyPage, isPreviousWorkPage]);

  if (isPhotographyPage) {
    return <PhotographyPage />;
  }

  if (isPreviousWorkPage) {
    return <PreviousWorkPage />;
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
