function Divide(){

      const [enteredNumbers, setEnteredNumbers] = useState({
    
        first: 0, second: 0
    
      });
function changeFirstNumberHandler(event){
    setEnteredNumbers((prevNumbers) => ({

              first: +event.target.value, // "+" converts strings to numbers!
        
              second: prevNumbers.second,
        
            }));
}
function changeSecondNumberHandler(event){
    setEnteredNumbers((prevNumbers) => ({

        first: prevNumbers.first,
  
        second: +event.target.value,
  
      }));
}
return(
    <p>
        <input type="number" onChange={changeFirstNumberHandler}/>
        /
        <input type="number" onChange={changeSecondNumberHandler}/>

    </p>
);
}
export default Divide;

