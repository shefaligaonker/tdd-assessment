/**
 * Adds up the numbers
 * @param input: string of numbers
 * @returns sum
 */
export function add (input: string): number {
    let items: string[] = [] 
    
    // extract delimiter
    const regex = /\/\/(.*?)\n/ 
    const parts: string[] = input.match(regex) || []

    if(parts[1]){
        // custom delimiter
        input = input.replace(regex, '')
        const dynamicReg = new RegExp(`,|\n|${parts[1]}`)  
        items = input.split(dynamicReg)    
    }
    else{
        // split based on , or \n
        items = input.split(/,|\n/)
    }

    let result = 0
    items.forEach( element => {
        result = result + parseInt(element)
    })
    return result
}
