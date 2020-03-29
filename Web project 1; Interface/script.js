

const neilHead = "Astronaut profile; Neil Armstrong";
const neilPara = "Neil Alden Armstrong was an American astronaut and aeronautical engineer and the first person to walk on the Moon." +
                 "He took part in multiple space exploration missions, such as; Gemini 5, Gemini 8, Gemini 11, the Apollo program, and the Apollo 11 mission.";

const buzzHead = "Astronaut profile; Buzz Aldrin";
const buzzPara = "Buzz Aldrin is an American engineer, former astronaut and fighter pilot. Aldrin made three spacewalks as pilot of the 1966 Gemini 12 mission, and as the lunar module pilot on the 1969 Apollo 11 mission, he and mission commander Neil Armstrong were the first two humans to land on the Moon.";

const yuriHead = "Astronaut profile; Yuri Gagarin";
const yuriPara = "Yuri Alekseyevich Gagarin was a Soviet Air Forces pilot and cosmonaut who became the first human to journey into outer space, achieving a major milestone in the Space Race; his capsule Vostok 1 completed one orbit of Earth on 12 April 1961. Gagarin became an international celebrity and was awarded many medals and titles, including Hero of the Soviet Union, his nation's highest honour.";

const chrisHead = "Astronaut profile; Chris Hadfield";
const chrisPara = "Chris Austin Hadfield is a Canadian retired astronaut, engineer, and former Royal Canadian Air Force fighter pilot. The first Canadian to walk in space, Hadfield has flown two Space Shuttle missions and served as commander of the International Space Station.";

const sallyHead = "Astronaut profile; Sally Ride";
const sallyPara = "Sally Kristen Ride was an American astronaut and physicist. Born in Los Angeles, she joined NASA in 1978 and became the first American woman in space in 1983. Ride was the third woman in space overall, after USSR cosmonauts Valentina Tereshkova (1963) and Svetlana Savitskaya (1982). Ride remains the youngest American astronaut to have traveled to space, having done so at the age of 32. After flying twice on the Orbiter Challenger, she left NASA in 1987.";


function setText(astronautInput) {
    if (astronautInput == "neilArmstrong") {
        document.getElementById("displayHead").innerHTML = neilHead;
        document.getElementById("displayPara").innerHTML = neilPara;
        document.getElementById("displayImg").src = "src/neil.jpg"
    } else if (astronautInput == "buzzAldrin") {
        document.getElementById("displayHead").innerHTML = buzzHead;
        document.getElementById("displayPara").innerHTML = buzzPara;
        document.getElementById("displayImg").src = "src/buzz.jpg"
    } else if (astronautInput == "yuriGagarin") {
        document.getElementById("displayHead").innerHTML = yuriHead;
        document.getElementById("displayPara").innerHTML = yuriPara;
        document.getElementById("displayImg").src = "src/yuri.jpg"
    } else if (astronautInput == "chrisHadfield") {
        document.getElementById("displayHead").innerHTML = chrisHead;
        document.getElementById("displayPara").innerHTML = chrisPara;
        document.getElementById("displayImg").src = "src/chris.jpg"
    } else if (astronautInput == "sallyRide") {
        document.getElementById("displayHead").innerHTML = sallyHead;
        document.getElementById("displayPara").innerHTML = sallyPara;
        document.getElementById("displayImg").src = "src/sally.jpg"
    }
}

