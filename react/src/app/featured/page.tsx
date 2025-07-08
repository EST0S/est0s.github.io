import React from "react";
import DefaultLayout from "../../components/shared/layouts/default";
import Featured from "../../components/pages/featured";

export default function ResumePage(): React.ReactElement {
  return (
    <DefaultLayout>
      <Featured />
    </DefaultLayout>
  );
}