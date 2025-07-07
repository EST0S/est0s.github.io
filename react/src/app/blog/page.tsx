import React from "react";
import DefaultLayout from "../../components/shared/layouts/default";
import Blog from "../../components/pages/blog";

export default function BlogPage(): React.ReactElement {
  return (
    <DefaultLayout>
      <Blog />
    </DefaultLayout>
  );
}