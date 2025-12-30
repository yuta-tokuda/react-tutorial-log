import './App.css'

// データ表示(https://ja.react.dev/learn#displaying-data)
// // ユーザー情報を表すJavaScriptのオブジェクト
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// // このコンポーネントを他のファイルから使えるようにする
// export default function Profile() {
//   // ここで「画面に表示する内容」を JSX で返す
//   return (
//     <>
//       {/* ユーザー名を表示する */}
//       {/* { } の中は JavaScript。user.name の値が表示される */}
//       <h1>{user.name}</h1>

//       {/* ユーザーの画像を表示する */}
//       <img
//         // class は JSX では className で書く
//         className="avatar"

//         // src属性に JavaScript の値を埋め込む
//         src={user.imageUrl}

//         // alt文字列も JavaScript で動的に作れる
//         alt={'Photo of ' + user.name}

//         // style はオブジェクトとして指定する（CSSではなくJS）
//         style={{
//           // ここも JavaScript。user.imageSize の値が入る
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// リストのレンダー(https://ja.react.dev/learn#rendering-lists)
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
