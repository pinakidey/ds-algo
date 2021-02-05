const getRandomArray = (length, max=99) => {
    return [...Array(length)].map(e=>~~(Math.random()*max)) // ~~ is a bitwise operator, shorthand for Math.floor
}

export {getRandomArray};