import styles from "./index.module.css";
import classNames from "classnames";
import emailSrc from '../../../assets/email.svg';
import githubSrc from '../../../assets/github.svg';
import linkedinSrc from '../../../assets/linkedin.svg';
import profileSrc from '../../../assets/profile.jpeg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback, useMemo } from "react";

const myEmail = "estosic@littech.ai";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location]);

  const handleHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleFeaturedClick = useCallback(() => {
    navigate("/featured");
  }, [navigate]);

  const handleExperienceClick = useCallback(() => {
    navigate("/experience");
  }, [navigate]);

  const handleProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const handleBlogClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const handleEmailClick = () => {
    const link = `mailto:${myEmail}?subject=&body=`;
    window.location.href = link;
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/evan-stosic", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/EST0S", "_blank");
  };

  return (
    <div className={styles.root}>
      <div className={styles.siteHeader}>
        <img src={profileSrc} className={styles.icon} />
        <span>EVAN STOSIC</span>
      </div>
      <div className={styles.nav}>
        <button 
          onClick={handleHomeClick}
          className={classNames({
            [styles.selected]: pathname === "/" || pathname.length === 0,
          })}
        >
          HOME
        </button>
        <button 
          onClick={handleFeaturedClick}
          className={classNames({
            [styles.selected]: pathname.startsWith("/featured"),
          })}
        >
          FEATURED
        </button>
        <button 
          onClick={handleExperienceClick}
          className={classNames({
            [styles.selected]: pathname.startsWith("/experience"),
          })}
        >
          EXPERIENCE
        </button>
        <button 
          onClick={handleProjectsClick}
          className={classNames({
            [styles.selected]: pathname.startsWith("/projects"),
          })}
        >
          PROJECTS
        </button>
        <button 
          onClick={handleBlogClick}
          className={classNames({
            [styles.selected]: pathname.startsWith("/blog"),
          })}
        >
          BLOG
        </button>
      </div>
      <div className={styles.link}>
        <button onClick={handleEmailClick}>
          <img src={emailSrc} className={styles.icon} />
        </button>
        <button onClick={handleGithubClick}>
          <img src={githubSrc} className={styles.icon} />
        </button>
        <button onClick={handleLinkedInClick}>
          <img src={linkedinSrc} className={styles.icon} />
        </button>
      </div>
    </div>
  )
}