import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import OverviewComponent from './OverviewComponent'
import TransactionComponent from './TransactionComponent'

const Container = styled.div`

  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 30px;
  margin-bottom : 10px;
  width : 360px;

`;

const HomeComponent = () => {

        const [transactions, setTransactions] = useState([])
        const [expense, updateExpense] = useState(0)
        const [income, updateIncome] = useState(0)

        const calculateBalance = () => {

                let inc = 0, exp = 0;

                transactions.forEach((transaction) => {
                        
                        if(transaction.type === 'EXPENSE') {

                                exp = exp + transaction.amount

                        } else {

                                inc = inc + transaction.amount

                        }});
                
                        updateExpense(exp)
                        updateIncome(inc)

        }

        useEffect(() => {
                
                calculateBalance()
                
        }, [transactions])

        return (
                <Container>
                        
                                <OverviewComponent transactions={transactions} setTransactions={setTransactions} expense={expense} income={income}>

                                </OverviewComponent>
                                <TransactionComponent transactions={transactions}>

                                </TransactionComponent>
                        
                </Container>
        )
}

export default HomeComponent
