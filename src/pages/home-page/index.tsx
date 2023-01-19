import { Splide,SplideSlide } from "@splidejs/react-splide"
import ProductContainer from "./components/product-container"


function HomePage(){
    return(<>
   <Splide options={{
    perPage:1,
    arrows:true,
    pagination:true,
    drag:"free",
    gap:"Srem",
    type:"loop",
    height:"500px"
   }}
   arial-label="My Favorite Images"
   >
<SplideSlide>
    <img src="assets/images/slider_1.jpg"/>
</SplideSlide>
<SplideSlide>
    <img src="assets/images/slider_3.jpg"/>
</SplideSlide>
<SplideSlide>
    <img src="assets/images/slider_2.jpg"/>
</SplideSlide>

</Splide>


<div className="space-medium">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="showcase-block">
                        <div className="display-logo ">
                            <a href="#"> <img src="assets/images/display_img_1.png" alt=""/></a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"> <img src="images/display_img_1.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="showcase-block active">
                        <div className="display-logo alignleft">
                            <a href="#">  <img src="assets/images/iphone.png" alt=""/>
                           </a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"> <img src="assets/images/display_img_2.png" alt="" style={{paddingLeft: "80px"}}/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="showcase-block ">
                        <div className="display-logo ">
                            <a href="#"> <img src="assets/images/samsung.png" alt=""/>
                            </a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"><img src="assets/images/display_img_3.png" alt=""/>                    </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="showcase-block">
                        <div className="display-logo ">
                            <a href="#"><img src="assets/images/htc.png" alt=""/></a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"><img src="assets/images/display_img_4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="showcase-block">
                        <div className="display-logo">
                            <a href="#">  <img src="assets/images/alcatel.png" alt=""/></a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"> <img src="assets/images/display_img_5.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="showcase-block">
                        <div className="display-logo ">
                            <a href="#"><img src="assets/images/pixel.png" alt=""/></a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"><img src="assets/images/display_img_6.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="showcase-block">
                        <div className="display-logo ">
                            <a href="#">  <img src="assets/images/vivo.png" alt=""/></a>
                        </div>
                        <div className="showcase-img">
                            <a href="#"><img src="assets/images/display_img_7.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
            <ProductContainer title={"Latest Products"} count={4} products={[]} />
            <ProductContainer title={"Best Seller Products"} count={2} products={[]} />
            <ProductContainer title={"Featured Products"} count={3} products={[]} />

        </div>
    </div>

    </>)
}
export default HomePage