import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`

  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 10px;
  width: 100%;

`;

const BalanceBox = styled.div`

  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  font-size : 20px;
  font-weight : bold;
  width: 100%;


`;

const AddTransaction = styled.div`

  background : black;
  color : white;
  padding: 5px 10px;
  border-radius : 4px;
  cursor : pointer;
  font-size : 15px;
  font-weight : bold;
  text-align : center;


`;

const AddTransactionContainer = styled.div`

  display: flex;
  flex-direction : column;
  border: 1px solid #e6e8e9;
  gap : 10px;
  padding : 15px 20px;
  margin : 20px;
  width : 100%;

  & input {

        outline : none;
        padding : 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;


  }

`;

const RadioBox = styled.div`

        display : flex;
        flex-direction : row;
        align-items : center;
        width : 100%;

        & input {

                width: unset;
                margin: 0 10px;

        }


`;

const ExpenseContainer = styled.div`

        display: flex;
        flex-direction: row;
        gap: 12px;
        margin: 20px;

`;

const ExpenseBox = styled.div`

        width: 135px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
        padding: 15px 20px;
        font-size: 14px;

        & span {

                font-weight: bold;
                font-size: 20px;
                color: ${props => (props.isIncome ? 'green' : 'red')}

        }




`;
const AddTransactionView = ({isAddTxnVisible, toggleAddTxn, transactions, setTransactions}) => {

        const [amount, setAmount] = useState()
        const [desc, setDesc] = useState()
        const [type, setType] = useState("EXPENSE")

        const addTransaction = () => {

                toggleAddTxn(!isAddTxnVisible)
                const newTransaction = {

                        amount: Number(amount),
                        desc,
                        type,
                        id:Date.now()

                }

                const transactionsArray = [...transactions]
                transactionsArray.push(newTransaction)
                setTransactions(transactionsArray)


        }


        return (
                <AddTransactionContainer>
                        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                        <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                        <RadioBox>
                                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)}></input>
                                <label htmlFor="expense">Expense</label>
                                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)}></input>
                                <label htmlFor="income">Income</label>
                        </RadioBox>
                        <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
                </AddTransactionContainer>
        )
}

const OverviewComponent = ({transactions, setTransactions, expense, income}) => {

        const [isAddTxnVisible, toggleAddTxn] = useState(false)

        return (
                <Container>
                        <BalanceBox>
                                Balance : ₹{income - expense}
                                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>
                                        {isAddTxnVisible ? ('Cancel') : ('Add')}
                                </AddTransaction>
                        </BalanceBox>
                        {isAddTxnVisible && <AddTransactionView isAddTxnVisible={isAddTxnVisible} toggleAddTxn={toggleAddTxn} transactions={transactions} setTransactions={setTransactions}></AddTransactionView>}

                                <ExpenseContainer >
                                <ExpenseBox isIncome={false}>
                                        Expense <span>₹{expense}</span>
                                </ExpenseBox>

                                <ExpenseBox isIncome={true}>
                                        Income <span>₹{income}</span>
                                </ExpenseBox>
                                </ExpenseContainer>
                </Container>

                
        )
}

export default OverviewComponent
