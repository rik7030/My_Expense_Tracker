import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-red)" // Adjust color if needed
                                    deleteItem={deleteExpense}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyled>
    );
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: hidden;
    .total-expense {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.5rem; /* Reduced font size */
        gap: .5rem;
        span {
            font-size: 2rem; /* Reduced font size */
            font-weight: 800;
            color: var(--color-red); // Adjust color if needed
        }
    }
    .expense-content {
        display: flex;
        flex-direction: column; /* Stack form and expenses vertically */
        gap: 1rem; /* Reduced gap */
        .form-container,
        .expenses {
            flex: 1;
        }
    }
`;

export default Expenses;
