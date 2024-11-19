import { RecoilRoot, useRecoilValue } from "recoil";
import { todosFamily } from "./atomFamily";


function AtomFamilyApp() {
    return <RecoilRoot>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
    </RecoilRoot>
}

function Todo({id}) {
    const todo = useRecoilValue(todosFamily(id));
    console.log(todo);
    return <>
    {todo.title} || {todo.completed ? "true": "false"}
    <br></br>
    </>
}

export default AtomFamilyApp;