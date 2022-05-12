# HTML課題

## はじめに
- 想定している対象
    - HTML・CSSの研修をだいたい終えている
    - Javascriptの研修をだいたい終えている
- 目的
    - より実務に近い書き方を身に着ける
    - 少し理解を深める
- 進め方
    - わからなくなったら、以下のように進めてみてください。
    1. わからない部分の中で最も関係のありそうなキーワードで検索
        2. 具体的な手順がわかったら終了
        3. わからなかったら、そのキーワードの概要についてさらに調べて、解決につながりそうなキーワードを見つける
        5. 繰り返し
    4. 上記を15分行い、解決しなければ質問してください
    5. 15分以上はロスが大きいので切り上げて質問してください


## 準備
1. VSCodeをインストール
- https://miya-system-works.com/blog/detail/vscode-install/
- 上記の記事を参考にして、インストールを進めてください。

2. Mithril Emmet拡張機能をインストール
- VSCodeのインストールが完了したら、下記のURLから「インストール」を押して拡張機能をインストールしてください
    - [mithril-emmet](https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet)
    - EmmetはHTMLの入力を短縮できます。詳細は下記を参照してください。
        - https://technical-creator.com/vscode-emmet/

4. Live Server拡張機能をインストール
- [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    - Live ServerはHTMLを保存したタイミングで自動でブラウザのリロードを可能にします。


4. 新規ファイルを開き、「test.html」という名前で保存
5. 「!」と入力したあとに「Tab」キーを押してみてください
![](https://i.imgur.com/MGuZrs6.gif)


- 上記のような候補が出てこなければMythril Emmetがインストールされていません。VSCodeを再起動するか問題の作成者に声をかけてください。

7. 保存したtest.htmlをLive Serverで開いてみてください
![](https://i.imgur.com/cVR1rmQ.gif)


（「Go Live」をクリック）

7. 適当な文言を追加して、「Ctl＋S」で保存してみてください。
    1. ブラウザが自動で更新されることを確認してください。
9. いったんVSCodeを閉じて、「エクスプローラー」を開いてください。
10. 「`C:/Users/(自分のユーザー)/Project/Plactice/HTML`」というフォルダを作成してください。
11. 先ほど保存した「test.html」を上記のディレクトリに移動してください。
12. 再度VSCodeを開き、「フォルダを開く」＞「`C:/Users/○○/Project/Plactice/HTML`」を選択して「OK」を押してください

![](https://i.imgur.com/ZkHLPL7.png)


#### 現在のディレクトリ構造

```
C:/Users/○○/Project/Plactice/HTML
　　　　　　　　　　　　　　　　　┗test.html
```

## 肩慣らし
### 練習1：フォームの作成

#### 目標
- よく使うHTML要素の書き方を確認する
- idとname、labelの役割を理解する
- CSSの復習


#### 練習
- test.htmlの中に以下のようなフォームとボタンを作成してください。
![](https://i.imgur.com/MoAOwg5.png)

- 実装の方針
    - それぞれの要素に任意のidとnameを指定してください。
    - label要素を使ってください。
    - `<br>`タグを使わないでください。

見た目に関しては、以下のCSSをtest.htmlの`<head>～</head>`の間に貼り付けてください。

また、クラス名はCSSに合わせてください。

```
  <style>
    .inputArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px;
    }
    #submit {
      margin: 5px;
      padding: 15px;
    }
  </style>
```


### 練習2：イベントリスナーの追加

#### 目標
- 開発者ツールを使ってデバッグをする
- DOM要素を変数に格納する
- `addEventListener`を使った書き方を理解する


#### 準備

- 同じディレクトリに「test.js」を作ってください

#### 現在のディレクトリ構造

```
C:/Users/○○/Project/Plactice/HTML
　　　　　　　　　　　　　　┗test.html
　　　　　　　　　　　　　　┗test.js
```

- 「test.js」を「test.html」から読み込んでください
    - `</body>`の直前に下記を記述してください

```
<script src="test.js"></script>
```

- 「test.js」の中に以下のコードを貼り付けてください

```
submit.addEventListener('click', () => {
  // ここに処理を書く
})
```

#### 練習

1. 上記の「ここに処理を書く」に`console.log("test")`を追記してみてください
2. submitボタンを押したときの挙動を開発者ツール（F12）で確認してみてください
![](https://i.imgur.com/dYZMjCi.gif)


4. 上記は正しい書き方ではありません。
5. `submit`を`submitButton`に変更してCtl＋Sで保存してください。その後、submitボタンを押したときの挙動を確認してください。

6. 下記のコードの`''`の中に、1.で作ったsubmitボタンのIDもしくはクラスを記述してください。
    - `const submitButton = document.querySelector('')`
7. ボタンを押すとコンソールに「test」と表示されることを確認してください





### 演習3：Javascriptでフォームの内容を表示
- フォームを入力して「submit」ボタンを押すとフォームの内容が下部に表示されるように変更してください。
- ※見た目は完全に一致しなくても大丈夫です。
![](https://i.imgur.com/wYhkhqT.gif)

- 実装の方針
    - test.htmlの中に`displayArea`というclass名を持った`div`を作成してください。
    - その中にそれぞれ`emailArea`と`passArea`というclass名を持った`div`を作成してください。
    - test.jsの中で上記2つのDOM要素を取得し、`innerHTML`を書き換えてください。
    

#### 参考になるサイト
書き方がわからなかったら下記を参考にしてみてください。

- [定数について](https://www.sejuku.net/blog/58868)
- [DOM要素の取得について](https://www.sejuku.net/blog/70581)
- https://techacademy.jp/magazine/21069
- [addEventListenerについて](https://www.sejuku.net/blog/57625)




## 基本編

- 目的
    - 基本的なJavaScriptの記法を確認します。
    - jQueryを使わずにJavaScriptでDOM要素を取得します。

#### 以下の課題を行ってください。

- 「test.html」の中にボタンを1つ作ってください。
- 上記で作ったボタンにカウンター機能を付けてください(クリックすると数が増える)

#### 実装の方針
      1. ボタンのDOM要素を取得して定数counterに代入してください
      2. 数字を表示する領域をHTMLで作成し、DOM要素を取得して定数counterAreaに代入してください
      3. カウンター用の変数cntを宣言してください
      4. 1で取得した定数counterにクリックイベントを付与してください(addEventListnerを使う) 
      5. addEventListenerの中でcoutnerAreaのinnerHTMLを書き換えてください
      6. 同時にcnt変数も書き換えてください
  - 完成形のイメージ
![](https://i.imgur.com/LBpeQOW.png)


#### 参考になるサイト
[【初心者でもわかる】jsでクリックした数をカウントする装置](https://qiita.com/7note/items/08ce715e3d2de1dcd559)
※上記ではjQueryを使っていますが、jQueryを使わずに実装してください。
このあたりが参考になります。
[[jQuery] 内容や属性を変更するメソッド](https://qiita.com/marumoe/items/d01fa82c0427dcb24028)

#### なぜjQueryを使わないのか

```
jQueryはJavascriptを覚えなくても簡単に書けるうえに、
かつてはJavascriptに足りない機能を補うために必須でした。
しかし、2015年ごろを境にJavaScriptの基本機能が大幅に増強されたため、
jQueryを使わなくても実装できることが増えてきました。
Fetch APIはその一つです。（後半で学習します）
加えて、jQueryのセキュリティ面での問題もあります。
ただし、現状のSATTではjQueryを使用しているプロジェクトが大半です。
そのため、jQueryが内部で何をやっているかを知ることは意味があります。
```


- 上記ができたら：上記のカウントをリセットするボタンを付けてみてください


## 応用編（外部API）

- 目的
  - 外部APIから画像を取得する手法を確認します。
  - javascriptによるfetchとjsonレスポンスの扱い方を学習します。

#### 概要

- APIとは
    - JSONを返却するアプリケーション（のURL）
    - APIはjsonファイル以外も返却できますが、大半はJSONを使います。（多分）

- JSONとは
    - [JSONってなに?これさえ読めば理解が深まる](https://reffect.co.jp/html/what_is_json#:~:text=JSON%E3%81%AFJavaScript%20Object%20Notation,%E3%81%AF%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)
    - 構造化された（階層のある）データ形式です。
    - JavaScriptのオブジェクト記法をもとにしていますが、扱いやすいため、他の言語でも広くデータのやり取りのインターフェースとして使われています。


### JSON操作の練習

1. 下記のコードを開発者ツールのコンソールに直接貼り付けてください。

```
const json = {
  message: "myURL"
}
```

2. ブラウザのコンソール上で`json`と入力して、表示される結果を確認してください


### JSONの操作について
- jsonに格納されたデータを取り出すには、`オブジェクト名.プロパティ`のように指定します。
- これは入れ子にすることが可能です。
- 1. の記述を以下のように書き換えてください。
```
const json = {
  favoriteSong: {
     title: "Sugar",
     artist: "Maroon5"
  }
}

console.log(json)
```

#### 演習1

上記のオブジェクト`json`から「title」を取り出してconsole.logで表示してください。
階層構造になっていることに注意してプロパティを記述してください。


#### 演習2
上記を参考に、自分の好きなものについての情報をJSONで表現してみてください。



### 演習（画像読み込み）

1. FetchImage.jsを新規作成し、下記のコードを貼り付けてください

```
const fetchDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random", {
    mode: 'cors'
  }).then(
    res => {
      res.json().then(
        data =>{
          const dog = document.querySelector('#dog');
          const dogImageUrl = data.message
          dog.src = dogImageUrl
        })
  })
}


window.addEventListener('DOMContentLoaded', e => {
  fetchDogImage()
})
```

2. FetchImage.htmlを新規作成し、適切な個所に下記のコードを貼り付けてください（bodyタグの内側であればどこでもOKです）

```
  <div class="imageArea">
    <img id="dog" src="" alt="inu">
  </div>
```

3. FetchImage.html上に画像が表示されるかブラウザで確認してみてください。
4. ページを再読み込みして、画像がどうなるかを確認してみてください。


5. "https://dog.ceo/api/breeds/image/random"の部分を下記に書き換えてください
    - https://randomfox.ca/floof/
6. 画像が表示されるかどうかを確認してください
    - 表示されない場合、なぜ表示されないのかを考えてみてください


7. 画像が表示されるよう修正してください
    - 修正の方針
        - Google Chromeの開発者ツール（F12）でネットワークタブを開く
        - 今回取得したAPIのURI（random）を探し、クリックする
        - 「レスポンス」でどのような値が返ってきているかを確認する
            - ![](https://i.imgur.com/rWyr76B.png)

        - 現在のコードでどのように表示しているかを確認する
            - 以下のコードを適切な行に追加し、コンソールでレスポンスを確認する
            - `console.log(data)`
        - 先ほどのJSONの項目の練習を参考に、適切なデータを取り出してください




### 付録
- 上記ができたら：画像を再表示するためのリロードボタンを作ってみましょう
    - ページ全体ではなく、画像のみを再読み込みしてください
    - 記述は最小限になるようにしてください（fetchDogImage()の中身をコピペは×）


- それも終わったら：上記のコードにエラーログを追加してみましょう


- エラーログ実装の方針

FetchImage.jsを以下のように書き換えてください。

```
const fetchDogImage = () => {
  fetch("https://dog.ceo", {
    mode: 'cors'
  }).then(
    res => {
      res.json().then(
        data =>{
          console.log(data)
          const dog = document.querySelector('#dog');
          const dogImageUrl = data.message
          dog.src = dogImageUrl
        })
//変更点ここから
  }).catch(error => {
    //ここに処理を書く
 })
//変更点ここまで

```


- どのような種類のエラーが出たかを表示することは、後でエラーの原因を検証する際に役に立ちます。
- エラーの内容をコンソールに表示させてください。
- 注意：`console.log()`でなく`console.error()`を使ってください。
    - 後で見たときにエラーと分かりやすくなります。



## 応用編2（ファイル操作）

### 目的
- ローカルファイルのアップロードやダウンロードは業務向けシステムではよく使われるため、雰囲気をつかんでおきます
- JavaScriptで疑似的にファイルアップロード処理を再現します（実際にはDBが必要です）

### 準備

FileUpload.jsとFileUpload.htmlを新規作成し、それぞれ下記のコードを貼り付けてください。

FileUpload.jsに以下を追加してください

```
function readFile(input) {
  let file = input.files[0];
}
```


FileUpload.htmlに以下を追加してください

```
  <input type="file" onchange="readFile(this)">
```


### 練習1（ファイル情報の読込）

1. fileオブジェクトの中身をコンソールに表示させて、どのような情報が入っているか確認してください。（`console.log(file)`）
2. fileオブジェクトの以下の情報を取り出して、HTML内に表示させてください。
    - ファイル名
    - サイズ
    - 最終更新日時



### 練習2（ファイルデータの読み込み）

FileUpload.jsを下記のように変更してください。

```
function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();
  
  reader.onload = function() {
    //ここに処理を書く
  };  
  reader.onerror = function() {
    console.log(reader.error);
  };
  
  reader.readAsDataURL(file);
}
```






### 演習1（アップロードした画像を表示）
- ローカルPCに保存した任意の画像ファイルを読み込んでサムネイルを表示させてください。
- 実装の方針
    - imgタグのsrcの中に、`reader`オブジェクトの`result`プロパティを指定してください。（JSONの項目を参照）
    - cssを使って表示される画像の大きさを制限してください（横500px）
        - imgタグ内に直接指定は×
    - HTMLの中にimgタグがないため、Javascriptからimgタグを生成してください。
        - innerHTMLにタグを記述すると、描画された際にHTML要素として生成されます。
        - 例：`textArea.innerHTML = "<p>text</p>" `


### 演習2
- 画像をクリックすると削除できるようにしてください。
- 実装の方針
    - `deleteImage`関数を作り、画像がクリックされると呼び出されるようにしてください。
    - 下記の方法で実装してください。
        1. innerHTMLで描画されるimgタグに`onclick`プロパティをつける
        2. `window.confirm`を使って、削除するかどうかを確認するようにしてください。
        - 参考：https://developer.mozilla.org/ja/docs/Web/API/Window/confirm

### 演習3
- 下記のコードを参考にして、複数ファイルアップロードができるようにしてください。



```
  const files = input.files;

  Array.from(files).forEach(element => {
    let reader = new FileReader(); 
    reader.readAsDataURL(element);

    reader.onload = function(e) {
    // ここに処理を書く
    }  
    reader.onerror = function() {
      console.log(reader.error);
    };
  })
```




- ヒント
    - HTML側は、以下のようにしてください。
        - `<input type="file" onchange="readFile(this)" mutilple>`
    - `input.files`はFileListです。FileListは配列ではないため、`Array.from()`で配列に変換しています。
    - 変換し他配列に対して`forEach`を使って`files`の中身をすべて取り出しています。
    - 仮引数`element`はFileListの中の一つ一つの要素を表しています。

        - 参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    - 取り出した中身を順番にHTMLとして生成して表示してみましょう。
        - `innerHTML`ではなく`appendChild()`を使ってください
        - 参考：https://techacademy.jp/magazine/20820



### 以上
