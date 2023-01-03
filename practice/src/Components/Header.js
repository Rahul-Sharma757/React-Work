import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.NavbarBrand}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/reactES6">{props.NavbarLink1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/textForm">{props.NavbarLink2}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle text-${props.mode === 'light' ? 'dark' : 'light'}`} to=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.NavbarDropdownText}
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to=" ">{props.DropdownLink1}</Link></li>
                                    <li><Link className="dropdown-item" to=" ">{props.DropdownLink2}</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to=" ">{props.DropdownLink3}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.NavbarLink3}</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
                            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
                            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
                            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? 'Switch to Dark' : 'Switch to Light'}`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.propTypes = {
    NavbarBrand: PropTypes.string.isRequired,
    NavbarLink1: PropTypes.string,
    NavbarLink2: PropTypes.string,
    NavbarDropdownText: PropTypes.string
}

Header.defaultProps = {
    NavbarBrand: "Brand",
    NavbarLink1: "Link 1",
    NavbarLink2: "Link 2",
    NavbarDropdownText: "Dropdown",
    DropdownLink1: "link1",
    DropdownLink2: "link2",
    DropdownLink3: "link3",
    NavbarLink3: "link3"

}
export default Header;
