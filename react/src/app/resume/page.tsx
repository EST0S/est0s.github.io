import React from "react";
import DefaultLayout from "../../components/shared/layouts/default";
import Resume from "../../components/pages/resume";

export default function ResumePage(): React.ReactElement {
  return (
    <DefaultLayout>
      <Resume />
    </DefaultLayout>
  );
}