import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        console.log({ error })
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children
    }
}