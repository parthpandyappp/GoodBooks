import React from 'react'

 

function Show(props) {

    return (
        <div className="todo-item">
            <p>{props.det.name}</p>
        </div>
    );
}

export default Show;