import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>MineCode | Full-Stack Web Developer</title>
      <meta
        name="description"
        content="MineCode — Full-Stack Web Developer building modern, scalable, high-performance applications."
      />
      <meta property="og:title" content="MineCode Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/preview.png" />
      <meta property="og:description" content="Hire a full-stack developer." />
    </Helmet>
  );
}
