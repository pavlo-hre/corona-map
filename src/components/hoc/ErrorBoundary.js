import React, {Component} from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';

class ErrorBoundary extends Component {
  state = {hasError: false};

  componentDidUpdate(prevProps) {
    if (this.props.error && this.props !== prevProps) {
      this.setState({hasError: true});
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return <ErrorPage/>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

