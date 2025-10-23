import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import LoginForm from "../LoginForm/LoginForm";

const LoginWrapper = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Enter your credentials to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginWrapper;
