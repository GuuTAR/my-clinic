import './styles.scss'

import Row from '../row/Row';

const Navbar = () => {
    return (
        <Row className="navbar" justify="space-between" align="center" >
            <Row className="left-content">
                <h2 className="app-name margin0">My Clinic</h2>
            </Row>
            <Row className="right-content">
                
            </Row>
        </Row>
    )
}

export default Navbar