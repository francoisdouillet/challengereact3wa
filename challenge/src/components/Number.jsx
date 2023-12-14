import Reducer, { initialState } from "../utils/Reducer";
import { useReducer } from "react";

const Number = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  console.log(state)

  const addRandomNumber = () => {
    if (!state.maxNumber) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 30) + 1;
      } while (state.numbers.includes(randomNumber));
  
      dispatch({ type: "ADD_NUMBER", payload: randomNumber });
    } 
  };

  const generateBinomes = () => {
    dispatch({ type: "CREATE_BINOMES" });
};

  return (
    <>
      <button onClick={addRandomNumber}>
        Générer un nombre aléatoire entre 1 et 30
      </button>
      <p>Voici la liste des nombres générés</p>
      {state.maxNumber && <p style={{color: "red"}}>Vous avez déjà généré 30 nombres</p>}
      <div className="numbergenerate">
        {state.numbers.map((number) => (
          <p>{number}</p>
        ))}
      </div>
      <button onClick={generateBinomes} disabled={state.numbers.length < 2}>
        Générer les binômes
      </button>
      <div>
        <h2>Binômes :</h2>
        <ul>
          {state.binomes.map((binome, index) => (
            <li key={index}>{binome.join(', ')}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Number;
