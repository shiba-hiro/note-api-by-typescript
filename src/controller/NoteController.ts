import {
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';
import uuid from 'uuid';

import { NoteUpsertRequest } from '../interface/NoteInterface';
import Note from '../model/NoteModel';

const router: Router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  let postNote = null;
  try {
    postNote = NoteUpsertRequest.fromObject(req.body);
  } catch (error) {
    res
      .status(422)
      .send({
        message: error.message,
      });
  }
  postNote = postNote as NoteUpsertRequest;

  const note = new Note({
    id: uuid.v4(),
    title: postNote.title,
    content: postNote.content,
  });

  try {
    await note.save();
  } catch (error) {
    return next(error);
  }
  res
    .status(201)
    .send(note);
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(200)
      .send(await Note.findAll());
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  let note = null;
  try {
    note = await Note.findById(req.params.id);
  } catch (error) {
    return next(error);
  }

  if (note) {
    res
      .status(200)
      .send(note);
  } else {
    res
      .status(404)
      .send({
        message: 'Note does not exist.',
      });
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  let putNote = null;
  try {
    putNote = NoteUpsertRequest.fromObject(req.body);
  } catch (error) {
    res
      .status(422)
      .send({
        message: error.message,
      });
  }
  putNote = putNote as NoteUpsertRequest;

  let note = null;
  try {
    note = await Note.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!note) {
    res
      .status(404)
      .send({
        message: 'Note does not exist.',
      });
  }
  note = note as Note;

  try {
    await note.update({
      title: putNote.title,
      content: putNote.content,
    });
  } catch (error) {
    return next(error);
  }
  res
    .status(200)
    .send(note);
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  let note = null;
  try {
    note = await Note.findById(req.params.id);
  } catch (error) {
    return next(error);
  }

  if (!note) {
    res
      .status(204)
      .send();
  }

  note = note as Note;
  try {
    note.destroy({ force: true });
  } catch (error) {
    return next(error);
  }

  res
    .status(204)
    .send();
});

export const NoteController: Router = router;
