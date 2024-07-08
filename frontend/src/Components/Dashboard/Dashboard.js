import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p className="amount">
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p className="amount">
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p className="amount">
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="salary-stats">
              <div className="salary-item">
                <h3 className="salary-title">Min Salary</h3>
                <p className="amount">
                  {dollar} {Math.min(...incomes.map((item) => item.amount))}
                </p>
              </div>
              <div className="salary-item">
                <h3 className="salary-title">Max Salary</h3>
                <p className="amount">
                  {dollar} {Math.max(...incomes.map((item) => item.amount))}
                </p>
              </div>
              <div className="salary-item">
                <h3 className="salary-title">Min Expense</h3>
                <p className="amount">
                  {dollar} {Math.min(...expenses.map((item) => item.amount))}
                </p>
              </div>
              <div className="salary-item">
                <h3 className="salary-title">Max Expense</h3>
                <p className="amount">
                  {dollar} {Math.max(...expenses.map((item) => item.amount))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    .chart-con {
      height: 300px;
      display: flex;
      flex-direction: column;
      .amount-con {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 4rem; /* Increased margin-top */
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
          border-radius: 15px;
          padding: 0.5rem;
          flex: 1;
          margin-top: 3rem; /* Further increased margin-top */
          h2 {
            font-size: 1.5rem;
          }
          .amount {
            font-size: 1.5rem;
            font-weight: 600;
          }
        }

        .balance {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 1.8rem;
          }
        }
      }
    }

    .history-con {
      h2 {
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
      }
      .salary-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        .salary-item {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
          padding: 0.5rem;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h3 {
            font-size: 1rem;
          }
          .amount {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export default Dashboard;
