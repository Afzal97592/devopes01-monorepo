"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
client_1.client.
    app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hii there");
});
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await client_1.client.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        message: 'Signup successfully',
        id: user.id
    });
});
app.listen(3000);
