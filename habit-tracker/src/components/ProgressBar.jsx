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
            <div className="flex justify-between mb-2">
                <span className="font-medium">
                    Progresso
                </span>
                <span>
                    {percentage}%
                </span>

            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                    className="h-4 bg-purple-500 rounded-full transition-all"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>
        </div>
    )
}

export default ProgressBar