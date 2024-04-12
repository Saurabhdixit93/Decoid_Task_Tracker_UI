import React from "react";
import AuthenticatedLayout from "../AuthenticatedLayout";
import BottomNav from "../../../components/BottomNav/BottomNav";
import WorkoutTracker from "../../../components/WorkoutTracker";

export default function Home() {
  return (
    <AuthenticatedLayout>
      <WorkoutTracker />
      <BottomNav />
    </AuthenticatedLayout>
  );
}
