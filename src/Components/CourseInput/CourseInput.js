import React, {useState}from 'react';

import Button from 'D:/ReactProject/my-app/src/UI/Button';
import './CourseInput.css';

const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState ('');
  const [isValid , setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0 ) {
      setIsValid(true)
    } 
    setEnteredValue(event.target.value)
    setIsValid(true)
  }

// Form Handler Function//
const submitFormHandler = event => {
    event.preventDefault()

    if (enteredValue.trim().length === 0 ) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue)
    setEnteredValue('')
    
}
// End of Submit handler function */
  
 
  return (
    <form onSubmit={submitFormHandler}>
      <div className={`inputForm ${!isValid ? "invalid" : null}`}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
