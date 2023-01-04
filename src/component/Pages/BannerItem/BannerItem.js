import React from "react";

const BannerItem = ({ products }) => {
    const { picture, category } = products;
    return (
        <>
            <div className="first_slide">
                <div className="slide_details">
                    <h1>{category}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. os
                        perferendis minus in hic deserunt qui fugit illo{" "}
                    </p>

                    <button>View Collection</button>
                </div>
                <div className="slide-img">
                    <img className='slider_img' src={picture} alt="img" />
                </div>
            </div>
        </>
    );
};

export default BannerItem;