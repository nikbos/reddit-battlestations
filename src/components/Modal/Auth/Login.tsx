import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
});

    return (
        <form>
            <Input />
            <Input />
        </form>
    )
}
export default Login;