
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const Alert = ({ color, icon: Icon, children }) => {

  return (
    <div className={`bg-${color}-100 rounded border-${color}-500 text-${color}-700 px-4 py-3`} role="alert">
      <div className="flex items-center">
        {Icon && <Icon className="w-6 h-6 mr-4" />}
        {children}
      </div>
    </div>
  );
};

export default Alert;
