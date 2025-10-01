const FooterNavCard = ({ title, navList }) => {
  return (
    <div>
      <h3 className="font-semibold pb-2 text-white">{title}</h3>
      <ul>
        {navList.map((item, i) => (
          <li
            key={i}
            className="text-xs text-slate-200 py-[6px] capitalize hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavCard;
