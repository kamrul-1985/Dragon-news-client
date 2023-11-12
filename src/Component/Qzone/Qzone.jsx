import React from 'react';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const Qzone = () => {
      return (
            <div className='bg-dark p-4'>
                  <img src={qZone1} alt="kids pic"  />
                  <img src={qZone2} alt="kids pic" />
                  <img src={qZone3} alt="kids pic" />
            </div>
      );
};

export default Qzone;