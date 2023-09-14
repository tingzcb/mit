import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


const SideBar = () => {
    return (
        <>
            <ul class="nav   w3-sidebar  w3-collapse " >
                <li>
                    <NavLink to="/">
                    </NavLink>
                </li>
                <li>
                    <NavLink to="managedItServices">
                        MANAGED IT SERVICES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="pcMacSupport">
                        PC & Mac Support
                    </NavLink>
                </li>
                <li>
                    <NavLink to='serverNetwork'>
                        Server & Network
                    </NavLink>
                </li>
                <li>
                    <NavLink to='backUp'>
                        Backup & Disaster Recovery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='software' >
                        Software Implementation
                    </NavLink>
                </li>
                <li>
                    <NavLink to='hosting'>
                        Hosting Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to='websiteDesign'>
                        Website Design
                    </NavLink>
                </li>
                <li>
                    <NavLink to='emailHosting'>
                        Website & Email Hosting
                    </NavLink>
                </li>
                <li>
                    <NavLink to='partner' >
                        IT Partner
                    </NavLink>
                </li>
                <li>
                    <NavLink to='testimonial'>
                        Testimonials
                    </NavLink>
                </li>
                <button class="nav-toggle" id="nav-toggle">X</button>
            </ul>

        
        </>
    )
}

export default SideBar