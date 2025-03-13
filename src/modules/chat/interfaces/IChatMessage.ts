import {Document} from "mongoose";

export interface IChatMessage extends Document {
    senderId: string;
    receiverId?: string;
    message: string;
    timestamp: Date;
    chatType: "private" | "group";
}