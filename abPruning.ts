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
            tree.forEach(x => {
                alpha = Math.max(
                    alpha,
                    m(alpha, beta)(depth + 1, !isMax)(x),
                )
            })
            console.log(" ".repeat((4-depth)*4), alpha, [alpha, beta])
            //return alpha
        } else {
            tree.forEach(x => {
                beta = Math.min(
                    beta,
                    m(alpha, beta)(depth + 1, !isMax)(x),
                )
            })
            console.log(" ".repeat((4-depth)*4), beta, [alpha, beta])
            //return beta
        }
        
        return isMax ? alpha : beta
    }
}

console.log(m()(0, true)(tree))