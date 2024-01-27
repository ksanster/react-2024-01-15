import {Layout} from "./components/layout/component.jsx";
import { restaurants } from './constants/mock.js'
import {Restaurant} from "./components/restaurant/component.jsx";
import React from "react";

export const App = () => {
    return (
        <Layout>
            {
                restaurants.map((item) => <Restaurant data={item} />)
            }
        </Layout>
    );
};
