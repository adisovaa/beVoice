import React, {useState} from "react"
import "./Drum.css"
import ReactFCCtest from "react-fcctest"
import Audio_files from "../../../../utility/audio_files"
import setDrumData from "../../../../utility/drum-data"


const Letter = (props) => (
    <div onClick={props.clicked} className={props.className} {...props}>
        {props.children}
    </div>
)

const Drumset = (props) => {
    const drum_pad = Audio_files
    const [display, setDisplay] = useState("")

    const letters = drum_pad.map((data, i) => {
        setDrumData(data)

        const playAudio = (src) => {
            const audio = document.getElementById(data.letter)
            audio.play()
        }

        const handleClick = (e) => {
            playAudio(document.getElementById(data.letter))
            setDisplay(data.id)
        }

        return (
            <div>
                <div id="drum-machine" key={i} className={data.letter + "-container"}>
                    <Letter
                        key={data.id}
                        onClick={() => handleClick(data.letter)}
                        className={"drum-pad " + " " + data.letter}
                        id={data.id}
                    >
                        <audio
                            preload="auto"
                            className="clip"
                            id={data.letter}
                            src={data.url}
                        ></audio>
                        {data.letter}
                    </Letter>
                </div>
            </div>
        );
    });

    return <div className="drum-container">{letters}</div>;
}

const Drum = () => {
    return (
        <div className="drum">
            <p style={{ color: "white" }}>waves curtesy of </p>
            <ReactFCCtest />
            <Drumset />
        </div>
    )
}

export default Drum