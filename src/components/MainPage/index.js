import React from 'react';
import styled  from 'styled-components';
import  {media}  from "../../mixin";
import MainForm from '../MainForm';
import Tabs from '../TabsMain';

const MainPageWrapper = styled.div`
    background-color: rgba(249, 252, 255, 1);
    display: flex;
    flex-direction: column;
    height: 100%;

`
const MainPageContent = styled.div`
         flex: 1 0 auto;
        background-color: #fcfeff;
        /* IE9, iOS 3.2+ */
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBzdG9wLWNvbG9yPSIjZjhmY2ZmIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%,color-stop(0, rgb(248, 252, 255)),color-stop(1, rgb(255, 255, 255)));
        /* Android 2.3 */
        background-image: -webkit-linear-gradient(top,rgb(248, 252, 255) 0%,rgb(255, 255, 255) 100%);
        /* IE10+ */
        background-image: linear-gradient(to bottom,rgb(248, 252, 255) 0%,rgb(255, 255, 255) 100%);
        background-image: -ms-linear-gradient(top,rgb(248, 252, 255) 0%,rgb(255, 255, 255) 100%);
`

const DataTabs = [
    {
        title: "Куда угодно",
        tabContent: [
                {
                    id: "1",
                    img: "../Tabs/img/content/1.jpg'",
                    city: "Краснодар",
                    country: "Россия",
                    price: "1 212 ₽",
                    date: "18 марта"
                },
                {
                    id: "2",
                    img: "../Tabs/img/content/2.jpg'",
                    city: "Сочи (Адлер)",
                    country: "Россия",
                    price: "1 334 ₽",
                    date: "18 марта"
                },
                {
                    id: "3",
                    img: "../Tabs/img/content/3.jpg'",
                    city: "Санкт-Петербург",
                    country: "Россия",
                    price: "1 334 ₽",
                    date: "18 марта"
                },
                {
                    id: "4",
                    img: "../Tabs/img/content/4.jpg'",
                    city: "Минеральные Воды",
                    country: "Россия",
                    price: "1 334 ₽",
                    date: "18 марта"
                },
                {
                    id: "5",
                    img: "../Tabs/img/content/5.jpg'",
                    city: "Симферополь (Крым)",
                    country: "Россия",
                    price: "1 334 ₽",
                    date: "13 марта"
                },
                {
                    id: "6",
                    img: "../Tabs/img/content/6.jpg'",
                    city: "Барселона",
                    country: "ИСПАНИЯ",
                    price: "4 247 ₽",
                    date: "24 марта"
                },
            ]


    },

    {
        title: "CОЛНЦЕ И МОРЕ",
        tabContent: [
            {
                id: "7",
                img: "../Tabs/img/content/7.jpg'",
                city: "ХЗ",
                country: "Япония",
                price: "1 212 ₽",
                date: "18 марта",
                flag: ""
            },
            {
                id: "8",
                img: "../Tabs/img/content/8.jpg'",
                city: "ХЗ",
                country: "Китай",
                price: "1 334 ₽",
                date: "18 марта"
            },
            {
                id: "9",
                img: "../Tabs/img/content/9.jpg'",
                city: "ХЗ",
                country: "Россия",
                price: "1 334 ₽",
                date: "18 марта"
            },
            {
                id: "10",
                img: "../Tabs/img/content/10.jpg'",
                city: "ХЗ",
                country: "Россия",
                price: "1 334 ₽",
                date: "18 марта"
            },
            {
                id: "11",
                img: "../Tabs/img/content/11.jpg'",
                city: "ХЗ",
                country: "Россия",
                price: "1 334 ₽",
                date: "13 марта"
            },
            {
                id: "12",
                img: "../Tabs/img/content/12.jpg'",
                city: "ХЗ",
                country: "ИСПАНИЯ",
                price: "4 247 ₽",
                date: "24 марта"
            },
        ]


    },
]


class MainPage extends React.Component {

    render () {
        return (

            <MainPageWrapper>
                <MainPageContent>
                    <MainForm/>
                    <Tabs titlehead={DataTabs} />
                </MainPageContent>
            </MainPageWrapper>
        )
    }

}


export default MainPage;

