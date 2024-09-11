import { useState } from "react";
import Burger from "./images/burger.png";
import Heart from "./images/heart.jpg";
import Pasta from "./images/pasta.jpeg";
import Pizza from "./images/pizza.jpeg";
import "bulma/css/bulma.min.css";
import "./style.css";

const Card = ({ title }) => {
    const [like, setLike] = useState(false);
    const images_list = {
        Burger,
        Pasta,
        Pizza,
    };

    const toggle = () => {
        setLike(!like);
    };

    return (
        <div className="card">
            <div className="card-image">
                <img
                    className="image stock"
                    src={images_list[title]}
                    alt={title}
                ></img>
                <img
                    onClick={toggle}
                    src={Heart}
                    style={{ width: `${like ? 80 : 40}px` }}
                    alt="like icon"
                />
            </div>
        </div>
    );
};

export default Card;
