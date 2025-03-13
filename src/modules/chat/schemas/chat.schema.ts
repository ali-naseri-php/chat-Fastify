import { Schema, model, Document } from "mongoose";
import {IChatMessage} from "../interfaces/IChatMessage";

const ChatMessageSchema = new Schema<IChatMessage>({
    senderId: { type: String, required: true },
    receiverId: { type: String, required: false },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    chatType: { type: String, enum: ["private", "group"], required: true },
});

export const ChatMessage = model<IChatMessage>("ChatMessage", ChatMessageSchema);