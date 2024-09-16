import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  // const [newUserName, setNewUserName] = useState("");
  // const [dob, setDob] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleConfirm = () => {
    navigate("/lobby");
  };

  // const handleSignup = async () => {
  //   if (newPassword !== confirmPassword) {
  //     setError("Passwörter stimmen nicht überein");
  //     return;
  //   }
  //   const newAge = calculate_age(dob)
  //   if (newAge < 18 ) {
  //     setError("Sie sind zu jung für diese App");
  //     return;
  //   }
  //   try {
  //     const profile = await AuthMutations.createUser(
  //       newUserName,
  //       newAge,
  //       newEmail,
  //       newPassword
  //     );
  //     console.log("Benutzer erfolgreich registriert:", profile);
  //     navigate("/login"); // Weiterleitung zur Loginseite
  //   } catch (error) {
  //     console.error("Fehler beim Registrieren:", error);
  //     // Hier können Sie eine Fehlermeldung anzeigen
  //   }
  // };

  // function calculate_age(dob) {
  //   var diff_ms = Date.now() - dob.getTime();
  //   var age_dt = new Date(diff_ms);

  //   return Math.abs(age_dt.getUTCFullYear() - 1970);
  // }

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
            // value={newUserName}
            // onChange={e => setNewUserName(e.target.value)}
          />
          <label>Geburtsdatum</label>
          <input
            className={styles.input}
            type="text"
            placeholder="YYYY,MM,DD"
            // value={dob}
            // onChange={e => setDob(e.target.value)}
          />
          <label>E-Mail</label>
          <input
            className={styles.input}
            type="email"
            placeholder="E-Mail Adresse"
            // value={newEmail}
            // onChange={e => setNewEmail(e.target.value)}
          />
          <label>Passwort</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Passwort"
            // value={newPassword}
            // onChange={e => setNewPassword(e.target.value)}
          />
          <label>Passwort wiederholen</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Passwort wiederholen"
            // value={confirmPassword}
            // onChange={e => setConfirmPassword(e.target.value)}
          />
          {/* {error && <p>{error}</p>} */}
          <br />
          <div className={styles.button}>
            <Button
              text={"Bestätigen"}
              onClick={handleConfirm}
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
