import React, { useState } from "react";

const App = () => {
    const [heading, setHeading] = useState("Hello World");

    const handleClick = () => {
        setHeading("Hello Project");
    }

    return (
        <div>
            <h1>
                {heading}
            </h1>
            <button type="button" onClick={handleClick}>
                Update Heading
            </button>
        </div>
    )
}

export default App;