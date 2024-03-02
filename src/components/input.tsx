const Input = ({ text, onChangeText, onClickAdd }) => {
  return (
    <div>
      <input
        placeholder="TODOを入力"
        type="text"
        value={text}
        onChange={onChangeText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

export default Input;
