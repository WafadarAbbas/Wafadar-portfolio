import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "40px 20px",
            color: "#f87171",
            backgroundColor: "rgb(15, 23, 42)",
            minHeight: "100vh",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "rgb(20, 184, 166)" }}>Something went wrong!</h2>
          <pre
            style={{
              background: "rgb(30, 41, 59)",
              padding: "20px",
              borderRadius: "8px",
              color: "#ef4444",
              textAlign: "left",
              maxWidth: "800px",
              margin: "20px auto",
              overflow: "auto",
              fontSize: "14px",
            }}
          >
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 22px",
              backgroundColor: "rgb(20, 184, 166)",
              color: "rgb(15, 23, 42)",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

