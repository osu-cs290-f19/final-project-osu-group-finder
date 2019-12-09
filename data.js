var posts = {
    "1": {
        title: "Looking for 3 Group Members",
        class: "CS 290",
        position: "Student",
        author: "User1",
        desc: "I'm looking for 3 other people to join my group for the final project. I'm thinking about making a budget planner.",
        anonymous: false,
        timePosted: 1575931401,
        meetingTime: 0,
        location: "",
        allowComments: true,
        comments: [
            {
                user: "user1",
                comment: "",
                time: 1575931505
            },
            {  
                user: "user2",
                comment: "Hello, I'd be down to join your group I know how to do mongoDB in node",
                time: 1575931609
            }            
        ]
    },
    "2": {
        title: "Hosting a Group Study Session",
        class: "CS 121",
        position: "TA",
        author: "User2",
        desc: "If anyone is interested, I'm hosting a study session for our final. We will cover all of the topics on the final as well as do review assignments and read over previous exames.",
        anonymous: true,
        timePosted: 1575831401,
        meetingTime: 1575907200,
        location: "KEC 108",
        allowComments: false,
        comments: []
    }
}

var users = {
    "user1": ["1", "4"],
    "user2": ["2"],
    "user3": ["3"]
}