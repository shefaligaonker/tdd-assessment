/**
 * Adds up the numbers
 * @param input: string of numbers
 * @returns sum
 */
export function add (input: string): number {
    const items = input.split(/,|\n/)
    let result = 0
    items.forEach( element => {
        result = result + parseInt(element)
    })
    return result
}
