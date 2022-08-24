import { Component } from "react";

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 5px 5px rgba(0,0,0, 0.2)'

  }
}
class Button extends Component {
  render() {
    return (
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button