"use client"
import { Suspense } from "react";
import EditPrompt from "./page";
export default function Layout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <EditPrompt/>
    </Suspense>
  );
}
