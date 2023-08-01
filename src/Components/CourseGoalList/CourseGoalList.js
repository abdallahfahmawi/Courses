import React from "react";
import './CourseGoalList.css'
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";


const CourseGoalList = (props) => {
return (
    <ul className='goals-list'>
        {props.items.map(goals => (
            <CourseGoalItem
            key = {goals.id}
            id = {goals.id}
            onDelete ={props.onDeleteItem}
            >
             {goals.text}
            </CourseGoalItem>
        )) }
    </ul>
)
}

export default CourseGoalList