import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function BenchesPage() { 
    const benchesData = {
        name: "Benches",
        images: [
            "images/2.png",
        ],
        rentPrice: "$50 / Unit",
        stock: "6 Units",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Timeless Aesthetic",
        description: "Seamlessly fits with various themes and event styles, making it a practical and beautiful choice for any occasion.",
        },
        {
        icon: GiResize,
        title: "Spacious",
        description: "Offers ample seating, accommodating multiple guests comfortably",
        },
        {
        icon: GiSpanner,
        title: "High Quality & Durable",
        description: "Withstands the rigors of event use, ensuring it remains sturdy and reliable",
        },
        ],
 };

 return <OfferingsPageTemplate item={benchesData} />;
}

export default BenchesPage;