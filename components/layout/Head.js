import NextHead from "next/head";

const Head = ({ title = ""}) => {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Next App
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={"Holidaze. Booking agency. Project Exam 2"} />
      <link rel="icon" href="images/logoH.svg" />
    </NextHead>
  );
};
export default Head;
