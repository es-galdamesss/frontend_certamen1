import React from 'react'
import GuerreroForm from '../components/GuerreroForm'
import { useState } from 'react'
import GuerrerosView from '../components/GuerrerosView'

function GuerrerosContainer() {

    const [guerreros, setGuerreros] = useState([])

    const handleCreate = (guerrero) => {
        setGuerreros([...guerreros, guerrero])
    }

    const handleDelete = (guerrero) => {
        const filtrados = guerreros.filter(g => g !== guerrero)
        setGuerreros(filtrados)
    }

    return (
         
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <GuerreroForm onCreateGuerrero={handleCreate} />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <GuerrerosView guerreros={guerreros} onEliminar={handleDelete} />
                </div>
            </div>
        </div>

    )
}

export default GuerrerosContainer
