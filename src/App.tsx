import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Inbox />}>
          <Route index element={<Sidebar />}></Route>
        </Route>
        <Route path="/mail/:id" element={<Mail />}>
          <Route index element={<Sidebar />}></Route>
        </Route>
      </Routes>

      <SendMail></SendMail>
    </>
  );
};

export default App;
