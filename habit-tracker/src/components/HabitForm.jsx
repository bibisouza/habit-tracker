function HabitForm({ newHabit, setNewHabit, addHabit }) {

    return (
        <div className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Novo hábito..."
                value={newHabit}
                onChange={(e) => 
                    setNewHabit(e.target.value)}
                className="flex-1 px-4 py-3 border border-rose-200 dark:text-gray-200 rounded-x1 outline-none focus:ring-2 focus:ring-rose-400"
            />

            <button
                onClick={addHabit}
                className="px-5 py-3 bg-rose-500 dark:bg-rose-800 text-white font-medium rounded-x1 hover:bg-rose-600 transition"
            >
                Adicionar
            </button>

        </div>
    )
}

export default HabitForm