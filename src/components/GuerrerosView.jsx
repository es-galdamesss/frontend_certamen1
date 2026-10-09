import { Card, CardHeader, CardContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Chip, Button } from '@mui/material'

import React from 'react'
import { useState } from 'react'

function GuerrerosView({ guerreros = [], onEliminar }) {
    
    return (
        
        <Card raised>
            <CardHeader title="Despliegue del Ejército" />
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre del Guerrero</TableCell>
                                <TableCell>Tipo de Guerrero</TableCell>
                                <TableCell>Categoría / Rango</TableCell>
                                <TableCell>Nivel</TableCell>
                                <TableCell>Clasificación</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {guerreros.map((g, index) =>
                                <TableRow key={index}>
                                    <TableCell>{g.nombre}</TableCell>
                                    <TableCell>{g.tipo}</TableCell>
                                    <TableCell>{g.rango}</TableCell>
                                    <TableCell>{g.nivel}</TableCell>
                                    <TableCell>
                                        <Chip label={g.tipo} color={g.tipo === "Orco" ? "warning" : "primary"} />
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error" onClick={() => onEliminar(g)}>Asesinado por la aparición</Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>

    )
}

export default GuerrerosView
