import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
  title?: string;
}

const ErrorMessage = ({
  message = "Failed to fetch data. Please try again.",
  onRetry,
  title = "Error",
}: ErrorMessageProps) => {
  return (
    <div className="flex items-center min-h-[40vh] bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full border border-red-200">
        <div className="flex items-start space-x-3">
          <div className="shrink-0">
            <AlertCircle className="h-6 w-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{message}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
