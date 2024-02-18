import * as React from 'react';

import CategoryIcon from '@mui/icons-material/Category';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import BarChartIcon from '@mui/icons-material/BarChart';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SortIcon from '@mui/icons-material/Sort';

import {
    Box,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    Typography,
    Divider,
} from '@mui/material';

function dropDown(name: String, icon: React.JSX.Element) {
    return <Accordion>

        <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="header"
        >
            {icon}
            <Typography className='px-2' color="text.secondary">{name}</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography color="text.secondary">
                Lorem ipsum
            </Typography>
        </AccordionDetails>

    </Accordion >
}

export default function SideBar() {
    return (
        <Box className='grid content-between w-64'>

            <Box id="dropdown-Menus">

                {dropDown("Sort by: Recent", <SortIcon />)}
                {dropDown("Price", <SellIcon />)}
                {dropDown("Category", <CategoryIcon />)}
                {dropDown("Condition", <BarChartIcon />)}
                {dropDown("Color", <ColorLensIcon />)}

                <Box className="flex justify-around p-2">
                    <Button>Clear</Button>
                    <Button>Apply</Button>
                </Box>

            </Box>


            <Box>

                <Divider />
                <Box className='flex float-bottom p-2 pl-4 w-48 items-center justify-between'>
                    <StorefrontIcon />
                    <Typography className='text-right' color="text.secondary">
                        <b>SwatSwap</b><br />By <b>SCCS</b>
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
}