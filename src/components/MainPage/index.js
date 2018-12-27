import React from 'react';
import styled  from 'styled-components';
import  {media}  from "../../mixin";
import MainForm from '../MainForm';

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


class MainPage extends React.Component {
    render () {
        return (

            <MainPageWrapper>
                <MainPageContent>
                    <MainForm/>
                </MainPageContent>
            </MainPageWrapper>
        )
    };

}


export default MainPage;

