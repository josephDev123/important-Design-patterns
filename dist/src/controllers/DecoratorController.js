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
exports.DecoratorController = void 0;
const BoldTextDecorator_1 = require("../utils/decoratorPattern/BoldTextDecorator");
const EditorConcrete_1 = require("../utils/decoratorPattern/EditorConcrete");
class DecoratorController {
    EditorMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            const EditorConcreteImpl = new EditorConcrete_1.EditorConcrete(content);
            const boldText = new BoldTextDecorator_1.BoldEditor(EditorConcreteImpl);
            const result = yield boldText.process();
            res.status(200).json({ msg: result });
            return;
        });
    }
}
exports.DecoratorController = DecoratorController;
