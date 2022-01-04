import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SampleRenderProps from './renderProps/RenderPropsParent';
import Listing from './Reconcilation/listingExp';
import LabelWrapper from "./Reconcilation/LabelWrapper";
import Main from "./main";

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/renderProps" element={<SampleRenderProps />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="/lebelExp" element={<LabelWrapper />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default (Routers);