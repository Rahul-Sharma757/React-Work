import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                    <a className="navbar-brand" href="/">{props.NavbarBrand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/reactES6">{props.NavbarLink1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" ">{props.NavbarLink2}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.NavbarDropdownText}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href=" ">{props.DropdownLink1}</a></li>
                                    <li><a className="dropdown-item" href=" ">{props.DropdownLink2}</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href=" ">{props.DropdownLink3}</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href=" " className="nav-link">{props.NavbarLink3}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
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
