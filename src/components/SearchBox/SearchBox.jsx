import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
