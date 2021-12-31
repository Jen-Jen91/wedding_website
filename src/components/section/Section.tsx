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
      <a id={linkId} rel="nofollow"></a>
      <div>
        <h2>{header}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
