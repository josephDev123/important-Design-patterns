import { Request, Response } from "express";
import { BoldEditor } from "../features/decoratorPattern/BoldTextDecorator";
import { EditorConcrete } from "../features/decoratorPattern/EditorConcrete";

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
