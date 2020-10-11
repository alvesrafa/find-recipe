import React from 'react';

import { Container } from './styles';

const Pagination = ({ perPage, total, paginate, current, withFooter }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={current === page ? 'active' : ''}
            onClick={() => paginate(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      {withFooter && (
        <p>
          Página {current} de {Math.ceil(total / perPage)}
        </p>
      )}
    </Container>
  );
};
export default Pagination;
