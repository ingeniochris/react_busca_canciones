import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import Error from './components/Error'

import Axios from 'axios'
 

function App() {

  const [buscarCancion, guardarBuscarCancion]=useState({});
  const [letra, guardarLetra]=useState('');
  const [info, guardarInfo] = useState({});
  const [er, guardarEr]=useState(false);


  useEffect(() => {
    if(Object.keys(buscarCancion).length === 0) return;
    
    const consultaApiCancion = async ()=>{
      const {artista,cancion}=buscarCancion;
      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        Axios(url),
        Axios(url_info)
      ]) 
     
      if(letra=== undefined || informacion.data.artists === null){
        guardarEr(true);
        return;
      }
      guardarEr(false)
      guardarInfo(informacion.data.artists[0]);
      guardarLetra(letra.data.lyrics);
      

      guardarBuscarCancion({});
    }
    consultaApiCancion();
  }, [buscarCancion, info]);

  return (
    <Fragment>
      <Formulario guardarBuscarCancion={guardarBuscarCancion}/>
      <div className="container mt-5">
        {er ? <Error message='No se encuentra información'/> : null}
        <div className="row">
          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
