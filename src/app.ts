/**
 * Adds up the numbers
 * @param input: string of numbers
 * @returns sum
 */
export function add (input: string): number {
    try {
        if(!input){
            throw new Error('Not a valid input')
        }
        let items: string[] = [] 
        let result = 0
        const customRegex = /\/\/(.*?)\n/ 
        let negativeNumbers:string[] = []  
    
        // extract delimiter
        const parts: string[] = input.match(customRegex) || []
        if(parts[1]){
            // custom delimiter
            input = input.replace(customRegex, '')
            const dynamicReg = new RegExp(`,|\n|${parts[1]}`)  
            items = input.split(dynamicReg)    
        }

        items = items.length ? items : input.split(/,|\n/)

        items.forEach( element => {
            const num = parseInt(element);
            if(num < 0){
                negativeNumbers.push(element);
            }
            else if(num <= 1000){
                result += num
            }        
        })

        if(negativeNumbers.length)
            throw new Error(`Negative numbers not allowed ${negativeNumbers.join(', ')}`)

        return result

    } catch (error) {
        throw error
    }

}