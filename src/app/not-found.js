"use client"; // This file is client-side only

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1);
      router.push("/")
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>This page cannot be found.</h2>
        <p>Go back to the <Link href="/" className="link">Homepage</Link></p>
    </div>
  );
}

export default NotFound;