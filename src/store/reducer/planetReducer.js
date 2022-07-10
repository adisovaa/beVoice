import { createSlice } from "@reduxjs/toolkit";

import mercury from "./../../images/2k_mercury.jpg";
import venus from "./../../images/2k_venus.jpg";
import earth from "./../../images/8k_earth.jpg";
import mars from "./../../images/2k_mars.jpg";
import jupiter from "./../../images/2k_jupiter.jpg";
import saturn from "./../../images/2k_saturn.jpg";
import uranus from "./../../images/2k_uranus.jpg";
import neptune from "./../../images/2k_neptune.jpg";
import sun from "./../../images/2k_sun.jpg";
import moon from "./../../images/2k_moon.jpg";

const planets = {
    mercury: {
        img: mercury,
        name: "Меркурий",
        diameter: 4879,
        mass: "33 × 10^23",
        gravity: 3.7,
        temprature: 167
    },
    venus: {
        img: venus,
        name: "Венера",
        diameter: 12104,
        mass: "4.9 × 10^24",
        gravity: 8.9,
        temprature: 462
    },
    earth: {
        img: earth,
        name: "Земля",
        diameter: 12756,
        mass: "6 × 10^24",
        gravity: 9.8,
        temprature: 15
    },
    mars: {
        img: mars,
        name: "Марс",
        diameter: 6792,
        mass: "6.4 × 10^23",
        gravity: 3.7,
        temprature: -63
    },
    jupiter: {
        img: jupiter,
        name: "Юпитер",
        diameter: 142984,
        mass: "1.9 × 10^27",
        gravity: 25,
        temprature: -120
    },
    saturn: {
        img: saturn,
        name: "Сатурн",
        diameter: 120536,
        mass: "5.7 × 10^26",
        gravity: 10.4,
        temprature: -125
    },
    uranus: {
        img: uranus,
        name: "Уран",
        diameter: 51118,
        mass: "8.7 × 10^25",
        gravity: 8.7,
        temprature: -210
    },
    neptune: {
        img: neptune,
        name: "Нептун",
        diameter: 49528,
        mass: "1.02 × 10^26",
        gravity: 11.2,
        temprature: -200
    },
    sun: {
        img: sun,
        name: "Солнце",
        diameter: 1392700,
        mass: "1.99 × 10^30",
        gravity: 274,
        temprature: 5505
    },
    moon: {
        img: moon,
        name: "Луна",
        diameter: 3476,
        mass: "7.3 × 10^22",
        gravity: 1.62,
        temprature: -23
    }
}

const initialState = {
    value: planets.earth
}

const planetSlice = createSlice({
    name: "planet",
    initialState,
    reducers: {
        setMercury: (state) => {
            state.value = planets.mercury;
        },

        setVenus: (state) => {
            state.value = planets.venus;
        },

        setEarth: (state) => {
            state.value = planets.earth;
        },

        setMars: (state) => {
            state.value = planets.mars;
        },

        setJupiter: (state) => {
            state.value = planets.jupiter;
        },

        setSaturn: (state) => {
            state.value = planets.saturn;
        },

        setUranus: (state) => {
            state.value = planets.uranus;
        },

        setNeptune: (state) => {
            state.value = planets.neptune;
        },
        setSun: (state) => {
            state.value = planets.sun;
        },

        setMoon: (state) => {
            state.value = planets.moon;
        }
    }
});

export const {
    setEarth,
    setMercury,
    setVenus,
    setMars,
    setJupiter,
    setSaturn,
    setUranus,
    setNeptune,
    setSun,
    setMoon
} = planetSlice.actions;

export default planetSlice.reducer;
