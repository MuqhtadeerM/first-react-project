import { useState, lazy, Suspense } from "react";
// import User from "./User";

const User = lazy(() => import("./User"));

export default function App() {
  const [load, setLoad] = useState(false);

  return (
    <div>
      <h1>Lazy Loaidng</h1>

      <button onClick={() => setLoad(true)}>Load User</button>
      {load ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />
        </Suspense>
      ) : null}
    </div>
  );
}
