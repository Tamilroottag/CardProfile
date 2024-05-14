import PropTypes from "prop-types";

import { Fragment } from "react"

const userData = [{
    name : "Ketrina",
    country : "Russia",
    JobRole : "Front-End Developer",
    skills : ["Front-end Development","System Work",
            "Python", "SQL", "JavaScript", "React JS", "Node JS"
        ],
    online : true, 
    profile : "public/Profile1.jpeg"
},
{
    name : "Steve",
    country : "India",
    JobRole : "MERN Stack Developer",
    skills : ["Front-end Development","Problem Solving","System Work",
            "Python", "SQL", "JavaScript", "React JS", "Node JS"
        ],
    online : false, 
    profile : "public/Profile6.webp"
},
{
    name : "Nataliya",
    country : "Russia",
    JobRole : "Back-End Developer",
    skills : ["Front-end Development","System Work",
            "Python", "SQL", "JavaScript", "React JS", "Node JS"
        ],
    online : false, 
    profile : "public/Profile2.webp"
},
{
    name : "Angelina",
    country : "Russia",
    JobRole : "Back-End Developer",
    skills : ["Front-end Development","System Work",
            "Python", "SQL", "JavaScript", "React JS", "Node JS"
        ],
    online : true, 
    profile : "public/Profile4.jpeg"
}
];

function User(props) {
    return(
        <Fragment> 
           <main>
            <div className="container">
                <span className={props.online?"pro online" : "pro offline"}>{props.online?"ONLINE" : "OFFLINE"}</span>
                <img src={props.profile} alt="" className="profile1" />
                <h3>{props.name}</h3>
                <h3>{props.country}</h3>
                <p>{props.JobRole}</p>
                <div className="button">
                    <button className="primary">Message</button>
                    <button className="primary outline">Following</button>
                </div>
                <div className="skills">
                    <h5 className="prime-skil">Primary Skills</h5>
                    <ul>
                        {props.skill.map((skills,index) =>(
                            <li key={index}>{skills}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </main>
        </Fragment>
    )
}

export const UserCard = () => {
    return (
        <>
        {userData.map((user, indexes) => (
            <User key = {indexes}  
                name = {user.name}  
                country = {user.country} 
                JobRole = {user.JobRole} 
                online = {user.online} 
                skill = {user.skills} 
                profile = {user.profile} />
        ))}
        </>
    )
    // <>
    // {userData.map((user,index) => {
    //     <User key = {index} 
    //         full_name = {user.name}
    //         coity = {user.country}
    //         Role = {user.JobRole}
    //         online = {user.online}
    //         file = {user.profile}
    //         skill = {user.skills}
    //      />
    // })}
    // </>
}

/* (
        <User name= "Ketrina" country = "Russia" JobRole = "Front-End Developer" skills = {["Front-end Development","System Work",
            "Python", "SQL", "JavaScript", "React JS", "Node JS"
        ]} online = {false} profile = "public/Profile2.webp"/>
  ) */
User.PropTypes = {
    name: PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    JobRole : PropTypes.string.isRequired,
    profile : PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
    skill : PropTypes.arrayOf(PropTypes.string).isRequired
}
