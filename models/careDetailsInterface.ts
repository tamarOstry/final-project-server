import { Mixed } from "mongoose";

export interface careDetailsInterface {
    dateTime: Date;
    nurse: string;
    careDetails: Mixed;
}