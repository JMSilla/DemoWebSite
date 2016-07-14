﻿var schedule = [
    {
        "id": "session-1",
        "title": "Registration",
        "tracks": [1, 2]
    },
    {
        "id": "session-2",
        "title": "Moving the Web forward with HTML5",
        "tracks": [1, 2]
    },
    {
        "id": "session-3",
        "title": "Diving in at the deep end with Canvas",
        "tracks": [1]
    },
    {
        "id": "session-4",
        "title": "New Technologies in Enterprise",
        "tracks": [2]
    },
    {
        "id": "session-5",
        "title": "WebSockets and You",
        "tracks": [1]
    },
    {
        "id": "session-6",
        "title": "Coffee and Cake Break",
        "tracks": [1, 2]
    },
    {
        "id": "session-7",
        "title": "Building Responsive UIs",
        "tracks": [1]
    },
    {
        "id": "session-8",
        "title": "Fun with Forms (no, really!)",
        "tracks": [2]
    },
    {
        "id": "session-9",
        "title": "A Fresh Look at Layouts",
        "tracks": [1]
    },
    {
        "id": "session-10",
        "title": "Real-world Applications of HTML5 APIs",
        "tracks": [2]
    },
    {
        "id": "session-11",
        "title": "Lunch",
        "tracks": [1, 2]
    },
    {
        "id": "session-12",
        "title": "Getting to Grips with JavaScript",
        "tracks": [1]
    },
    {
        "id": "session-13",
        "title": "Transforms and Animations",
        "tracks": [2]
    },
    {
        "id": "session-14",
        "title": "Web Design Adventures with CSS3",
        "tracks": [1]
    },
    {
        "id": "session-15",
        "title": "Introducing Data Access and Caching",
        "tracks": [2]
    },
    {
        "id": "session-16",
        "title": "Closing Thanks and Prizes",
        "tracks": [1, 2]
    }
];


var list = document.getElementById("schedule");
var track1Checkbox = document.getElementById("show-track-1");
var track2Checkbox = document.getElementById("show-track-2");

function createSessionElement(session) {
    var element = document.createElement("li");
    element.textContent = session.title;
    return element;
};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function displaySchedule() {
    clearList();
    
    for (var i = 0; i < schedule.length; i++) {
        var currentSession = schedule[i];

        if (track1Checkbox.checked && currentSession.tracks.indexOf(1) >= 0
            ||
            track2Checkbox.checked && currentSession.tracks.indexOf(2) >= 0)
        {
            list.appendChild(createSessionElement(currentSession));
        }
    }
}

displaySchedule();
track1Checkbox.addEventListener("click", displaySchedule);
track2Checkbox.addEventListener("click", displaySchedule);