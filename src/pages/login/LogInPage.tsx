import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons";
import styles from "./LogInPage.module.css";
import logo from "../../mediathek/images/MCLX.webp";

function LogInPage() {
  // const [userName, setUsername] = useState("");
  // const { logInUser } = useContext(UserContext);
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async e => {
  //   e.preventDefault();
  //   try {
  //     await logInUser(userName, password);
  //   } catch (error) {
  //     console.error("Fehler beim Einloggen:", error);
  //   }
  // };

  const handleCancel = () => {
    navigate("/");
  };

  const handleConfirm = () => {
    navigate("/lobby");
  };
  // Design eines Casino Chips mit MCLX Münze und faker-Nummer (untraceable)
  return (
    <div className={styles.background}>
      <img className={styles.logoleft} src={logo} alt="LogoLeft" />
      <img className={styles.logoright} src={logo} alt="LogoRight" />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <br />
          <label>UserName:</label>
          <input
            className={styles.input}
            // onSubmit={handleLogin}
            placeholder="UserName"
            type="Username"
            // value={userName}
            // onChange={e => setUsername(e.target.value)}
            required
          />

          <label>Password: </label>
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            required
          />
          <br />
          <div className={styles.button}>
            <Button
              text={"Bestätigen"}
              onClick={handleConfirm}
              id=""
              className={styles.buttonplus}
            />{" "}
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

export default LogInPage;
