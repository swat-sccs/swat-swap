import * as React from 'react';

import {
    Card,
    Typography,
    Link,
    CardContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export interface linkProp {
    link: string;
    text: string;
}

export default function ListingCard(props: linkProp) {

    return (
        <Link
            href={props.link}
            underline="none"
        >
            <Card sx={{ width: 256, height: 355, margin: 1 }}
                className='flex justify-center items-center text-center'>
                <CardContent>
                    <Typography
                        className={"max-w-56"}
                        variant="h5"
                        color="text.primary"
                        sx={{ whiteSpace: "pre-wrap" }}
                    >
                        {props.text}
                    </Typography>
                    <AddIcon fontSize='large' className='m-4' />
                </CardContent>
            </Card >
        </Link>
    );
}