function ProgressBar({ habits }) {

    const total = habits.length

    const completed =
        habits.filter(
            (habit) => habit.done
        ).length
    
    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            )
    return (

        <div className="mb-6">
            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>
                    {completed} de {total} hábitos concluídos
                </span>
                <span className="font-medium text-rose-100 dark:text-rose-300">
                    {percentage}%
                </span>

            </div>
            <div className="w-full h-4 bg-rose-100 dark:bg-rose-300 rounded-full overflow-hidden">
                <div
                    className="h-4 bg-rose-500 dark:bg-rose-800 rounded-full transition-all duration-300"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>
        </div>
    )
}

export default ProgressBar