import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function ArchesPage() { 
    const archesData = {
        name: "Arches",
        images: [
            "images/4.png",
        ],
        rentPrice: "$125 / Unit",
        rentDuration: "1-2 Days",
        stock: "2 Units",
        pickupLocation: "Smitvhille, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Stunning Focal Point",
        description: "Designed to enhance the elegance of your ceremony, making it a perfect backdrop for exchanging vows.",
        },
        {
        icon: GiResize,
        title: "Crafted With High Quality",
        description: "Sturdy and reliable, ensuring it stands strong throughout your event.",
        },
        {
        icon: GiSpanner,
        title: "Versatile & Stylish",
        description: "It is ideal for any occasion, though it shines the brightest at weddings.",
        },
        ],
 };

 return <OfferingsPageTemplate item={archesData} />;
}

export default ArchesPage;