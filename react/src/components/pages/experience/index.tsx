import styles from "./index.module.css";

export default function Experience() {

  return (
    <div className={styles.root}>
      He has attained the following degrees:
        <ul>
          <li>BCS (Bachelor's in Computer Science) Secure Computing, Virginia Tech '23</li>
          <li>B.S. Applied Discrete Mathematics, Virginia Tech '23</li>
          <li>M.S. Mathematics, Virginia Tech '25</li>
        </ul>
    </div>
  )
}