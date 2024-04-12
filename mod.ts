type Tree<T> = (T | Tree<T>)[]

const max =
([head, ...tail]: Tree<number>): number => {
    if (!head) return -1

    return Math.max(
        typeof head == "number"
            ? head
            : min(head),
        max(tail),
    )
}

const min =
([head, ...tail]: Tree<number>): number => {
    if (!head) return 99

    return Math.min(
        typeof head == "number"
            ? head
            : max(head),
            min(tail),
        )
}

console.log(max([[1, 4], 2, 3]))