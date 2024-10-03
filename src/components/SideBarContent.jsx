import React from 'react'
import { Box, Button, styled } from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none'
})

const SideBarContent = () => {
    return (
        <Box>
            <ComposeButton>
                <CreateOutlined />Compose
            </ComposeButton>
            <Box></Box>
        </Box>
    )
}

export default SideBarContent