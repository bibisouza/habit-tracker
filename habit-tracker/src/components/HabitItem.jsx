import { useState } from "react"

function HabitItem({
    habit,
    toggleHabit,
    deleteHabit,
    editHabit
}) {

    const [isEditing, setIsEditing] =
        useState(false)

    const [editedName, setEditedName] =
        useState(habit.name)

    function handleSave() {
        
        if (editedName.trim() === "")
            return

        editHabit(habit.id, editedName)

        setIsEditing(false)
    }

    return (

        <li className="flex items-center justify-between bg-rose-50 dark:bg-rose-800 p-4 rounded-x1 hover:bg-rose-100 transition">
            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={habit.done}
                    onChange={() => 
                        toggleHabit(habit.id)
                    }
                    className="w-5 h-5 accent-rose-500 dark:accent-rose-700"
                />

                {isEditing ? (

                    <input
                        value={editedName}
                        onChange={(e) => 
                            setEditedName(e.target.value)
                        }
                        className="flex-1 px-2 py-1 border rounded"
                    />
                ) : (
                <span
                    className={`text-lg ${
                        habit.done
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                    }`}>
                        {habit.name}
                    </span>
                )}

            </div>

            <div className="flex gap-2">
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        className="text-green-500 dark:text-green-300"
                    >
                        Salvar
                    </button>
                ) : (
                    <button 
                        onClick={() => 
                            setIsEditing(true)
                        }
                        className="text-rose-500 dark:text-rose-300"
                    >
                        Editar
                    </button>
                )}
            </div>

            <button
                onClick={() =>
                    deleteHabit(habit.id)
                }
                className="text-gray-400 hover:text-red-500 transition"
                >
                    X
                </button>
        </li>
    )
}

export default HabitItem