import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? <div>Something went wrong...</div> : children;
  }
}

export default ErrorBoundary;
