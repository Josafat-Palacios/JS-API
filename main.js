
function leer(){
    const plato = document.getElementById("input").value; //nombre a buscar Ej. Pasta, 
    const key = '9d4d8a8b37e34993afdf0ba975212089'; //llave otorgada por mi API
    const api_url = `https://api.spoonacular.com/recipes/complexSearch?query=${plato}&number=10&apiKey=${key}`; //Url otorgada con metodo y llave
    console.log(api_url); 
    buscar(api_url); //llamamos al metodo buscar
}

const buscar = async(api_url) => { //await somo funciona con asincronas

    const respuesta = await fetch(api_url); //Se hace la promesa, esperamos con await  y se guarda en respuesta
    //console.log(respuesta); //imprimimos respuesta
    const data = await respuesta.json(); 
    //console.log(data); //imprimimos los datos de busqueda
    const search = await data.results; //Guardo en variable search el arreglo de mi busqueda
  //  console.log(search);
        if(search!=null)
        {   
            document.getElementById("lista").innerHTML='';
            search.map((r)=>{
                    document.getElementById("lista").innerHTML+=`<div style="text-align: center">
                        <img width='100%' src=${r.image} alt="No hay imagen"></img>
                        <p>${r.title}</p>
                        </div>`;
            })

        }
} 