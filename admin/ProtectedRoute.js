import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "utils/AuthContext";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const useUser = () => ({ user: null, loading: false });
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);

  return <p>Redirecting...</p>;
};
export default ProtectedRoute;
