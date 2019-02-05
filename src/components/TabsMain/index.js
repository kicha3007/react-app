import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class TabsMain extends Component {

    render() {

        const tabsNavTitle = this.props.titlehead.map(function(item, indx) {
            console.log(item.id);
            return (
                    <Tab >
                        {item.title}
                    </Tab>
            )
        });


        const tabsNavContent = this.props.titlehead.map(function(item, indx) {


            const innerTabsNavContent =  item.tabContent.map(function(innerItem, innerIndx){
                return (
                    <li className="it-ways__item" key={innerItem.id}>
                        <a className="it-ways__half it-ways__half--left" href="#">
                            <div className="it-ways__img-box">
                                <img className="it-ways__img" src={innerItem.img} alt=""/>
                            </div>
                            <div className="it-ways__bottom">
                                <div className="it-ways__bottom-half it-ways__bottom-half--left">
                                    <div className="it-ways__bottom-img-box">
                                        <img className="it-ways__bottom-img" src={innerItem.flag} alt=""/>
                                    </div>
                                    <div className="it-ways__bottom-info">
                                        <div className="it-ways__bottom-city">{innerItem.city}</div>
                                        <div className="it-ways__bottom-country">	{innerItem.country}</div>
                                    </div>
                                </div>
                                <div className="it-ways__bottom-half it-ways__bottom-half--right">
                                    <div className="it-ways__bottom-price">
                                        <span className="it-ways__bottom-price-text">	Найти от </span>
                                        <div className="it-ways__bottom-price-inner-wrap"><span className="it-ways__bottom-price-number"> {innerItem.price}</span>
                                            <span className="it-ways__bottom-price-text">
                                            &#8381</span></div>
                                    </div>
                                    <div className="it-ways__bottom-date">	{innerItem.date}</div>
                                </div>
                            </div></a>
                    </li>
                )
            })


            return (
                <TabPanel>
                    {innerTabsNavContent}
                </TabPanel>
            )
        });




        return (
              <Tabs>
                  <TabList>
                {tabsNavTitle}
                  </TabList>

                  {tabsNavContent}

                </Tabs>




            )
    }


}


export default TabsMain;