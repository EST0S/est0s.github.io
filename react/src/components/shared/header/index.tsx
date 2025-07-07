import styles from "./index.module.css";
import emailSrc from '../../../assets/email.svg';
import githubSrc from '../../../assets/github.svg';
import linkedinSrc from '../../../assets/linkedin.svg';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

const myEmail = "estosic@littech.ai";

export default function Header() {
  const navigate = useNavigate();

  const handleHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleResumeClick = useCallback(() => {
    navigate("/resume");
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
      <div className={styles.siteName}>
        EVAN STOSIC
      </div>
      <div className={styles.nav}>
        <button onClick={handleHomeClick}>
          HOME
        </button>
        <button onClick={handleResumeClick}>
          RESUME
        </button>
        <button onClick={handleBlogClick}>
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