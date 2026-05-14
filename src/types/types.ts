export type Task = {
    title: string;
    description: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
}