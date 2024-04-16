// ErrorBoundary.tsx
import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Aquí puedes registrar el error o enviarlo a un servicio de seguimiento de errores
    console.error("Error capturado:", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div>¡Ups! Algo salió mal.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
