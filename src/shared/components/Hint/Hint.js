import './hint.scss';

const Hint = ({ subject }) => (
  subject ? (
    <span className={`hint is-${subject.type}`}>
      {subject.message}
    </span>
  ) : null
);

export default Hint;
