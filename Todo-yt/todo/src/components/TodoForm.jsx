import { useState} from "react";


const TodoFrom = ({addTodo}) => {
  const [value, setValue] = useState("")
  const [category, setCategory] =useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!value || !category) return
    // Add todo
    addTodo(value, category)
    // limpar campos
    setValue("");
    setCategory("")
  }

  return (
    <div className="todo-form">
      <h2>Crar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder="Digite o título" onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tafera</button>
      </form>
    </div>
  );
};

export default TodoFrom;
