export interface User {
    id?:string,
    username:string,
    password?:string,
    phone:string,
    role: "user" | "businse" | "admin" | "superAdmin"
}