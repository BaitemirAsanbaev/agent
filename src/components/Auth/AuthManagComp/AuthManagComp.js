import classes from '../Form.module.scss'

const AuthManagComp = () => {
  return (
    <form className={classes.Form}>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="username">Username</label>
      <input name="username" id="username" type="text" />
      <label htmlFor="password">Password</label>
      <input name="password" id="password" type="password" />
      <button className={classes.submit}>Submit</button>
    </form>
  );
}

export default AuthManagComp;
