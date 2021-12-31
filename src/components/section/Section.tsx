import React from "react";

interface ISectionProps {
  sectionId: string;
  linkId: string;
  header: string;
  children: React.ReactNode;
}

const Section = (props: ISectionProps) => {
  const { sectionId, linkId, header, children } = props;

  return (
    <section id={sectionId}>
      <a id={linkId} rel="nofollow">
        <h2>{header}</h2>
      </a>
      {children}
    </section>
  );
};

export default Section;
