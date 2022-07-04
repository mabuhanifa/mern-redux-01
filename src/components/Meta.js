import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{}</title>
      <meta name="description" content="description" />
      <meta name="keyword" content="description" />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome to Gadget Square",
  description: "We sell the best tech product",
  keywords: "gadget,electronics,buy gadget",
};
export default Meta;
