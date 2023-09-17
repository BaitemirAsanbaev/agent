
import AuthChoose from "../../components/Auth/AuthChoose/AuthChoose";
import classes from "./Auth.module.scss";

export default function Auth() {
  return (
    <div className={classes.Auth}>
      <h1>Who are you</h1>
      <AuthChoose />
    </div>
  );
}
