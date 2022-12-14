import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 5px 5px rgba(0,0,0, 0.1)'
  }
}

class Navbar extends Component {
  render() {
    const { carro } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro carro={carro} />
      </nav>
    )
  }
}

export default Navbar