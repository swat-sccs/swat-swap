import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar"
import { Box, Grid, Typography } from "@mui/material";

export default function Saved() {
    return (
        <Box className="flex h-[calc(100vh-68.5px)]">

            <SideBar></SideBar>


            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
                className="flex-1 p-4 overflow-y-scroll"
            >

                <Typography>You're currently on the "My Listings" page.</Typography>

                <ListingCard type="Buying" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Service" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Buying" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Selling" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Selling" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Service" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Selling" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Buying" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Buying" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Trading" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Service" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Trading" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />

                <ListingCard type="Trading" cost={10} title="You're next" imgPath="uni.jpg" />
                <ListingCard type="Buying" cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="maxwell1.jpg" />
                <ListingCard type="Trading" cost={1000} title='"Do Not Bend"' imgPath="maxwell2.jpg" />
                <ListingCard type="Service" cost={999} title="r o t a t e" imgPath="maxwell3.gif" />


            </Grid>
        </Box >
    );
}
