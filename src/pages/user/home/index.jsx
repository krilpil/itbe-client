import React from 'react';
import {Link} from "react-router-dom";

const IndexContent = () => {
    return (
        <React.Fragment>
            <p><Link to="/panel/add">Add</Link></p>
            <p><Link to="/panel/show">show</Link></p>
        </React.Fragment>
    )
}

export default IndexContent