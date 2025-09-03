import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function ChestCoffeeTable() { 
    const chestCoffeeTableData = {
        name: "Chest Coffee Table",
        images: [
            "images/7.png"
        ],
        rentPrice: "$50 / Unit",
        stock: "1 Unit",
        rentDuration: "1-2 Days",
        pickupLocation: "Our Warehouse",
        deliveryLocation: "Within 50 miles",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Vintage Charm",
        description: "The coffee table features an old-fashioned chest design, complete with intricate detailing and a classic finish that adds a sophisticated, nostalgic touch to your event décor.",
        },
        {
        icon: GiSpanner,
        title: "Sturdy Construction",
        description: "Crafted from high-quality materials, the chest offers a solid and reliable surface, ensuring it stands up to the demands of your event while maintaining its classic appearance.",
        },
        {
        icon: GiResize,
        title: "Versatile Use",
        description: "Ideal as a coffee table or decorative piece, the chest can be used to display flowers, photos, or other event decor, making it a versatile addition to your event setup.",
        },
        ],
 };

 return <OfferingsPageTemplate item={chestCoffeeTableData} />;
}

export default ChestCoffeeTable;