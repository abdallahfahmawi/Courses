import React from "react";
import './CourseGoalItem.css'

const CourseGoalItem = (props) => {

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
      };
    

return <li onClick={deleteHandler}>
    {props.children}
</li>
};
export default CourseGoalItem