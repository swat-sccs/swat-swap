import ListingCard from '@/components/ListingCard';
import { Typography, Grid, Box, Card, CardHeader, Link, Divider } from '@mui/material';
import Image from 'next/image';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StarIcon from '@mui/icons-material/Star';

export default function UserID() {
    return (
        <Box className='max-h-[calc(100vh-69px)] overflow-y-auto'>

            <Box className='flex lg:flex-row sm:flex-col max-h-min'>
                <Box
                    className='flex lg:w-3/5 sm-p-12 sm:w-full h-[calc(400px)] '
                >
                    <Image
                        src="/static/images/cards/maxwell1.jpg"
                        alt="image"
                        width={400}
                        height={400}
                        className='p-12 w-[calc(400px)] rounded-full'
                    />
                    <Box
                        className='relative py-12 w-[calc(100%-400px)] h-[calc(400px)] overflow-y-hidden break-words'
                    >
                        <Typography
                            variant='h2'
                            fontWeight="600"
                        >
                            Benjamin ZhangZhangZhang
                        </Typography>
                        <Typography
                            variant='h6'
                        >
                            @bzhang1
                        </Typography>

                        <Box
                            className='absolute flex bottom-16 w-full'
                        >
                            <Box
                                className='flex overflow-x-clip w-1/2 mx-4'
                            >
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <Typography
                                    variant='h6'
                                >
                                    (5.0)
                                </Typography>
                            </Box>
                            <Box
                                className='flex overflow-x-clip w-1/2 mx-4'
                            >
                                <LoyaltyIcon />
                                <Typography
                                    variant='h6'
                                >
                                    69 sold
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Box>
                <Box
                    className='lg:w-2/5 lg:p-12 sm:px-12 sm:pb-12 sm:w-full lg:h-full sm:h-auto overflow-y-auto'
                >
                    <Typography variant='body1' >Benjamin Zhang, a Swarthmore College student,
                        is a dynamic scholar with a passion for interdisciplinary
                        learning. Excelling in mathematics, computer science, and
                        philosophy, Benjamin's academic pursuits showcase his
                        analytical prowess and innovative thinking. Actively
                        involved in campus life, he contributes to various
                        student organizations, fostering a sense of unity and
                        intellectual curiosity.
                    </Typography>

                </Box>
            </Box>

            <Divider>
                <Typography variant='h6'>Listings</Typography>
            </Divider>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                className="p-12"
            >

                <Card sx={{ maxWidth: 256, margin: 1 }}>
                    <CardHeader
                        title={
                            <Typography
                                className={"max-w-56"}
                                noWrap
                            >
                                <Link
                                    href='/create'
                                    underline="none"
                                    variant="h5"
                                    color="text.primary"
                                >
                                    Create a new listing
                                </Link>
                            </Typography>}
                    />
                </Card >

                <ListingCard cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard cost={999} title="r o t a t e" imgPath="maxwell3.gif" />


            </Grid>

        </Box>

    );
}


