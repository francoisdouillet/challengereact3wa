export const initialState = {
    numbers: [],
    binomes: [],
    maxNumber: false,
}

const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NUMBER': 
        return {
            ...state,
            numbers: [...state.numbers, action.payload],
            maxNumber: state.numbers.length + 1 >= 30,
        }
        case 'CREATE_BINOMES':
            const binomes = [];
            for (let i = 0; i < state.numbers.length - 1; i += 2) {
                binomes.push([state.numbers[i], state.numbers[i + 1]]);
            }
            // Si la liste est impaire, ajoutez le dernier nombre au dernier binome
            if (state.numbers.length % 2 !== 0) {
                if (binomes.length > 0) {
                    binomes[binomes.length - 1].push(state.numbers[state.numbers.length - 1]);
                } else {
                    binomes.push([state.numbers[state.numbers.length - 1]]);
                }
            }
            return {
                ...state,
                binomes: binomes
            }

    }
}

export default Reducer