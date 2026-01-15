import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { session, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      navigate("/login", { replace: true });
    }
  }, [loading, session, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Checking your session…</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div>
          <p className="text-sm uppercase text-muted-foreground">Dashboard</p>
          <h1 className="text-3xl font-semibold">Welcome back, {session.user.email}</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Session details</CardTitle>
            <CardDescription>Basic data returned from Supabase auth.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium">User ID:</span> {session.user.id}
            </p>
            <p>
              <span className="font-medium">Email:</span> {session.user.email}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next steps</CardTitle>
            <CardDescription>
              Use the `supabase` client anywhere in the app to fetch/update data using Row Level Security policies.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Protect additional routes by checking for `session` via the `useAuth` hook.</p>
            <p>Fetch the logged-in user profile with `supabase.from(&quot;profiles&quot;).select().eq(&quot;id&quot;, session.user.id)`.</p>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button variant="outline" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
