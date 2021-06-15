import { title, primaryColor } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  formControl: {
    minWidth: 120,
    marginTop: 11,
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  loading: {
    color: primaryColor,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  require: {
    marginTop: 50,
  },
};

export default workStyle;
