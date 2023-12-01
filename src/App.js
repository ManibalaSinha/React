//import { useState } from "react";
import './App.css';
import EnrolmentForm from './components/EnrolmentForm';
function App() {
  return (
    <div className="App">
      <EnrolmentForm>Just React</EnrolmentForm>
    </div>
  );
}
export default App;
/* const [enteredEmail, setEnteredEmail]= useState();
    const [inputIsInvalid, setInputIsInvalid] = useState(false);
    function emailChangeHandler(event){
      setEnteredEmail(event.target.value);
    }
    function submitFormHandler(event){
      event.preventDefault();
      const emailIsValid = enteredEmail.includes('@');
      setInputIsInvalid(!emailIsValid);
    }
    return (
      <section>
    <form onSubmit={submitFormHandler}>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" onChange={emailChangeHandler}/>
      <button>Submit</button>
    </form>
    {inputIsInvalid && <p>Invalid email address entered!</p>}
    </section>
  ); */