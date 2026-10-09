import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position="static" sx={{
            background: "linear-gradient(90deg, #171717, #3d3020)",
            borderBottom: "3px solid #c9a227",
            boxShadow: 3
        }}>
            <Toolbar className="d-flex justify-content-between" sx={{ py: 1 }}>
                <Typography variant="h6" sx={{
                    fontFamily: '"Caslon Antique", sans-serif',
                    fontWeight: "bold",
                    color: "#e6c66a",
                    letterSpacing: 1.5
                }}>
                    Anillo Único
                </Typography>

                <Typography variant="body1" sx={{
                    fontFamily: '"Middle Earth Expanded", sans-serif',
                    fontStyle: "italic",
                    color: "#e8e0d0",
                    textAlign: "right",
                    ml: 2
                }}>
                    Uno para dominarlos a todos
                </Typography>
            </Toolbar>
        </AppBar>
  )
}

export default Header
