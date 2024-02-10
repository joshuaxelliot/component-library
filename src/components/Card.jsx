
const Card = ({ href, imgSrc, imgAlt, children }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <a href={href} target="_blank">
        <img src={imgSrc} alt={imgAlt} className="transition-transform group-hover:scale-110 duration-200" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-white">{children}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
