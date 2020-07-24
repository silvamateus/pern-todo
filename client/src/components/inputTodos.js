import React, {Fragment, useState} from 'react';

const InputTodo = () => {
    const {descritpion, setDescription} = useState("");
    const change = event => () => setDescription( () => event.target.value)
    const onSubmitForm = async e => {
        e.preventDefault();
        console.log(e)
        // try {
        //     const body = {descritpion};
        //     const response = await fetch("http://localhost:5000/todos",
        //     {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify(body)
        //     } );
        //     console.log(response)
        // } catch (err) {
        //     console.error(err.message)
        // }
    }
    return ( <Fragment>
        <h1 className="text-center mt-5" >Pern Todo List</h1>
        <form className="d-flex mt-5" onSubmit={ onSubmitForm}>
            <input type="text" 
            className="form-control" 
            value={descritpion}
            onChange={ e => setDescription(e.target.value)}
            />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>)
}

export default InputTodo;