import styles from "./index.module.css";

export default function Home() {

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.home}>
          <h3 className={styles.profession}>
            Software Developer
          </h3>
          <h1 className={styles.name}>
            Evan Stosic
          </h1>
          <p>
            Hello, my name is Evan Stosic. I am currently a Software Developer 
            at <a href="https://www.tditek.com/" target="_blank">TDI Technologies Inc.</a> and <a href="https://littech.ai/" target="_blank">LitTech Inc.</a> I 
            specialize in full-stack development, primarily on web applications built with React and Next.js.
            I also have experience in AI development, data engineering (Microsoft stack), and secure software development.
          </p>
          <p>
            Feel free to connect with me on LinkedIn, GitHub, or through email by clicking the icons on the header
            of this site. Also, you're welcome to explore this site as I update it with new work experience, projects,
            and blog entries.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        test
      </div>
    </div>
  )
}