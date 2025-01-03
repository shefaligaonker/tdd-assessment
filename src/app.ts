/**
 * Adds up the numbers
 * @param input: string of numbers
 * @returns sum
 */
export function add (input: string): number {
    try {
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
        let negativeNumbers:string[] = []       
        items.forEach( element => {
            const num = parseInt(element);
            if(num < 0){
                negativeNumbers.push(element);
            }
            else if(num <= 1000){
                result = result + num
            }        
        })

        if(negativeNumbers.length > 0)
            throw new Error(`Negative numbers not allowed ${negativeNumbers.join(', ')}`)

        return result

    } catch (error) {
        throw error
    }

}