import {Layout} from "./components/layout/component.jsx";
import { restaurants } from './constants/mock.js'
import {Restaurant} from "./components/restaurant/component.jsx";
import React, {useState} from "react";
import {Tabs} from "./components/tabs/tabs.jsx";

export const App = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);

    const handleChange = (id) => {
        setActiveId(id);
    }

    return (
        <Layout>
            <Tabs list={restaurants} onClick={handleChange} activeId={activeId}/>
            <Restaurant data={restaurants.find(r => r.id === activeId)} />
        </Layout>
    );
};
