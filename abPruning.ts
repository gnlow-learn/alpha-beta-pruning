type Tree<T> = T[] | Tree<T>[]
const tree: Tree<number> = [
    [
        [
            [5, 6],
            [7, 4, 5],
        ],
        [
            [3],
        ],
    ],
    [
        [
            [6],
            [6, 9],
        ],
        [
            [7],
        ],
    ],
    [
        [
            [5],
        ],
        [
            [9, 8],
            [6],
        ]
    ],
]

const m =
(alpha = -Infinity, beta = Infinity) =>
(depth: number, isMax: boolean) =>
(tree: number | Tree<number>): number => {
    if (typeof tree == "number") {
        console.log(
            " ".repeat((4-depth)*4),
            tree,
            [alpha, beta],
            alpha >= beta ? "CUT" : ""
        )
        return tree
    } else {
        if (isMax) {
            let max = -Infinity
            tree.forEach(x => {
                const curr = m(alpha, beta)(depth + 1, !isMax)(x)

                alpha = Math.max(alpha, curr)
                max = Math.max(max, curr)
            })

            console.log(" ".repeat((4-depth)*4), max, [alpha, beta])
            return max
        } else {
            let min = Infinity
            tree.forEach(x => {
                const curr = m(alpha, beta)(depth + 1, !isMax)(x) 

                beta = Math.min(beta, curr)
                min = Math.min(min, curr)
            })

            console.log(" ".repeat((4-depth)*4), beta, [alpha, beta])
            return min
        }
    }
}

console.log(m()(0, true)(tree))