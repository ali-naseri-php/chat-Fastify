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
exports.checkEmailExists = checkEmailExists;
const auth_repository_1 = require("../repositories/auth.repository");
function checkEmailExists(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield auth_repository_1.AuthRepository.findByEmail(email);
        if (existingUser)
            throw new Error("این ایمیل قبلاً ثبت شده است!");
    });
}
