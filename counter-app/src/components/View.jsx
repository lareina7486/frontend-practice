import './View.css';

const View = ({count}) => {
  return (
    <div className="wrapper">
      <h3>현재 카운트: </h3>
      <h1>{count}</h1>
    </div>
  );
};

export default View;
