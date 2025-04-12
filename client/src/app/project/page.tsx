import { Metadata } from "next";

import TeamSwitcher from "@/components/team/team-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function Team() {
  return (
    <div className="flex flex-col p-4 md:p-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TeamSwitcher />
        <div className="flex items-center gap-2">
          <Button>➕ Add Column</Button>
        </div>
      </div>

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="kanban">Kanban</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="table" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle>Table View</CardTitle>
              </CardHeader>
              <CardContent>Table content here</CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kanban" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle>Kanban View</CardTitle>
              </CardHeader>
              <CardContent>Kanban content here</CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>Calendar content here</CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
