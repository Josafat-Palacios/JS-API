/*
    Paguina API: https://developer.musixmatch.com/documentation
    llave: 2655c4a9a86b3c25a6d238bf9eb336ca
    URl: https://api.musixmatch.com/ws/1.1/
*/
function Leer() {
    const peli = document.getElementById("buscar").value; //Cabio el Id por el del boton "buscar"
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='2655c4a9a86b3c25a6d238bf9eb336ca';
    const api_url=`https://api.musixmatch.com/ws/1.1/artist.get?artist_id=${peli}&apikey=${key}`
    buscar3(api_url);
}


function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    

/*
async function buscar2(api_url){
    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;
    console.log(data);

}


console.log("hola mundo");
const api_url=`https://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&page_size=5&apikey=2655c4a9a86b3c25a6d238bf9eb336ca}`
buscar2(api_url);
/*
    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }
*/
 