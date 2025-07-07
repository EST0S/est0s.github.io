"use client";

import React from "react";
import Header from "../header";
import styles from "./default.module.css";
import Content from "./content";

export default function DefaultLayout({ children }: React.PropsWithChildren) {

  return (
    <div className={styles.root}>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}