import { useEffect } from "react";

const SetDrumData = (data) => {

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    });

    const playAudio = (src) => {
        const audio = document.getElementById(data.letter);
        audio.play();
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === data.keycode) {
            playAudio(document.getElementById(data.letter));
        }
    };
};

export default SetDrumData;
