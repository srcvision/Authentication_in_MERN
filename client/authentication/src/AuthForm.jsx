import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`relative transition-all duration-500 ${
          isLogin ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {isLogin && <LoginForm toggle={() => setIsLogin(true)} />}
      </div>

      <div
        className={`absolute transition-all duration-500 ${
          !isLogin ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {!isLogin && <RegisterForm toggle={() => setIsLogin(true)} />}
      </div>
    </div>
  );
};

export default AuthForm;
