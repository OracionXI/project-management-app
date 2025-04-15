import { AccountForm } from "@/components/settings/account-form";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Account Settings",
};

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6 mt-6 mx-6 mb-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
