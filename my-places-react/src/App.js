import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 't1' },
    { id: 'cg2', text: 't2' },
    { id: 'cg3', text: 't3' }
  ]);

  const addNewGoalHandler = newGoal => {

    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal))
  }

  return (
    <div className="course-goals">
      <h2>C G</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  )
};


export default App;
