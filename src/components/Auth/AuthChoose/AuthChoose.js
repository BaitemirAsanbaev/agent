import { Link } from 'react-router-dom';

const AuthChoose = () => {
  return (
    <div>
      <div>
        <Link to="/auth/company">Company</Link>
      </div>
      <div>
        <Link to="/auth/customer">Customer</Link>
      </div>
      <div>
        <Link to="/auth/login">Login</Link>
      </div>
    </div>
  );
}

export default AuthChoose;
