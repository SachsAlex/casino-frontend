import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons";
import styles from "./LogInPage.module.css";
import logo from "../../mediathek/images/MCLX.webp";
import { faker } from "@faker-js/faker";
import { useContext, useState } from "react";
import UserContext from "../../components/common/userContext";

function LogInPage() {
  const [userName, setUsername] = useState("");
  const { logInUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login Funktion");
    try {
      await logInUser(userName, password);
      console.log("UserName und so");
      navigate("/lobby");
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Fehler beim Einloggen:", error.message);
      } else {
        console.error("Unbekannter Fehler beim Einloggen:", error);
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
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
            onSubmit={handleLogin}
            placeholder="Username"
            type="Username"
            value={userName}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label>Password: </label>
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <br />
          <div className={styles.button}>
            <Button
              text={"Bestätigen"}
              onClick={handleLogin} //Arrow Function durch e.preventDefault
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
