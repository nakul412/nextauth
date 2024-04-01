import Link from "next/link";
import SessionServer from "./Session/SessionServer";
import SessionClient from "./Session/SessionClient";
import { signOut } from "next-auth/react";
import _button from "./_button";
export default function Home() {
  return (  
    <>
          <Link href="api/auth/signout">signout</Link>
          {/* <_button></_button> */}
          <SessionServer></SessionServer>
    </>

  );
}
