import { NavLink } from "react-router-dom";

function NavButton({ to, text }) {
  return (
    <li>
      <NavLink
        to={to}
        end
        style={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

const styles = {
  inactive: {
    color: "#aaa",
    backgroundColor: "#444",
    padding: "10px 16px",
    borderRadius: "15px",
    textDecoration: "none",
    fontWeight: "400",
    display: "inline-block",
  },
  active: {
    color: "#fff",
    backgroundColor: "#61dafb",
    padding: "10px 16px",
    borderRadius: "15px",
    textDecoration: "none",
    fontWeight: "700",
    display: "inline-block",
  },
};

export default NavButton;