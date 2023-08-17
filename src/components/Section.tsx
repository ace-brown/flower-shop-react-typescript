import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children = "My section Heading" }: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default Section;
