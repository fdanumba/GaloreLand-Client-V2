import React, { Component } from 'react';
import "../App.css";
import GaloreDrawer from "../util/GaloreDrawer"

import AnitaAndMark from "../images/mrktImages/AnitaAndMark.jpg";
import Product from "../components/product/Product";
import ChristmassTrree from "../images/mrktImages/ChristmassTree.PNG";
import ApplTree from "../images/mrktImages/ApplTree.PNG";
import ApplTree1 from "../images/mrktImages/ApplTree1.PNG";
import KenWoodMixer from "../images/mrktImages/KenWoodMixer.PNG";
import CuisinartStandMixer from "../images/mrktImages/CuisinartStandMixer.PNG";
import PresureCooker from "../images/mrktImages/PresureCooker.PNG";
import CrockPot from "../images/mrktImages/CrockPot.PNG";
import CookingPot from "../images/mrktImages/CookingPot.PNG";
import StockPot from "../images/mrktImages/StockPot.PNG";

class marketPlace extends Component {
    render() {
        return (
            <div className="mrkt_home">
              <img className="mrkt_home-image" src={AnitaAndMark} />
              {/* <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/g/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg" />    */}
              {/* Product id, title, price */}
              <div className="mrkt_home_row">
                <Product
                  id={123455}
                  title="T5.5 Qt. 12-Speed Red Stand Mixer with Accessories
                  by Cuisinart"
                  price={259.96}
                  rating={5}
                  image={KenWoodMixer}
                />
                <Product
                  id={123455}
                  title="TPrecision Master 5.5 Qt. 12-Speed Die Cast Stand Mixer in Black
                  by Cuisinart"
                  price={11.96}
                  rating={5}
                  image={CuisinartStandMixer}
                />
        
              </div>
              <div className="mrkt_home_row">
                <Product
                  id={123455}
                  title="Gourmia 6qt ExpressPot Pressure Cooker"
                  price={57.99}
                  rating={5}
                  image={PresureCooker}
                />
                <Product
                  id={123455}
                  title="Tramontina ProLine 16-quart Stainless Steel Stock Pot with Lid"
                  price={11.96}
                  rating={5}
                  image={StockPot}
                />
        
              </div>
              <div className="mrkt_home_row">
                <Product
                  id={123455}
                  title="Crock-Pot Cook and Carry Digital Countdown Slow Cooker, 7 Quart"
                  price={49.99}
                  rating={5}
                  image={CrockPot}
                />
                <Product
                  id={123455}
                  title="Tramontina 6-piece Stackable Sauce Pot Set"
                  price={11.96}
                  rating={5}
                  image={CookingPot}
                />
        
              </div>
              <div className="mrkt_home_row">
                <Product
                  id={123455}
                  title="The Fel Startup: How constant Inovation creates"
                  price={11.96}
                  rating={5}
                  image={ApplTree1}
                />
              </div>
        
              {/* Product */}
            </div>
          );
    }
}

export default marketPlace