import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="grid h-screen overflow-hidden">
      <div className="flex flex-col h-full gap-4 p-6 md:p-10">
        {/* Logo / Header */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/landing" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            SyncVoid.
          </a>
        </div>

        {/* Login Form Section */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
