import Card from "./Card.js";
import "bulma/css/bulma.min.css";

function App() {
    const images_list = ["Burger", "Pizza", "Pasta"];
    const cards = [];

    images_list.forEach((image_name) => {
        cards.push(
            <div className="column is-one-third" key={image_name}>
                <Card title={image_name} />
            </div>
        );
    });
    return (
        <div className="section">
            <h1 className="title has-text-centered">Restaurant Menu</h1>
            <div className="columns is-centered is-multiline">{cards}</div>
        </div>
    );
}

export default App;
