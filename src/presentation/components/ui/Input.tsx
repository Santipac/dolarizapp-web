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
      type="text"
      min={0}
      max={9999999999}
      maxLength={11}
      step={0.0001}
      pattern="[0-9]{0,13}"
      className={BASE_INPUT_CLASSES}
      value={value}
      onChange={e => handleInput(e.target.value)}
    />
  );
};
