import React from 'react';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    
    const modalState = useRecoilValue(authModalState);

    return (
        <Flex direction='colums' align='center' width="100%" mt={4}>
            {/* {modalState.view = 'login' && <Login />}
            {modalState.view = 'login' && <SignUp />} */}
        </Flex>
    )
}
export default AuthInputs;