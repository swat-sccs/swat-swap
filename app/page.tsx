import ListingCard from "@/components/ListingCard";
import SideBar from "@/components/SideBar"
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box className="flex h-[calc(100vh-68.5px)]">

      <SideBar></SideBar>

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-evenly"
        alignItems="baseline"
        className="p-4 overflow-y-scroll"
      >

        <ListingCard cost={10} title="You're next" imgPath="/static/images/cards/uni.jpg" />
        <ListingCard cost={100} title="Minecraft Max Minecraft Max Minecraft Max" imgPath="/static/images/cards/maxwell1.jpg" />
        <ListingCard cost={1000} title='"Do Not Bend"' imgPath="/static/images/cards/maxwell2.jpg" />
        <ListingCard cost={999} title="r o t a t e" imgPath="/static/images/cards/maxwell3.gif" />

        <ListingCard cost={10} title="You're next" imgPath="/static/images/cards/uni.jpg" />
        <ListingCard cost={100} title="Minecraft Max" imgPath="/static/images/cards/maxwell1.jpg" />
        <ListingCard cost={1000} title='"Do Not Bend"' imgPath="/static/images/cards/maxwell2.jpg" />
        <ListingCard cost={999} title="r o t a t e" imgPath="/static/images/cards/maxwell3.gif" />

        <ListingCard cost={10} title="You're next" imgPath="/static/images/cards/uni.jpg" />
        <ListingCard cost={100} title="Minecraft Max" imgPath="/static/images/cards/maxwell1.jpg" />
        <ListingCard cost={1000} title='"Do Not Bend"' imgPath="/static/images/cards/maxwell2.jpg" />
        <ListingCard cost={999} title="r o t a t e" imgPath="/static/images/cards/maxwell3.gif" />
        <ListingCard cost={10} title="You're next" imgPath="/static/images/cards/uni.jpg" />

        <ListingCard cost={100} title="Minecraft Max" imgPath="/static/images/cards/maxwell1.jpg" />
        <ListingCard cost={1000} title='"Do Not Bend"' imgPath="/static/images/cards/maxwell2.jpg" />
        <ListingCard cost={999} title="r o t a t e" imgPath="/static/images/cards/maxwell3.gif" />
        <ListingCard cost={10} title="You're next" imgPath="/static/images/cards/uni.jpg" />


      </Grid>
    </Box >
  );

}
