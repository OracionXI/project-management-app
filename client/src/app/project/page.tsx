import { Metadata } from "next";

import KanbanBoard from "@/components/project/kanbanBoard";
import TeamSwitcher from "@/components/team/team-switcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import data from "@/components/data/tasks.json";

export const metadata: Metadata = {
  title: " Project Dashboard",
  description: "Table, Kanban and Calendar",
};

const initialData = {
  todo: [
    {
      id: "1",
      title: "Design wireframes",
      description: "Create wireframes for the homepage.",
    },
    {
      id: "2",
      title: "Set up project repo",
      description: "Initialize a new git repository.",
    },
  ],
  inProgress: [
    {
      id: "3",
      title: "Develop UI",
      description: "Implement the user interface using React.",
    },
  ],
  Complete: [
    {
      id: "4",
      title: "Write tests",
      description: "Write unit tests for the components.",
    },
  ],
  Production: [
    {
      id: "5",
      title: "Write tests",
      description: "Write unit tests for the components.",
    },
  ],
};

export default function Project() {
  return (
    <div className="flex flex-col p-4 md:p-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TeamSwitcher />
      </div>

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList className="flex flex-wrap lg:w-[500px]">
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
              <div className="@container/main mt-5">
                <CardContent>
                  <DataTable data={data} columns={columns} />
                </CardContent>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kanban" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle>Kanban View</CardTitle>
              </CardHeader>

              <CardContent className="px-3 sm:px-6">
                <KanbanBoard data={data} />
              </CardContent>
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
