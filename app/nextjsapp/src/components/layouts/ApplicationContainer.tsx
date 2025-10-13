
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import Header from "./Header"
import Footer from "./Footer"
import { User } from "../../types/User";


type ApplicationContainerProps = {
  children: React.ReactNode;
  user: User | null;
};

const ApplicationContainer = ({ children, user }: ApplicationContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header
        familyname={user?.familyname ?? ""}
        firstname={user?.firstname ?? ""}
        img={user?.img ?? ""}
      />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
};

export default ApplicationContainer;
