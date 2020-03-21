import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error. <Link to="/">Click here</Link> to go back to home.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
