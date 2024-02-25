import ListingCard from '@/components/ListingCard';
import { Typography, Grid, Box, Divider } from '@mui/material';
import Image from 'next/image';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StarIcon from '@mui/icons-material/Star';
import AddCard from '@/components/AddCard';

export default function UserID() {
    return (
        <Box className='max-h-[calc(100vh-69px)] overflow-y-auto'>

            <Box className='flex lg:flex-row flex-col max-h-min justify-between'>
                <Box
                    className='flex lg:w-auto w-full h-[calc(400px)]  '
                >
                    <Image
                        src="/static/images/cards/maxwell1.jpg"
                        alt="image"
                        width={400}
                        height={400}
                        className='p-12 w-[calc(400px)] rounded-full '
                    />
                    <Box
                        className='relative py-12 min-w-96  h-[calc(400px)]'
                    >
                        <Typography
                            variant='h2'
                            fontWeight="600"
                            noWrap
                        >
                            Benjamin
                        </Typography>
                        <Typography
                            variant='h2'
                            fontWeight="600"
                            noWrap
                        >
                            Zhang
                        </Typography>
                        <Typography
                            variant='h6'
                            noWrap
                        >
                            @bzhang1
                        </Typography>

                        <Box
                            className='flex bottom-16 w-full py-8'
                        >
                            <Box
                                className='flex'
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
                                className='flex  mx-8'
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
                <Typography
                    variant='body1'
                    className='lg:flex-1 lg:max-h-[calc(400px)] lg:p-12 px-12 pb-12 overflow-y-auto'
                    fontSize="18px"
                >
                    Benjamin Zhang, a Swarthmore College student,
                    is a dynamic scholar with a passion for interdisciplinary
                    learning. Excelling in mathematics, computer science, and
                    philosophy, Benjamin's academic pursuits showcase his
                    analytical prowess and innovative thinking. Actively
                    involved in campus life, he contributes to various
                    student organizations, fostering a sense of unity and
                    intellectual curiosity.
                </Typography>
            </Box>

            <Divider>
                <Typography variant='h6'>Listings</Typography>
            </Divider>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
                className="p-12"
            >


                <AddCard link='/create' text={'Create a \nnew listing'} />
                <ListingCard type="Buying" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Selling" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Buying" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Selling" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Selling" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Buying" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Selling" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Buying" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Buying" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Trading" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Buying" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Trading" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Trading" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Buying" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Trading" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Buying" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />


            </Grid>

        </Box >

    );
}


