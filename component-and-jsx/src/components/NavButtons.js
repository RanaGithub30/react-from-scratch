import { Link } from "react-router-dom";

function NavButton({ to, text }) {
  return (
    <li>
      <Link to={to} style={styles.navButton}>
        {text}
      </Link>
    </li>
  );
}

const styles = {
  navButton: {
    color: "#fff",
    backgroundColor: "#444",
    padding: "10px 16px",
    borderRadius: "15px",
    textDecoration: "none",
    display: "inline-block",
  },
};

export default NavButton;
