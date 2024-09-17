import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons";
import styles from "./SignUpPage.module.css";
import { useState } from "react";
import { AuthMutations } from "../../api/v1/auth";

function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwörter stimmen nicht überein");
      return;
    }
    const newAge = calculate_age(dob);
    if (newAge < 18) {
      setError("Sie sind zu jung für diese App");
      return;
    }
    try {
      const profile = await AuthMutations.createUser(
        userName,
        dob,
        email,
        password,
      );
      console.log("Benutzer erfolgreich registriert:", profile);
      navigate("/login");
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Fehler beim Registrieren:", error.message);
      } else {
        console.error("Unbekannter Fehler beim Registrieren:", error);
      }
    }
  };

  function calculate_age(dob: string) {
    console.log(dob);
    var diff_ms = Date.now() - new Date(dob).getTime();
    console.log(diff_ms);
    var age_dt = new Date(diff_ms);
    var age_edited = Math.abs(age_dt.getUTCFullYear() - 1970);
    console.log(age_edited);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <div className={styles.background}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <br />
          <label>Username</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <label>Geburtsdatum</label>
          <input
            className={styles.input}
            type="text"
            placeholder="YYYY,MM,DD"
            value={dob}
            onChange={e => setDob(e.target.value)}
          />
          <label>E-Mail</label>
          <input
            className={styles.input}
            type="email"
            placeholder="E-Mail Adresse"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Passwort</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label>Passwort wiederholen</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Passwort wiederholen"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
          <br />
          <div className={styles.button}>
            <Button
              text={"Bestätigen"}
              onClick={handleSignup}
              id=""
              className={styles.buttonplus}
            />
            <Button
              text={"Abbrechen"}
              onClick={handleCancel}
              id=""
              className={styles.buttonplus}
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
