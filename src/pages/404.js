import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  // Router
  const router = useRouter();

  // Counter state
  const [counter, setCounter] = useState(3);

  // Counter effect
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) router.push("/"); // redirect to homepage
  }, [counter]);

  // Effect
  useEffect(() => {
    setTimeout(() => {
      // redirect
      //router.go(-1) // go back
      //router.push("/"); // redirect to homepage
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Problem</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
      <p>You will be automatically redirected to the home page in {counter} seconds.</p>
    </div>
  );
};

export default NotFound;
