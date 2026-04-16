function HabitForm({ newHabit, setNewHabit, addHabit }) {

    return (
        <div className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Novo hábito..."
                value={newHabit}
                onChange={(e) => 
                    setNewHabit(e.target.value)}
            />

            <button
                onClick={addHabit}
                className="px-4 py-2 bg-purple-500 text-white rounded-x1 hover:bg-purple-600 transition"
            >
                Adicionar
            </button>

        </div>
    )
}

export default HabitForm