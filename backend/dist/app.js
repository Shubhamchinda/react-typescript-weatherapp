"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./api/routes"));
const rejectFolders = [];
const app = express_1.default();
app.use(compression_1.default());
app.use(morgan_1.default(":method :url :status :res[content-length] - :response-time ms", {
    skip: (req) => rejectFolders.indexOf(req.url.split("/")[1]) !== -1
}));
app.use(cors_1.default());
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use("/api", routes_1.default);
exports.default = app;
