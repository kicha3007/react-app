import React, { Component } from "react";
import styled from 'styled-components';

import Tab from "./Tab";

const TabTitleItem =  styled.div``;
const TabsContainer =  styled.div``;
const ListTabs =  styled.div``;
const TabAnchorItem =  styled.div``;
const ActiveTabBorder =  styled.div``;
const ReactTabs =  styled.div``;




class Tabs extends Component  {
    static Tab = Tab;

    state = {
        tabs: [],
        prevActiveTab: {},
        activeTab: this.props.activeTab,
        tabsElements: []
    };

    addTab = newTab => {
        let isNewTabFound;

        for (let i in this.state.tabs) {
            let tab = this.state.tabs[i];

            if (tab.id === newTab.id) {
                isNewTabFound = true;
                break;
            }
        }

        if (!isNewTabFound) {
            this.setState((prevState, props) => {
                return {
                    tabs: prevState.tabs.concat(newTab)
                };
            });
        }
    };

    removeTab = tabId => {
        this.setState((prevState, props) => {
            return {
                tabs: prevState.tabs.filter(tab => tab.id !== tabId)
            };
        });
    };

    onClick = tab => event => {
        this.setState((prevState, props) => {
            return {
                prevActiveTab: prevState.activeTab,
                activeTab: tab
            };
        });
    };

    render() {
        return (
            <ReactTabs>
                <TabsContainer>
                    <ListTabs>
                        {this.state.tabs.map((tab, index) => (
                            <TabTitleItem
                                key={index}
                                onClick={this.onClick(tab)}
                                id={tab.id}
                                innerRef={tabElement => {
                                    if (!this.state.tabsElements[tab.id]) {
                                        this.setState((prevState, props) => {
                                            const tabsElements = prevState.tabsElements;
                                            tabsElements[tab.id] = tabElement;

                                            return {
                                                tabsElements
                                            };
                                        });
                                    }
                                }}
                                isActiveTab={this.state.activeTab.id === tab.id}
                            >
                                <TabAnchorItem>{tab.title}</TabAnchorItem>
                            </TabTitleItem>
                        ))}
                    </ListTabs>

                    <ActiveTabBorder
                        activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
                    />
                </TabsContainer>

                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                        activeTab: this.state.activeTab,
                        addTab: this.addTab
                    })
                )}
            </ReactTabs>
        );
    }
}

export default Tabs;
