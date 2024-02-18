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
    Box
} from '@mui/material';

import BookmarkIcon from '@mui/icons-material/Bookmark';

export interface linkProp {
    imgPath: string;
    cost: number;
    title: string;
}

const cardWidth = 256;

export default function ListingCard(props: linkProp) {

    return (
        <Card sx={{ maxWidth: cardWidth, margin: 1 }}>
            <CardHeader
                title={
                    <Typography
                        variant="h5"
                        color="text.primary"
                        className={"max-w-56"}
                        noWrap
                    >
                        <b>{props.title}</b>
                    </Typography>}

                subheader={<Typography variant="h5" color="text.primary">
                    ${props.cost}
                </Typography>}
            />

            <CardMedia
                sx={{ height: cardWidth * 4 / 5, width: cardWidth }}
                component="img"
                image={props.imgPath}
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