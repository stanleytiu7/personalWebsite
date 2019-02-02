import React from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

const projects = () => (
    <div>
        <Link to="/sorting"><a>Sorting doohickey</a></Link>
        <div>
            <p>Projects will go here!</p>
            <p>Projects that I am particularly proud of: <br />
                My stackcoin project. I had the opportunity to work with 3 wonderful partners to develop a web application with blockchain integration (Ethereum). While there are plenty of things we could have done better, I think that overall it was a great success. Unfortunately it is not hosted anywhere, and the azure machines the nodes were running on are offline now.
            </p>
        </div>
    </div>
)

export default projects
