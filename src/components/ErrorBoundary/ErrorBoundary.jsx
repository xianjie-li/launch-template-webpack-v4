import React from 'react';

import Icon from '../Icon';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="bk-errorBoundary">
          <p>
            <Icon type="error" size={56} />
          </p>
          页面加载异常，请刷新页面或稍后重试！
          <a onClick={() => location.reload()}>刷新</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
