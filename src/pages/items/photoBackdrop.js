import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function PhotoBackdrop() { 
    const photoBackdropData = {
        name: "Photo Backdrop",
        images: [
            "images/13.png"
        ],
        rentPrice: "$40 / Unit",
        stock: "1 Unit",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Elegant Wooden Panels",
        description: "The backdrop is crafted from high-quality wood, offering a sophisticated and rustic look that complements a variety of event themes and styles.",
        },
        {
        icon: GiResize,
        title: "Foldable Design",
        description: "The four-piece structure allows for easy assembly and disassembly, as well as convenient storage and transportation, making it a practical choice for any event.",
        },
        {
        icon: GiSpanner,
        title: "Versatile and Adaptable",
        description: "The backdrop’s modular design can be arranged in different configurations to fit your space and style, providing a customizable photo setting that enhances your event.",
        },
        ],
 };

 return <OfferingsPageTemplate item={photoBackdropData} />;
}

export default PhotoBackdrop;