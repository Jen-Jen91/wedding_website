import React from "react";
import "./Section.css";

interface ISectionProps {
  sectionId: string;
  linkId: string;
  header: string;
  children: React.ReactNode;
}

const Section = (props: ISectionProps) => {
  const { sectionId, linkId, header, children } = props;

  return (
    <section id={sectionId} className="section">
      <a id={linkId} rel="nofollow" className="section-link"></a>
      <h2 className="section-header">{header}</h2>
      {children}
    </section>
  );
};

export default Section;
