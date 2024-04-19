import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Feladat(props) {
  let helyesValasz = props.adatok.helyes;


  return (
    <Card className="fluid">
      <Card.Body>
        <Card.Title className="bg-dark text-light text-left">
          {props.adatok.kerdes}
        </Card.Title>
        <Card.Text>
          <Button  className="border border-dark" variant="light">
            {props.adatok.v1}
          </Button>
          <Button className="border border-dark" variant="light">
            {props.adatok.v2}
          </Button>
          <Button className="border border-dark" variant="light">
            {props.adatok.v3}
          </Button>
          <Button className="border border-dark" variant="light">
            {props.adatok.v4}
          </Button>
        </Card.Text>
        helyes válasz: {props.adatok.helyes}
      </Card.Body>
    </Card>
  );
}

export default Feladat;
