import React, {Component} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import logo from "./images/logo_update.png";
import "./css/landing.css"

class Landing extends Component{
    render() {
        return (
            <div>
                <div class="content">
                    <p class="header">Welcome!</p>
                    <div class="body">
                    <p>This is the prototype for AMP'D Engagement, a tool designed for
                      students and teachers to share experiences in the classroom.
                    </p>

                    <p>Thank you for participating
                      in this study.
                    </p>
                  <p>Please <a href="\login"> log in </a> or <a href="\register">register </a>
                     above.
                  </p>
		    <p> To learn more about the AMP'D Engagement project, read our <a href="\faq">F.A.Q.</a>
			</p>
                  </div>

            </div>

            <hl></hl>
          </div>
        )
    }
}

export default Landing