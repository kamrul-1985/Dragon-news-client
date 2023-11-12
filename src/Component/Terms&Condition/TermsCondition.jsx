import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
      return (
            <div>
                  <h1>Terms And conditions</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta ipsa voluptates. Veritatis, officiis molestiae. Excepturi, molestiae. Eum perspiciatis magnam blanditiis consequuntur! At cum qui ipsam, reprehenderit odit deleniti maxime et sunt corporis itaque ex asperiores soluta magni quia dolores aliquid similique rem doloremque nobis accusamus sequi aspernatur! Eos modi, reiciendis autem distinctio maiores provident cum dignissimos ipsum, reprehenderit, culpa voluptates quasi sed deleniti perspiciatis ex voluptatem vero sint doloremque omnis molestias obcaecati? Nulla cum magni dolorem, ipsam velit labore enim. Deserunt modi laborum laboriosam aperiam odio, molestias ipsam dolore voluptate nulla officia ab beatae est eos, rerum magnam placeat.</p>
                  <p>Go back to <Link className='text-danger' to="/register">Register</Link></p>
            </div>
      );
};

export default TermsCondition;