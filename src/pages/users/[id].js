// SSR path listing
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  // Return paths to generate all the pages
  return {
    paths: paths,
    fallback: false,
  };
};

// SSR user data fetching
export const getStaticProps = async (context) => {
  const id = context.params.id; // id is in the context object
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  // Return props
  return {
    props: {
      user: data,
    },
  };
};

// Details component
const Details = ({ user }) => {
  // Markup
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
