// 'use client' - if not in csr then it will
// give error because of event handler

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Title = () => {
  const [name, setName] = useState("");
  const router = useRouter(); // - This hook gives access the router object inside the Pages Router.

  const onSubmit = () => {
    alert(name);
    setName("");
  };
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <input
        type="text"
        value={name}
        placeholder="Type here..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSubmit}>disp name</button>
      <button onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
};

export default Title;
