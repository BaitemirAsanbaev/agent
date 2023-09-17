import classes from '../Form.module.scss'

const StoreForm = () => {
  return (
    <form className={classes.Form}>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="address">Address</label>
      <input name="address" id="address" type="text" />
      <label htmlFor="manager">Manager(optional)</label>
      <select name='manager' id='manager'>
        <option>Amit</option>
        <option>Bait</option>
        <option>Nurs</option>
      </select>
      <button className={classes.submit}>Submit</button>
    </form>
  );
}

export default StoreForm;
