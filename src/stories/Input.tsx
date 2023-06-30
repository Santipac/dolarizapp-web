const BASE_INPUT_CLASSES =
  'p-2 bg-grey  ring-0 outline-0 font-extrabold text-lg w-full border-l-2 border-dark';

export const Input = ({
  value = '',
  handleInput = (value: string) => {
    value;
  },
}) => {
  return (
    <input
      type="number"
      min={0}
      step={0.0001}
      className={BASE_INPUT_CLASSES}
      value={value}
      onChange={e => handleInput(e.target.value)}
    />
  );
};
