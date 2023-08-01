import React,{useState}from 'react';
import './App.css'
import CourseInput from './Components/CourseInput/CourseInput';
import CourseGoalList from './Components/CourseGoalList/CourseGoalList';

function App() {
  // Goal Handler begin array
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  
const addGoalHandler = (enteredText) => {
  setCourseGoals(prevGoals => {
    const updatedGoals = [...prevGoals];
    updatedGoals.unshift({text :enteredText, id : Math.random().toString()})
    console.log(updatedGoals)
    return updatedGoals
  })
};

const deleteItemHandler = (goalId)=> {
  setCourseGoals(prevGoals => {
    const updatedGoals = prevGoals.filter(goal => goal.id !== goalId)
    return updatedGoals
  })
  
}

 let content = (
  <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
);

 if (courseGoals.length > 0) {
  content = (<div>
    <CourseGoalList items={courseGoals} onDeleteItem ={deleteItemHandler}/>
    
  </div>)
 }
  return (
    <div>
      <section id="goalForm">
      <CourseInput onAddGoal={addGoalHandler}  />
    </section>
    <section id="goals">
      {content}
    </section>
    </div>
    
    
  );
}

export default App;
