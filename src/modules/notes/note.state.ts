import { atom, useAtom } from "jotai";
import { Note } from "./note.entity";
import { get } from "http";

const noteAtom = atom<Note[]>([]);

export const useNoteStore = () => {
    const [notes, setNotes] = useAtom(noteAtom);

    // すでにグローバルステートに格納されている値と新しい値をマージする
    const set = (newNotes: Note[]) => {
        setNotes((oldNotes) => {
            // 一旦新しいノートと古いノートを結合
            const combineNotes = [...oldNotes, ...newNotes];
            // [note1,note2,note3,note3,note4]

            const uniqueNotes: { [key: number]: Note } = {};
            for (const note of combineNotes) {
                // 重複しているノートを上書きしてuniqueNotesに格納
                uniqueNotes[note.id] = note;
                // {1: note1, 2: note2, 3: note3, 4: note4 }
            }
            // オブジェクトから配列に変換して返却
            return Object.values(uniqueNotes);
        });
    };

    const deleteNote = (id: number) => {
        const findChildrenIds = (parentId: number): number[] => {
            const childrenIds = notes.filter((note) => note.parent_document == parentId)
                .map((child) => child.id);
            return childrenIds.concat(
                ...childrenIds.map(childId => findChildrenIds(childId))
            )
        };
        const childrenIds = findChildrenIds(id);
        setNotes((oldNotes) => oldNotes.filter(note => ![...childrenIds, id].includes(note.id)));
    };
    const getOne = (id: number) => notes.find((note) => note.id == id);
    const clear = () => setNotes([])

    return {
        getAll: () => notes,
        set,
        getOne,
        delete: deleteNote,
        clear,
    }
}