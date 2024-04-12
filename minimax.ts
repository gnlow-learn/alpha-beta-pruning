type Tree<T> = T[] | Tree<T>[]

const max =
([head, ...tail]: Tree<number>): number => {
    if (!head) return -1

    return Math.max(
        typeof head == "number"
            ? head
            : min(head),
        max(tail as Tree<number>),
    )
}

const min =
([head, ...tail]: Tree<number>): number => {
    if (!head) return 99

    return Math.min(
        typeof head == "number"
            ? head
            : max(head),
            min(tail as Tree<number>),
        )
}

console.log(max([
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
]))