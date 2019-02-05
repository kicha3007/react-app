import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class TabsMain extends Component {

    render() {

        const tabsNavTitle = this.props.titlehead.map(function(indx, item) {


            const innerTabContentItem = item.tabContent.map(function(){
                return (
                    <li className="it-ways__item" key={item.id}>
                        <a className="it-ways__half it-ways__half--left" href="#">
                            <div className="it-ways__img-box">
                                <img className="it-ways__img" src="static/img/rbk/ways/content/3.jpg" alt=""/>
                            </div>
                            <div className="it-ways__bottom">
                                <div className="it-ways__bottom-half it-ways__bottom-half--left">
                                    <div className="it-ways__bottom-img-box">
                                        <img className="it-ways__bottom-img" src="static/img/rbk/ways/flag.png" alt=""/>
                                    </div>
                                    <div className="it-ways__bottom-info">
                                        <div className="it-ways__bottom-city">Краснодар</div>
                                        <div className="it-ways__bottom-country">	РОССИЯ</div>
                                    </div>
                                </div>
                                <div className="it-ways__bottom-half it-ways__bottom-half--right">
                                    <div className="it-ways__bottom-price">
                                        <span className="it-ways__bottom-price-text">	Найти от</span>
                                        <div className="it-ways__bottom-price-inner-wrap"><span className="it-ways__bottom-price-number">	1 212</span>
                                            <span className="it-ways__bottom-price-text">
                                            &#8381</span></div>
                                    </div>
                                    <div className="it-ways__bottom-date">	18 марта</div>
                                </div>
                            </div></a><a className="it-ways__half it-ways__half--right" href="#">
                        <div className="it-ways__img-box"><img className="it-ways__img" src="static/img/rbk/ways/content/4.jpg" alt=""/>
                        </div>
                        <div className="it-ways__bottom">
                            <div className="it-ways__bottom-half it-ways__bottom-half--left">
                                <div className="it-ways__bottom-img-box"><img className="it-ways__bottom-img" src="static/img/rbk/ways/flag.png" alt=""/>
                                </div>
                                <div className="it-ways__bottom-info">
                                    <div className="it-ways__bottom-city">Сочи (Адлер)</div>
                                    <div className="it-ways__bottom-country">   РОССИЯ</div>
                                </div>
                            </div>
                            <div className="it-ways__bottom-half it-ways__bottom-half--right">
                                <div className="it-ways__bottom-price"><span className="it-ways__bottom-price-text">   Найти от</span>
                                    <div className="it-ways__bottom-price-inner-wrap"><span className="it-ways__bottom-price-number">   1 334</span><span className="it-ways__bottom-price-text">   &#8381</span></div>
                                </div>
                                <div className="it-ways__bottom-date">   27 марта</div>
                            </div>
                        </div></a>
                    </li>
                )

            })



            return (

                <div>


                    <Tab>
                    {item.title}
                    </Tab>
                    {if(indx == 0) {
                       df
                        }}
                    <TabPanel>
             { innerTabContentItem}
                    </TabPanel>

                </div>
                )
        });




        return (
              <Tabs>

                {tabsNavTitle}

            </Tabs>
            )
    }


}


export default TabsMain;