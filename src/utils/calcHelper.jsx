
export const getAmountOfNodes = (min, max, delta) => {
    const amount = (Number(max)-Number(min))/delta + 1;
    return amount;
}

export const isNodeWithInDelta = (val, targetVal, delta) => {
    const isWithinDelta = Math.abs(val - targetVal) <= delta;
    return isWithinDelta;
}