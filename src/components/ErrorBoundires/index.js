import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("Erreur détectée :", error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oups ! Une erreur s’est produite.</h2>
    }

    return this.props.children
  }
}

export default ErrorBoundary
