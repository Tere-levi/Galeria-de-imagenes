import React from "react";

const Header = ({title}) => {
    return (
        <header>
            <h1 className="text-center bg-dark p-2 mb-3 mh-vh-10">{title}</h1>
        </header>
    );
};

export default Header;