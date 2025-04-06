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
exports.BoldEditor = void 0;
const AbstractDecorator_1 = require("./AbstractDecorator");
class BoldEditor extends AbstractDecorator_1.abstractDecorator {
    // async setNote() {
    //   `<b>${this.setNote()} </b>`;
    // }
    getNote() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.Editor.getNote();
            return `<b>${text}</b>`;
        });
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.getNote();
            return text;
        });
    }
}
exports.BoldEditor = BoldEditor;
