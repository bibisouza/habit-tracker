function HabitItem({
    habit,
    toggleHabit,
    deleteHabit
}) {
    return (

        <li className="flex items-center justify-between bg-white p-4 rounded-x1 shadow-sm">
            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={habit.done}
                    onChange={() => 
                        toggleHabit(habit.id)
                    }
                    className="w-5 h-5"
                />

                <span
                    className={`text-lg ${
                        habit.done
                            ? "line-through text-gray-400"
                            : ""
                    }`}>
                        {habit.name}
                    </span>

            </div>

            <button
                onClick={() =>
                    deleteHabit(habit.id)
                }
                className="text-red-500 hover:text-red-700"
                >
                    Remover
                </button>
        </li>
    )
}

export default HabitItem