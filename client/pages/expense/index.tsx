import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import Expense from '../../components/expense/Expense';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useExpense from '../../libs/hooks/expense/useExpense';

const ExpensePage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const expense = useExpense();

  return (
    <PageTemplate user={user}>
      <Expense expense={expense} />
    </PageTemplate>
  );
};

export default ExpensePage;
