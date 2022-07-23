import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Dashboard from "components/Dashboard";
import RightSidebar from "components/RightSidebar";
import Sidebar from "components/Sidebar";
import styled from "styled-components";
function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(`#sidebar`, {opacity: 0});
  }, []);
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr2.reveal(`#rightSidebar`, {opacity: 0});
  }, []);
  return (
    <Div>
      <Sidebar />
      <Dashboard />
      <RightSidebar />
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

export default App;
