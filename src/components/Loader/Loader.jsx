import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={125}
    viewBox="0 0 500 125"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdbdd"
  >
    <rect x="0" y="0" rx="8" ry="8" width="420" height="125" />
    <rect x="435" y="0" rx="8" ry="8" width="50" height="125" />
  </ContentLoader>
);

export default MyLoader;