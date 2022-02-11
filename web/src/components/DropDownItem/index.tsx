import './style.css';

type DropDownItemProps = {
  language: string;
  handler: () => void;
};

function DropDownItem({ language, handler }: DropDownItemProps) {
  return (
    <button type="button" className="dropdown-item" onClick={() => handler()}>
      {language}
    </button>
  );
}

export default DropDownItem;
