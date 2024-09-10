import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons";
import styles from "./LogInPage.module.css";
import logo from "../../mediathek/images/MCLX.webp";
import { faker } from "@faker-js/faker";

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

  const idNum = faker.number.int(50000);

  return (
    <div className={styles.background}>
      <img className={styles.logoleft} src={logo} alt="LogoLeft" />
      <img className={styles.logoright} src={logo} alt="LogoRight" />
      <label className={styles.fakeId}>#{idNum}</label>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <br />
          <label>Username:</label>
          <input
            className={styles.input}
            // onSubmit={handleLogin}
            placeholder="Username"
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
