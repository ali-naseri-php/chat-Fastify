"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    static register(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield auth_service_1.AuthService.register(req.body);
                reply.code(201).send({ message: "کاربر ثبت شد!", user });
            }
            catch (error) {
                reply.code(400).send({ error: error.message });
            }
        });
    }
    static login(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const { token, user } = yield auth_service_1.AuthService.login(email, password);
                reply.send({ message: "ورود موفقیت‌آمیز!", token, user });
            }
            catch (error) {
                reply.code(400).send({ error: error.message });
            }
        });
    }
}
exports.AuthController = AuthController;
