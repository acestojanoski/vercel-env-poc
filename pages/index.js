export default () => {
  return <h1>Home</h1>;
};

export const getServerSideProps = () => {
  console.debug("environment", process.env.TEST_ENV);

  return {
    props: {},
  };
};
