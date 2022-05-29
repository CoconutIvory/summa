import React from "react";
import styles from "./Header.module.css";
import resumesvg from "./resume.svg";
import { useAuth } from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Button } from "evergreen-ui";

function Header() {
  return (
    <header>
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <LoginBox />
        <PictureBox />
      </div>
    </header>
  );
}

function LoginBox() {
  const { signInWithGoogle } = useAuth();
  return (
    <div className={styles.HeaderBox}>
      <h1> SUMMA.</h1>
      <h2> Your all-in-one personalized resume builder </h2>
      <Button
        marginY={8}
        marginRight={12}
        iconBefore={FcGoogle}
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
    </div>
  );
}

function PictureBox() {
  return (
    <div className={styles.HeaderBox}>
      <img src={resumesvg} alt="Resume" />
    </div>
  );
}

export default Header;
