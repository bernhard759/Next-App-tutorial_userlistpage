import styles from "../../styles/Users.module.css";
import Link from "next/link";

// SSR fetching
export const getStaticProps = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
// Return data as prop
return {
  props: {
    users: data,
  }
}
}

// Component markup
const Index = ({ users }) => {
  return (
    <>
      <h1>All users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link className={styles.single} href={`/users/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Index;
