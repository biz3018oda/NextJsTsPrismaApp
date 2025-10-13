import Header from "./Header"
import Footer from "./Footer"
// import { User } from "../../types/User";


type ApplicationContainerProps = {
  children: React.ReactNode;
  // user: User | null;
};

// const ApplicationContainer = ({ children, user }: ApplicationContainerProps) => {
const ApplicationContainer = ({ children}: ApplicationContainerProps) => {
  return (
    <>
      <Header
        // familyname={user?.familyname ?? ""}
        // firstname={user?.firstname ?? ""}
        // img={user?.img ?? ""}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default ApplicationContainer;
