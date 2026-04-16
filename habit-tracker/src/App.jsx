import { useState, useEffect } from "react"

import HabitForm from "./components/HabitForm"
import HabitList from "./components/HabitList"
import ProgressBar from "./components/ProgressBar"

function App() {

  const [habits, setHabits] =
    useState(() => {

      const saved =
        localStorage.getItem("habits")

      return saved
        ? JSON.parse(saved)
        : []

    })
  
  const [newHabit, setNewHabit] =
    useState("")
  
  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    )

  }, [habits])

  function addHabit() {

    if (newHabit.trim() === "")
      return

    const habit = {
      id: Date.now(),
      name: newHabit,
      done: false
    }

    setHabits([...habits, habit])

    setNewHabit("")
  }

  function toggleHabit(id) {

    const updated =
      habits.map((habit) => 
        habit.id === id
          ? {
              ...habit,
              done: !habit.done
            }
          : habit
      )

    setHabits(updated)

  }

  function deleteHabit(id) {

    setHabits(
      habits.filter(
        (habit) =>
          habit.id !== id
      )
    )

  }

  return (
    
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-3x1 shadow-lg">
        <h1 className="text-3x1 font-bold mb-6 text-center text-purple-600">
          Habit Tracker
        </h1>

        <ProgressBar habits={habits} />

        <HabitForm
          newHabit={newHabit}
          setNewHabit={setNewHabit}
          addHabit={addHabit}
        />

        <HabitList
          habits={habits}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />

      </div>
    </div>

  )
}

export default App