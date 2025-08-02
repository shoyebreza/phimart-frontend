import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    return (
        <div>
            <h1>This is login page</h1>
            <button onClick={()=>loginUser("admin@admin.com", "1234")}>Click to login</button>
        </div>
    );
};

export default Login;

/* "admin@admin.com", "1234" */