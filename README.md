## ページ生成くん

jsonファイルで設定を書き、それにもとづいてコンポーネントを組み合わせページを組み立てるサンプル

## テスト方法

初回ビルド＆devserver立ち上げ

```
$ node index.js
$ cd dist
$ npm run dev
```

devserverが立ち上がっている状態でtest.jsonの文字列を書き換えたりして

```
$ node index.js
```

とすると、ページが更新されます