import { Request, Response } from "express";
import { BoldEditor } from "../utils/decoratorPattern/BoldTextDecorator";
import { EditorConcrete } from "../utils/decoratorPattern/EditorConcrete";

export class DecoratorController {
  async EditorMessage(req: Request, res: Response) {
    const { content } = req.body;
    const EditorConcreteImpl = new EditorConcrete(content);
    const boldText = new BoldEditor(EditorConcreteImpl);
    const result = await boldText.process();
    res.status(200).json({ msg: result });
    return;
  }
}
