import React from "react";

const Card = ({imageUrl, title, description}) => {
    return (
        <div className="card bg-light text-center border border-3">
            <img src={imageUrl} alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
    );
};

export default Card;