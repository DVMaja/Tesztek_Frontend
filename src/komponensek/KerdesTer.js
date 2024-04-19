import { useGet } from "../model/Axios";
import Feladat from "./Feladat";
import Dropdown from "react-bootstrap/Dropdown";

export default function KerdesTer() {
  const adatok = useGet("tesztek");
  console.log(adatok);
  const kategoriak = useGet("kategoria");
  //console.log(kategoriak);

  if (adatok == null || kategoriak == null) {
    return <div>Kis türelmet az adatok betöltés alatt</div>;
  } else {
    return (
      <div className="container">
        <div className="d-flex p-2 bd-highlight">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {kategoriak[0].kategoriaNev}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {kategoriak.map((kategoriak, index) => {
                return (
                  <Dropdown.Item key={index} href="#/action-1">
                    {kategoriak.kategoriaNev}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="container">
          {adatok.map((adatok, index) => {
            return <Feladat adatok={adatok} key={index} />;
          })}
        </div>
        <div>Elért Pontszám: 0</div>
      </div>
    );
  }
}
