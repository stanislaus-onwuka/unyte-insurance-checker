export const classNames = (...classes) => {
    return classes.join(" ")
}


export const getProductAttributes = (excludeAttributes, data) => {
    return Object.entries(data)
        .filter(([key]) => !excludeAttributes.includes(key))
}