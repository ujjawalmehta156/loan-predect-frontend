import React from 'react';

const PredictionResult = ({ result }) => {
  const isApproved = result.prediction === 1;
  const containerClass = isApproved ? 'result-success' : 'result-danger';
  const label = isApproved ? 'Approved' : 'Rejected';
  const subLabel = result.prediction_label;

  return (
    <div className={`result-container ${containerClass}`}>
      <h2 className="status">{label}</h2>
      <p>Model returned: <strong>{subLabel}</strong></p>
      
      {result.probability && (
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Confidence: {Math.max(...result.probability).toFixed(4) * 100}%
        </p>
      )}
    </div>
  );
};

export default PredictionResult;
