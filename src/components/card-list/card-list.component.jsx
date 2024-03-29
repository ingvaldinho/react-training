import React from 'react';
import {Card} from "../card-component/card-component.component";

import './card-list.styles.css';

export const CardList = props=>(

    <div className="card-list">
        {
            props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
        }
    </div>
)