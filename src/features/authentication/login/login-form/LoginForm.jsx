import { Link, NavLink, useNavigate } from "react-router-dom";

import Form from "../../../../ui/form/Form";
import Input from "../../../../ui/input/Input";

function LoginForm() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/shop')
  }

  return (
    <Form heading="customer login" buttonContent="Sign in" onSubmit={handleSubmit}> 
      <Input type="email" placeholder="Your Email" />
      <Input type="password" placeholder="Password" />
      <Link to="/">Forgot your password?</Link>
    </Form>
  );
}

export default LoginForm;
