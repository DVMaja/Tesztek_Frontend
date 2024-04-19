import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ValaszButton from "./ValaszButton";

function Feladat(props) {
  let helyesValasz = props.adatok.helyes;
    function helyesE(adat) {
        //console.log(helyesValasz.slice(1,2))
        let jo = helyesValasz.slice(1,2);
        //console.log(adat)
        //console.log("vagyok")
        //.css("background-color","yellow");
        
    }
    //eventTarget

  return (
    <Card className="fluid">
      <Card.Body>
        <Card.Title className="bg-dark text-light text-left">
          {props.adatok.kerdes}
        </Card.Title>
        <Card.Text>
        
          <Button onClick={helyesE()} id="1" className="border border-dark" variant="light">
            {props.adatok.v1}
            
          </Button>
          <Button onClick={helyesE()} id="2" className="border border-dark" variant="light">
            {props.adatok.v2}
          </Button>
          <Button onClick={helyesE()} id="3" className="border border-dark" variant="light">
            {props.adatok.v3}
          </Button>
          <Button onClick={helyesE()} id="4" className="border border-dark" variant="light">
            {props.adatok.v4}
          </Button>
        </Card.Text>
        helyes válasz: {props.adatok.helyes}
      </Card.Body>
    </Card>
  );
}

export default Feladat;
