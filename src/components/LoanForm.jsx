import React, { useState } from 'react';

const LoanForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    current_loan_amount: 100000,
    term: 0,
    credit_score: 720,
    annual_income: 65000,
    years_in_current_job: 5,
    home_ownership: 0,
    monthly_debt: 1200,
    years_of_credit_history: 15,
    months_since_last_delinquent: 0,
    number_of_open_accounts: 10,
    number_of_credit_problems: 0,
    current_credit_balance: 15000,
    maximum_open_credit: 30000,
    bankruptcies: 0,
    tax_liens: 0
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' || name === 'term' || name === 'home_ownership' 
        ? Number(value) 
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Current Loan Amount</label>
        <input type="number" name="current_loan_amount" value={formData.current_loan_amount} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Term</label>
        <select name="term" value={formData.term} onChange={handleChange} required>
          <option value={0}>Short Term</option>
          <option value={1}>Long Term</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Credit Score</label>
        <input type="number" name="credit_score" value={formData.credit_score} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Annual Income</label>
        <input type="number" name="annual_income" value={formData.annual_income} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Years in Current Job</label>
        <input type="number" name="years_in_current_job" value={formData.years_in_current_job} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Home Ownership</label>
        <select name="home_ownership" value={formData.home_ownership} onChange={handleChange} required>
          <option value={0}>Home Mortgage</option>
          <option value={1}>Own Home</option>
          <option value={2}>Rent</option>
          <option value={3}>Have Mortgage</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Monthly Debt</label>
        <input type="number" name="monthly_debt" value={formData.monthly_debt} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Years of Credit History</label>
        <input type="number" step="0.1" name="years_of_credit_history" value={formData.years_of_credit_history} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Months Since Last Delinquent</label>
        <input type="number" name="months_since_last_delinquent" value={formData.months_since_last_delinquent} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Number of Open Accounts</label>
        <input type="number" name="number_of_open_accounts" value={formData.number_of_open_accounts} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Number of Credit Problems</label>
        <input type="number" name="number_of_credit_problems" value={formData.number_of_credit_problems} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Current Credit Balance</label>
        <input type="number" name="current_credit_balance" value={formData.current_credit_balance} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Maximum Open Credit</label>
        <input type="number" name="maximum_open_credit" value={formData.maximum_open_credit} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Bankruptcies</label>
        <input type="number" name="bankruptcies" value={formData.bankruptcies} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Tax Liens</label>
        <input type="number" name="tax_liens" value={formData.tax_liens} onChange={handleChange} required />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Processing Analysis...' : 'Predict Loan Status'}
        </button>
      </div>
    </form>
  );
};

export default LoanForm;
