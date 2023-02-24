import Hola from "./components/index/hola";

function App() {

  let numA = null;
  const setNumA = ()=>{
    return numA = numA + 1;
  }

  return (
    <>
      
      <p>
        <Hola />
        <div className="text-rose-500">
          Hola amiguetes
        </div>
        <button onClick={setNumA} className="bg-blue-400
                p-2 px-4 rounded-full 
                m-2
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2" >NumA</button>
      </p>                        
      {
        numA ? <>Existe {numA}</> : <>No existe</>
      }
    </>
  );
}

export default App;
