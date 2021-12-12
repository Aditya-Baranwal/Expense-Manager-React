import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let INTIAL_EXPENSES = [
  {
    id : "e1",
    title: "Expense 1",
    amount: 450,
    date: new Date(2021, 5, 12)
  }, 
  {
    id : "e2",
    title: "Expense 2",
    amount: 350,
    date: new Date(2022, 3, 12)
  }
]

const App = () => {
  
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);
  
  const addExpenseHandler = (newExpense) => {   
    let expense = {
      id : newExpense.id,
      title : newExpense.title,
      amount : newExpense.amount,
      date : newExpense.date
    }
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>  
  );
    
}

export default App;                                                         