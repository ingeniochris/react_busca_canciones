import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'


const Formulario = ({guardarBuscarCancion}) => {

const [error, handleError]= useState(false);    
const [busqueda, guardarBusqueda]=useState({
    artista:'',
    cancion:''
});

const {artista, cancion}= busqueda;

const handleState = e =>{
    guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
};

const buscarInfo = e => {
    e.preventDefault();

    if(artista.trim()==='' || cancion.trim()=== ''){
        handleError(true);
        return;
    }
    handleError(false);
    guardarBuscarCancion({
        artista,
        cancion
    })

}

    return (
        <div className="bg-info">
            {error ? <Error message='Todos los campos son requeridos' /> : null}
            <div className="container">
                <div className="row">
                    <form
                    onSubmit={buscarInfo} 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={handleState}
                                        value={artista}                      
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        onChange={handleState}
                                        value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                            className="btn btn-primary float-right"
                            type="submit"
                            >
                               Buscar     
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

Formulario.protoType = {
    guardarBuscarCancion: PropTypes.object.isRequired
}
export default Formulario
