import { useAuth } from "../Components/Shared/Auth/AuthProvider";
import AppNavigator from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AppNavigator />;
};
