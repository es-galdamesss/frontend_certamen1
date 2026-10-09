import { Card, CardHeader, CardContent, CardActions, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Slider, InputLabel, Select, MenuItem, Rating, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function GuerreroForm({onCreateGuerrero}) {

    const tipos = [
        { label: "Orco", value: "Orco" },
        { label: "Uruk", value: "Uruk" }
    ]

    const rangos = ["Capitán", "Berserker", "Explorador", "Asediador"]

    const [nombre, setNombre] = useState("")
    const [tipo, setTipo] = useState(tipos[0].value)
    const [nivel, setNivel] = useState(1)
    const [rango, setRango] = useState(rangos[0])
    const [furia, setFuria] = useState(1)

    const limpiarForm = () => {
        setNombre("")
        setTipo(tipos[0].value)
        setNivel(1)
        setRango(rangos[0])
        setFuria(1)
    }

    const handleClick = () => {
        const guerrero = {}
        guerrero.nombre = nombre
        guerrero.tipo = tipo
        guerrero.nivel = nivel
        guerrero.rango = rango
        guerrero.furia = furia
        onCreateGuerrero(guerrero)
        limpiarForm()
    }

    return (
        
        <Card raised>
            <CardHeader title="Ingresar Guerrero" />

            <CardContent>
                <div className="mb-3">
                    <TextField label="Nombre del Guerrero" value={nombre} onChange={e => setNombre(e.target.value)} fullWidth />
                </div>

                <div className="mb-3">
                    <FormControl>
                        <FormLabel>Tipo de Guerrero</FormLabel>
                        <RadioGroup row value={tipo} onChange={e => setTipo(e.target.value)}>
                            {tipos.map(t =>
                                <FormControlLabel key={t.value} value={t.value} label={t.label} control={<Radio />} />
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="mb-3">
                    <FormLabel>Nivel de Combate: {nivel}</FormLabel>
                    <Slider value={nivel} onChange={(e, valor) => setNivel(valor)} min={1} max={100} step={1} valueLabelDisplay="auto" />
                </div>

                <div className="mb-3">
                    <FormControl fullWidth>
                        <InputLabel id="rango-guerrero-label">Categoría / Rango</InputLabel>
                        <Select labelId="rango-guerrero-label" label="Categoría / Rango" value={rango} onChange={e => setRango(e.target.value)}>
                            {rangos.map(r =>
                                <MenuItem key={r} value={r}>{r}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>

                <div className="mb-3">
                    <FormControl>
                        <FormLabel>Nivel de Amenaza / Furia</FormLabel>
                        <Rating value={furia} onChange={(e, valor) => setFuria(valor === null ? 1 : valor)} />
                    </FormControl>
                </div>
            </CardContent>

            <CardActions>
                <Button variant="contained" fullWidth onClick={handleClick}>Registrar Guerrero</Button>
            </CardActions>
        </Card>

    )
}

export default GuerreroForm
