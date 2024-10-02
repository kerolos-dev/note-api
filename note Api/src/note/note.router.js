import Router from "express";
import * as  Note  from "./note.controlier.js";
import { checkUserNoteOwner } from "../middleWare/checkEmailHashPaass.js";
const  noteRouter=Router()
noteRouter.post("/",Note.createNote)
noteRouter.patch("/:id",checkUserNoteOwner,Note.updataNote)
noteRouter.delete("/:id",checkUserNoteOwner,Note.deletNote)
noteRouter.get("/",checkUserNoteOwner,Note.getAllNote)
noteRouter.get("/user/:id",Note.getAllUser)
export  default noteRouter;
