import * as React from 'react';

import { blue } from '@mui/material/colors';
import {
    Avatar,
    IconButton,
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    Typography,
    Box,
    Link
} from '@mui/material';

import BookmarkIcon from '@mui/icons-material/Bookmark';

export interface linkProp {
    imgPath: string;
    cost: number;
    title: string;
    type: string;
}


const cardWidth = 256;

export default function ListingCard(props: linkProp) {

    const link = '/listing/' + props.title

    return (

        <Card sx={{ maxWidth: cardWidth, margin: 1 }}>
            <CardHeader
                title={
                    <Typography
                        className={"max-w-56"}
                        noWrap
                        variant="h5"
                        color="text.primary"
                    >
                        <Link
                            href={link}
                            underline="none"
                        >
                            {props.title}
                        </Link>
                    </Typography>}

                subheader={
                    <Box
                        className='flex justify-between'
                    >
                        <   Typography
                            variant='h6'
                            color="text.primary"
                        >

                            ${props.cost}
                        </Typography>
                        <Typography
                            variant='h6'
                            fontWeight={600}
                            sx={{
                                color: 'black', backgroundColor: {
                                    "Buying": "#9EEA6C",
                                    "Selling": "#EA6C6C",
                                    "Trading": "#6C9EEA",
                                    "Service": "#EA6C6C"
                                }[props.type], paddingInline: '6px', borderRadius: '4px'
                            }}
                        >

                            {props.type}
                        </Typography>
                    </Box>
                }
            />

            <CardMedia
                sx={{ height: cardWidth * 4 / 5, width: cardWidth }}
                component="img"
                image={"/static/images/cards/" + props.imgPath}
                alt="ooh what he doing :3"
            />

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>


                <IconButton aria-label="bookmark">
                    <BookmarkIcon />
                </IconButton>

                <Avatar sx={{ bgcolor: blue[500] }} aria-label="User">
                    :3
                </Avatar>

            </CardActions>

        </Card >
    );
}