import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        //this.setState({ errorInfo })
        // optionally log the error to an external service
        console.log("Error cautch an errorerror", errorInfo)
    }

    render() {
        if (this.state.hasError) {
           // return <h1>Something went wrong</h1>
           return (
            <div style={{border:'1px solid red',background:'yellow', padding:'20px'}}>
                <h2>Oops! Something went worng!</h2>
                <p>{this.props.fallback}</p>
                <p>{this.state.error.message}</p>
            </div>
           )
        }
        return this.props.children
    }
}

export default ErrorBoundry