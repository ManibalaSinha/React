function Add(){
    function changeFirstNumberHandler(event){

    }
    function changeSecondNumberHandler(event){

    }
    return(
        <p>
            <input type="number" onChange={changeFirstNumberHandler}/>
            +
            <input type="number" onChange={changeSecondNumberHandler}/>

        </p>
    );
    }
export default Add;

