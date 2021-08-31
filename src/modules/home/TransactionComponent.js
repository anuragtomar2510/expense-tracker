import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`

  display : flex;
  flex-direction : column;
  align-items : flex-start;
  width : 100%;
  padding : 10px 22px;
  font-weight: bold;
  font-size: 18px;
  gap : 10px;

  & input {

        padding : 10px 12px;
        border-radius: 12px;
        background: #e6e8e9;
        border: 1px solid #e6e8e9;
        outline: none;
        text-align: center;
        width: 100%;
  }

`;

const Cell = styled.div`

        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 10px 15px;
        font-size: 14px;
        border-radius: 2px;
        align-items: center;
        justify-content: space-between;
        font-weight: normal;
        border: 1px solid #e6e8e9;
        border-right: 4px solid ${props => props.isExpense ? 'red' : 'green' };
        

`;

const TransactionCell = ({transaction}) => {

        return (
                <Cell isExpense={transaction.type === 'EXPENSE'}>
                        <span>{transaction.desc}</span>
                        <span>₹{transaction.amount}</span>                     
                </Cell>
        )

}


const TransactionComponent = ({transactions}) => {

        const [filteredTransactions, setFilteredTransactions] = useState(transactions)
        const [searchText, setSearchText] = useState("")

        const filterData = () => {

                if(!searchText || !searchText.trim().length) {

                        setFilteredTransactions(transactions)
                        return

                }

                let txn = [...transactions]
                txn = txn.filter((transaction) => transaction.desc.trim().toLowerCase().includes(searchText.trim().toLocaleLowerCase()))
                setFilteredTransactions(txn)
        }
      

        useEffect(() => {

                filterData()

        }, [searchText, transactions])
       
        return (
                <Container>
                        Transaction 
                        <input placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

                        {filteredTransactions?.length ? filteredTransactions.map((transaction => <TransactionCell transaction={transaction}/>)) : ""}
                </Container>
        )
}

export default TransactionComponent
