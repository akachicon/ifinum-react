import PropTypes from 'prop-types';

export const invoice = PropTypes.shape({
  id: PropTypes.string,
  number: PropTypes.number,
  date_created: PropTypes.string,
  date_supply: PropTypes.string,
  comment: PropTypes.string,
});

export const action = PropTypes.oneOf([
  'create',
  'update',
]);
