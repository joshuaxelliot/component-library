
import { FaBasketballBall, FaAngellist, FaChessKnight } from "react-icons/fa";

const Badge = ({ color, size, icon: Icon, children }) => {
  return (
    <div className={`inline-flex items-center px-3 py-0.5 rounded-xl text-${color}-700 bg-${color}-300 ${size}`}>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </div>
  );
};

export default Badge;
