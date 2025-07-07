import React from "react";
import DefaultLayout from "../components/shared/layouts/default";
import Home from "../components/pages/home";

export default function HomePage(): React.ReactElement {
  
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}