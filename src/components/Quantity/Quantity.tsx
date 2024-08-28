import { Button, TextField, Box } from '@mui/material'
import React from 'react'

type Props = {
    minCount: number
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
}

const Quantity = ({
    minCount,
    count,
    onDecrementClick,
    onIncrementClick,
}: Props) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                variant="outlined"
                onClick={onDecrementClick}
                disabled={count === minCount}
                sx={{ minWidth: '40px', height: '40px' }}
            >
                -
            </Button>
            <TextField
                value={count}
                size="small"
                sx={{
                    width: '60px', // ширина поля ввода
                    textAlign: 'center',
                    marginX: '8px',
                }}
                inputProps={{
                    style: { textAlign: 'center', padding: '8px 0' },
                }}
            />
            <Button
                variant="outlined"
                onClick={onIncrementClick}
                disabled={count === 10}
                sx={{ minWidth: '40px', height: '40px' }}
            >
                +
            </Button>
        </Box>
    )
}

export default Quantity
