import { Box, Heading } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";
import { images } from "../../../Data/HomeData/HomeData";



const ImageSlider = () => {
    return (
        <Box m={1}>
        <Heading p={4}>Our Top Rated Foods</Heading>
            <SimpleImageSlider
                width={"100%"}
                height={604}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </Box>
    );
}

export default ImageSlider