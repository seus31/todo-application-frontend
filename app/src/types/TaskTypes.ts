export interface TaskType {
    id: number,
    task_name: string,
    user_id: number,
    parent_id?: number,
    parent?: any,
    children?: TaskType[]
    due_date: string,
    due_time: string,
    status: string,
    priority: number,
    created_at: string,
    updated_at: string
}
