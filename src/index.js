import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM
import "bootstrap/dist/css/bootstrap.min.css"

const data = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/
let content =<div className="card rounded mx-auto" style={{width:"18rem"}}>
<img className="card-img-top" width={380} src={data.image} alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">{data.cardTitle}</h5>
  <p className="card-text">{data.cardDescription}</p>
  <a href={data.button.url} className="btn btn-primary">{data.button.label}</a>
</div>
</div>

const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(content);
