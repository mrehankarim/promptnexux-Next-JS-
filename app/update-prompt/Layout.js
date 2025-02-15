import { Suspense } from "react";
import UpdatePromptPage from "./UpdatePromptPage"; // Move logic to a separate component

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptPage />
    </Suspense>
  );
}
