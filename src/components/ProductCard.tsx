import { useState } from "react";
import img1 from "../../puplic/assets/img18.png";
import img2 from "../../puplic/assets/img9.png";
import img3 from "../../puplic/assets/img10.png";
import img4 from "../../puplic/assets/img19.png";
import img5 from "../../puplic/assets/img4.png";
import img6 from "../../puplic/assets/img17.png";
import img7 from "../../puplic/assets/img6.png";
import img8 from "../../puplic/assets/img7.png";
import img9 from "../../puplic/assets/Vector.png";
import img10 from "../../puplic/assets/Cart.png";


interface ProductCardProps {
    title: string;
    price: string;
    image: string;
}
const data = {
    x4: {
        title: "ENOVOWHEEL x4",
        subTitle: "Four-Wheel Drive (4x4)",
        description: [
            "Super light all-terrain vehicle combining our worldwide mechanic patents.",
            "Let the Enovowheel X4 guide you to adventure with double the power. With 4x4 power, go from casual ridding to extreme challenging terrains. From casual errands to pulling you and your gear on mountains, trails, and beaches while testing your limits on any chosen obstacle.",
            "Our patented platform, double wishbone suspension arms with its unique tilt ability for all wheels, facilitates improved traction and cornering ability to handle challenging potholes, curbs, debris, and trails effectively while keeping the ridder safe. A new level of resilience and durability forged and tested in all casual and extreme off-road terrains.",
            "*** Top Speed ***\n"
        ],
        speedNote: "Although the unit can go 45+MPH, by law we are limiting it to 25 MPH.",
        price: "$1,500",
        oldPrice: "$2,500",
        images: [img1, img2, img3, img4, img5, img6, img7, img8]
    },
    x2: {
        title: "ENOVOWHEEL X2",
        subTitle: "Two-Wheel Drive (2x2)",
        description: [
            "Super light all-terrain vehicle combining our worldwide mechanic patents.",
            "Let the Enovowheel X4 guide you to adventure with double the power. With 4x4 power, go from casual ridding to extreme challenging terrains. From casual errands to pulling you and your gear on mountains, trails, and beaches while testing your limits on any chosen obstacle.",
            "Our patented platform, double wishbone suspension arms with its unique tilt ability for all wheels, facilitates improved traction and cornering ability to handle challenging potholes, curbs, debris, and trails effectively while keeping the ridder safe. A new level of resilience and durability forged and tested in all casual and extreme off-road terrains.",
            "*** Top Speed ***\n"
        ],
        speedNote: "Although the unit can go 45+MPH, by law we are limiting it to 25 MPH.",
        price: "$1,100",
        oldPrice: "$1,800",
        images: [img2, img4, img6, img1, img3, img5]
    }
};

const ProductCard: React.FC<ProductCardProps> = () => {
    const [selectedModel, setSelectedModel] = useState<"x4" | "x2">("x4");
    const [currentImage, setCurrentImage] = useState(data[selectedModel].images[0]);

    const model = data[selectedModel];


    return (
        <div className="shoping-product">
            <div className="product-x-price">
                <h5>Enovowheel x2</h5>
                <h4>Stay tuned</h4>
            </div>

            <div className="details-right bg-white p-6 w-full max-w-xl">
                <img
                    src={currentImage}
                    alt={model.title}
                    className="slider-img w-full object-contain transition-all duration-300"
                />

                <div className="small-imgs flex justify-start gap-4 mt-4 overflow-x-auto">
                    {model.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => setCurrentImage(img)}
                            className={`hh object-cover cursor-pointer transition-transform ${currentImage === img ? "ring-2 ring-black " : ""
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="shopping-order">
                <div className="flex gap-6 mt-4 shopping-order-btns">
                    <button className="shopping-order-btn"><img src={img9} /> ORDER NOW</button>
                    <button className="shopping-add-btn"><img src={img10} /> ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
