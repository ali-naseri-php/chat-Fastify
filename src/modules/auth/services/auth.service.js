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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_repository_1 = require("../repositories/auth.repository");
const jwt_1 = require("../../../config/jwt");
const checkEmailExists_1 = require("../actions/checkEmailExists");
const checkIsEmail_1 = require("../actions/checkIsEmail");
const checkIsPassword_1 = require("../actions/checkIsPassword");
class AuthService {
    static register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkEmailExists_1.checkEmailExists)(userData.email);
            userData.password = yield bcrypt_1.default.hash(userData.password, 10);
            return auth_repository_1.AuthRepository.createUser(userData);
        });
    }
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, checkIsEmail_1.checkIsEmail)(email);
            (0, checkIsPassword_1.checkIsPassword)(password, user.password);
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwt_1.JWT_SECRET, { expiresIn: "120h" });
            return { token, user };
        });
    }
}
exports.AuthService = AuthService;
