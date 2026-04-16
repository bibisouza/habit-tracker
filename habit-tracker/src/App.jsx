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

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

}, [darkMode])

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

  function editHabit(id, newName) {
    const updated = 
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              name: newName
            }
          : habit
      )

      setHabits(updated)
  }

  return (
    
    <div className="min-h-screen bg-rose-50 dark:bg-gray-900 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-semibold mb-6 text-center text-rose-600 dark:text-rose-200">
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
          editHabit={editHabit}
        />

      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-6 px-3 py-2 rounded-xl bg-rose-600 dark:bg-gray-400 text-white"
      >
        {darkMode ? "dark mode on" : "dark mode off"}
      </button>
    </div>

  )
}

export default App