import styled from "styled-components";
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Streams from "./Streams";
import TargetAudeince from "./TargetAudeince";
import TopReleases from "./TopReleases";
export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row">
          <Streams />
          <Earnings />
        </div>
        <div className="row2">
          <TargetAudeince />
          <TopReleases />
        </div>
      </div>
    </Section>
  );
}

//this is for the earnings card displayed on the site
const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);
  .grid {
    padding: 2rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }
    .row2 {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }
  }
  
`;
