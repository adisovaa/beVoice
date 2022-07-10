import React, {useEffect, useRef} from "react"
import './WordLearn.css'

const WordLearn = () => {
    const ref = useRef(null);

    const words = [
        "oh", "cell phone", "laptop", "javascript",
        "jelly", "writing", "wrong", "yard",
        "yeah", "year", "yell", "yellow", "yes",
        "yesterday", "yet", "yield", "you",
        "young", "your", "yours","yourself",
        "youth", "zone", "as", "like", "someone",
        "hello", "keyboard", "mouse", "free-time"
    ]

    const stats = {
        right: 0,
        wrong: 0
    }

    let currentWord = {
        guessed: "",
        not_guessed: words[Math.floor(Math.random() * words.length)]
    }

    useEffect(() => {
        window.onload = init

        function init() {
            document.getElementById("currWord").textContent = currentWord.not_guessed;
        }

        document.getElementById("input").addEventListener("input", function (event) {
            if (event.data === currentWord.not_guessed[0]) {
                currentWord.guessed += currentWord.not_guessed[0]
                currentWord.not_guessed = currentWord.not_guessed.substr(1)
            } else if (event.data === " ") {
                if ( event.target.value === currentWord.guessed + currentWord.not_guessed + " ") {
                    stats.right += 1;
                } else if ( event.target.value !== currentWord.guessed + currentWord.not_guessed + " ") {
                    stats.wrong += 1
                }

                currentWord = {
                    guessed: "",
                    not_guessed: words[Math.floor(Math.random() * words.length)]
                }

                event.target.value = " "
                document.getElementById("right").textContent = "right: " + stats.right
                document.getElementById("wrong").textContent = "wrong: " + stats.wrong
            }

            document.getElementById("currWord").innerHTML =
                '<span style="color: green">' + currentWord.guessed + '</span>' +
                '<span style="color: red">' + currentWord.not_guessed + "</span>"
        })
    }, []);


    return (
        <div>
            <div className="container text-center">
                <h1 ref={ref} id="currWord">Word</h1>
                <input ref={ref} id="input" type="text"/>
                    <div className="stats">
                        <div id="right"> right: 0 </div>
                        <div id="wrong"> wrong: 0 </div>
                    </div>
            </div>
        </div>
    )
}

export default WordLearn