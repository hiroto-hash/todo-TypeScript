# 環境構築手順

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

| APIサーバ       |       MYSQL    |   phpmyadmin   |
|:--------------:|:--------------:|:--------------:|
| localhost:3000 | localhost:3306 | localhost:8080 |


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
- [ ] CRUD機能
- [ ] session管理
- [ ] Lint入れたい
- [ ] [ホットデプロイしたい](https://note.com/kawa1228/n/nb18e19fbf4cc)
- [ ] [swagger入れたい](https://blog.mamansoft.net/2019/08/12/develop-express-with-typescript-cool-environment/#typescript%E5%8C%96)
