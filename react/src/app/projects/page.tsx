import React from "react";
import DefaultLayout from "../../components/shared/layouts/default";
import Projects from "../../components/pages/projects";

export default function ProjectsPage(): React.ReactElement {
  return (
    <DefaultLayout>
      <Projects />
    </DefaultLayout>
  );
}