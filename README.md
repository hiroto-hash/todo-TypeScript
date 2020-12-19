# 環境構築手順

※nodeとyarnをグローバルインストールしておく
windowsの場合はnpxも忘れずに

1. docker Desktopを[インストール](https://www.docker.com/products/docker-desktop)する
2. ./init-sql.sh のパーミッションを変更する
```
$ chmod 0775 ./init-sql.sh
```
3. イメージを作成&コンテナの起動
```
$ docker-compose up --build
```
4. sqlファイルをdumpする
```
./init-sql.sh
```
※初回のみ

### 各コンテナのurl

| APIサーバ       |       MYSQL    |   phpmyadmin   |  swagger               |
|:--------------:|:--------------:|:--------------:|:----------------------:|
| localhost:3000 | localhost:3306 | localhost:8080 | localhost:3000/swagger |

## for windows 10 home
1. docker toolboxを管理者権限でインストール
2. docker toolboxを管理者で起動
※Windowsの場合はVirtualboxの仮想マシンを経由するので
http://192.168.99.100:ポート番号
でアクセス

### dockerコマンド
```
// 停止するとき
// 1.起動しているターミナルでcontrol + c
// 2. コマンドで止める
 docker-compose stop

// 再起動 sever側が変更された場合
$ docker-compose up
// 又は
$ docker-compose restart

// コンテナの停止&削除
$ docker-compose down

// 停止＆削除（コンテナ・ネットワーク・イメージ）
$ docker-compose down --rmi all

// 停止＆削除（コンテナ・ネットワーク・ボリューム）
$ docker-compose down -v

// なんかバグったときimagesを消す
$ docker images -aq | xargs docker rmi
```

### やりたいこと
- [x] sqlと接続確認
- [x] UintTest入れてみる
- [ ] ORM入れるか悩む[typeorm](https://typeorm.io/#/)
- [ ] session管理[Passport.js ](https://qiita.com/tuneyukkie/items/b1bc2a26cfb7c480e56b)
- [ ] CRUD機能
- [ ] Lint入れたい
- [ ] [ホットデプロイしたい](https://note.com/kawa1228/n/nb18e19fbf4cc)
- [x] [swagger入れたい](https://blog.mamansoft.net/2019/08/12/develop-express-with-typescript-cool-environment/#typescript%E5%8C%96)
- [ ] push時にテスト回したい[husky](https://typicode.github.io/husky/#/)
