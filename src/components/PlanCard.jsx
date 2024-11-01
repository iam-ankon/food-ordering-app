import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlanCard({ plan }) {
  const navigate = useNavigate();

  return (
    <div className="plan-card" onClick={() => navigate(`/plan/${plan}`)}>
      <h2>{plan}</h2>
      <button>View Food Items</button>
    </div>
  );
}

export default PlanCard;
