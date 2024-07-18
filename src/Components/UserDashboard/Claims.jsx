import React from 'react';

// Example claims data with longer claimReason sentences
const claimsData = [
  {
    name: 'BMW',
    interestRate: 5.5,
    overChargedInterestRate: 1.2,
    claimedAmount: 1000,
    claimReason: 'Late fees were charged excessively due to delays in processing payments and were not adequately communicated to me.'
  },
  {
    name: 'Mercedes Benz',
    interestRate: 6.0,
    overChargedInterestRate: 1.5,
    claimedAmount: 1200,
    claimReason: 'Misrepresentation of loan terms and conditions by the company led to unexpected increases in interest rates and additional charges.'
  },
  {
    name: 'Toyota',
    interestRate: 5.8,
    overChargedInterestRate: 1.0,
    claimedAmount: 1100,
    claimReason: 'Billing errors resulted in incorrect interest calculations, leading to higher than expected payments to me.'
  },
];

function Claims() {
  return (
    <div className='claims' id='claims'>
      <main className="flex-grow p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded shadow"
            onClick={() => handleComponentChange('submit-claim')}
          >
            Submit New Claim
          </button>
        </div>

        <div className="col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Claims</h2>
          <table className="min-w-full bg-white text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Interest Rate</th>
                <th className="py-2 px-4 border-b">Over Charged Interest Rate</th>
                <th className="py-2 px-4 border-b">Claimed Amount</th>
                <th className="py-2 px-4 border-b">Claim Reason</th>
              </tr>
            </thead>
            <tbody>
              {claimsData.map((claim, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{claim.name}</td>
                  <td className="py-2 px-4 border-b">{claim.interestRate}</td>
                  <td className="py-2 px-4 border-b">{claim.overChargedInterestRate}</td>
                  <td className="py-2 px-4 border-b">{claim.claimedAmount}</td>
                  <td className="py-2 px-4 border-b">{claim.claimReason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Claims;
