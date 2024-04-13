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

const log =
(depth: number, curr: number | string, alpha: number, beta: number) => {
    const indent =
        " " .repeat(10)
            .repeat(4-depth)
    const alphaS = String(alpha)
        .replace("Infinity", "∞")
        .padStart(2, " ")
    const betaS = String(beta)
        .replace("Infinity", "∞")
        .padStart(2, " ")

    console.log(indent, curr)
    console.log(indent, `[${alphaS} , ${betaS} ]`)
}

const m =
(alpha = -Infinity, beta = Infinity) =>
(depth: number, isMax: boolean) =>
(tree: number | Tree<number>): number => {
    if (alpha >= beta) {
        log(depth, "CUT", alpha, beta)
        return isMax ? Infinity : -Infinity
    }
    if (typeof tree == "number") {
        log(depth, tree, alpha, beta)
        return tree
    } else {
        if (isMax) {
            let max = -Infinity
            tree.forEach(x => {
                const curr = m(alpha, beta)(depth + 1, !isMax)(x)

                alpha = Math.max(alpha, curr)
                max = Math.max(max, curr)
            })

            log(depth, max, alpha, beta)
            return max
        } else {
            let min = Infinity
            tree.forEach(x => {
                const curr = m(alpha, beta)(depth + 1, !isMax)(x) 

                beta = Math.min(beta, curr)
                min = Math.min(min, curr)
            })

            log(depth, min, alpha, beta)
            return min
        }
    }
}

console.log(m()(0, true)(tree))