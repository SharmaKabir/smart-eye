import React from 'react';

const Rank = ({ name, entries }) => {
  const entryCount = typeof entries === 'object' ? JSON.stringify(entries) : entries;
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
      {entryCount}
        {/* {`${entries}`} */}
        {/* {entries} */}
      </div>
    </div>
  );
}

export default Rank;
