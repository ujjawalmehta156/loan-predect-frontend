import React, { useState } from 'react';
import LoanForm from './components/LoanForm';
import PredictionResult from './components/PredictionResult';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prediction from server');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Error making prediction. Ensure the FastAPI backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Loan Prediction Portal</h1>
        <p>Enter applicant details to predict loan approval status instantly</p>
      </header>

      <main>
        <LoanForm onSubmit={handlePredict} loading={loading} />
        
        {error && (
          <div className="result-container result-danger">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        )}

        {result && <PredictionResult result={result} />}
      </main>
    </div>
  );
}

export default App;
