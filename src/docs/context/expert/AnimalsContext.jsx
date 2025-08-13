import { createContext, useState } from "react";

export const AnimalsContext = createContext({
    state : {animals : []},
    actions : { insert : () => {}, remove: () => {}}
});

export const AnimalsProvider = ({children}) => {
    const [ animals, setAnimals ] = useState(["누렁이", "점박이", "야옹이"])

    const insertAnimals = (animal) => {
        setAnimals([...animals, animal])
    }
    const removeAnimals = (e) => {
        console.log(e.target.innerText)
        setAnimals(animals.filter((animal) => animal !== e.target.innerText));
    }
    const value = {
        state: {animals : animals},
        actions: { insert: insertAnimals , remove: removeAnimals} 
    }
    
    return (
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )
}

export default AnimalsContext;