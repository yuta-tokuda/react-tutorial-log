import './App.css'

// イベントに応答する (https://ja.react.dev/learn#responding-to-events)
// ボタン用コンポーネント
function MyButton() {
  // ボタンがクリックされた時の処理
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default function App() {
  return (
    <div>
      <MyButton />
    </div>
  );
}
