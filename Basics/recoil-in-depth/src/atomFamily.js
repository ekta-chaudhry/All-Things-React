import { atomFamily } from "recoil";
import { todos } from "./todos";

export const todosFamily = atomFamily({
    key: "TodosAtomFamily",
    default: id => {
        return todos.find(x => x.id === id);
    }
})