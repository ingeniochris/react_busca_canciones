import React from 'react'
import PropTypes from 'prop-types'


const Info = ({info}) => {
    if(Object.keys(info).length===0) return null;

    const {strArtist, strArtistThumb, strGenre, strBiographyES}=info;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary">
                Información Artista
            </div>
            <div className="card-body">
    <h2 className="card-text">{strArtist}</h2>
                <img src={strArtistThumb} alt="artista"/>
                <p className="card-text">Genero: {strGenre}</p>
                <h2 className="card-text">Boigrafías: </h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>
    )
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}
export default Info

