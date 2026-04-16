import { useState, useEffect } from "react"

function App() {

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits")

    if (saved) {
      return JSON.parse(saved)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    )
  }, [habits])
  const [newHabit, setNewHabit] = useState("")

  function addHabit() {
    if (newHabit.trim() === "") return

    const habit = {
      id: Date.now(),
      name: newHabit,
      done: false
    }

    setHabits([...habits, habit])
    setNewHabit("")

  }

  function toggleHabit(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          done: !habit.done
        }
      }

      return habit

    })

    setHabits(updatedHabits)
  }

  function deleteHabit(id) {

    const filteredHabits = habits.filter(
      (habit) => habit.id !== id
    )

    setHabits(filteredHabits)
  }

  return (
    <div>
      <h1>Habit Tracker</h1>

      <input 
        type="text"
        placeholder="Novo hábito..."
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
      />

      <button onClick={addHabit}>
        Adicionar
      </button>


      <ul>
        {habits.map((habit) => (

          <li key={habit.id}>
            <input 
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(habit.id)}
            />

            <span
              style={{
                textDecoration: habit.done ? "line-through" : "none"
              }}
            >
              {habit.name}
            </span>     

            <button
              onClick={() => deleteHabit(habit.id)}
            >
              Remover
            </button>  

          </li>
        ))}

      </ul>

    </div>
  )
}

export default App