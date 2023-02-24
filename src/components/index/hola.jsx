

export default function  Hola (){

    let n1 = 5
    let n2 = 7

    const suma = ()=>{
        console.log(n1+n2);
    }

    return (
        <>
            <button 
                onClick={suma}
                className="bg-blue-400
                p-2 px-4 rounded-full 
                m-2
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                "
            >
                Sumar
            </button>
            <div className="">Hola</div>
            
        </>
    )
}