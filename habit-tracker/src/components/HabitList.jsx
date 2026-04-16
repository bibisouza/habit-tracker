import HabitItem from "./HabitItem";

function HabitList({
    habits,
    toggleHabit,
    deleteHabit,
    editHabit
}) {

    if (habits.length === 0) {
        return (
            <p className="text-gray-400 text-center">
                Nenhum hábito ainda
            </p>
        )
    }

    return (

        <ul className="flex flex-col gap-3">
            {habits.map((habit) => (

                <HabitItem
                    key={habit.id}
                    habit={habit}
                    toggleHabit={toggleHabit}
                    deleteHabit={deleteHabit}
                    editHabit={editHabit}
                />

            ))}
        </ul>
    )
}

export default HabitList