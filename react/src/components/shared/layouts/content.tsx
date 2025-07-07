import React from "react";
import styles from "./content.module.css";

export default function Content({ children }: React.PropsWithChildren) {
  return <div className={styles.root}>{children}</div>;
}
