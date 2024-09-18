import React, { createContext, ReactNode, useEffect, useState } from "react";
import { fetchCurrentUser } from "../../../api/v1/user/UserQueries";
import { AuthQueries } from "../../../api/v1/auth";
import { useNavigate } from "react-router-dom";
import TokenHandler from "../../../utils/TokenHandler";
import { AxiosError } from "axios";

interface Props {
  children: ReactNode;
}

type AuthUser = {
  userName: string;
  password: string;
  id: number;
};

interface UserContextProps {
  logOutUser: () => void;
  logInUser: (userName: string, password: string) => void;
  user: AuthUser | null;
}

const defaultUserContext: UserContextProps = {
  logOutUser: () => {
    console.log("User logged out");
  },
  logInUser: () => {
    console.log("User logged in");
  },
  user: null,
};

//Context-Objekt für den Benutzerstatus
const UserContext = createContext<UserContextProps>(defaultUserContext);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logOutUser = () => {
    setUser(null);
    TokenHandler.deleteAccessToken();
    navigate("/");
  };

  //Funktion zum Abrufen der Benutzerdaten
  async function fetchUserData() {
    try {
      const result = await fetchCurrentUser();
      console.log("Here we are ", result);
      if (result.profile) {
        setUser(result.profile);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Fehler bei fetchUserData:", error.message);
      } else {
        console.error("Unbekannter Fehler bei fetchUserData:", error);
      }
    }
  }

  const logInUser = async (userName: string, password: string) => {
    const response = await AuthQueries.loginUser(userName, password);
    console.log("LogInUser Response ", response);

    if (response.user) {
      setUser(response.user);
    } else fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  // [] notwendig für Funktionalität der App, Warnung ignorieren

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
