import React from 'react';
import './DisplaySeason.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun outline'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake outline'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const DisplaySeason = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div >
    );
};

export default DisplaySeason;