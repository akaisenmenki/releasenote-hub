Release Note Hub Manual
=======================

概要
----

Release Note Hubは、Google Sheetsで管理しているリリース情報を、
Google Apps Script（GAS）を介してWeb上に表示する個人学習用プロジェクトです。

構成
----

本プロジェクトは次の要素で構成されています。

* **Google Sheets**: リリース日、タイトル、カテゴリ、概要、詳細、公開状態を管理します。
* **Google Apps Script**: 公開対象のデータをJSON形式で返します。
* **HTML / CSS / JavaScript**: JSONを取得し、リリース情報を画面に表示します。
* **GitHub**: ソースコードと変更履歴を管理します。
* **Ubuntu Linux / nginx**: 静的なWebページを配信します。

公開フロー
----------

#. Google Sheetsにリリース情報を追加します。
#. ``Status`` を ``Published`` に設定します。
#. GASが公開対象の行をJSON形式で返します。
#. WebページがJSONを取得し、リリース情報を表示します。

ローカルでの確認
----------------

``index.html`` を任意のHTTPサーバーから配信し、ブラウザで開きます。
ローカルファイルとして直接開いた場合、ブラウザのセキュリティ制約により
GASへのリクエストが失敗することがあります。

Sphinxドキュメントのビルド
--------------------------

リポジトリのルートで次を実行します。

.. code-block:: console

   python -m pip install -r docs/requirements.txt
   sphinx-build -b html docs docs/_build/html

ビルド後、``docs/_build/html/index.html`` をブラウザで確認します。

トラブルシューティング
----------------------

リリース情報が表示されない
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

次の項目を確認します。

* Google Sheetsの ``Status`` が ``Published`` になっているか
* GASのWebアプリが意図したアクセス範囲で公開されているか
* Webページに設定したGASのURLが正しいか
* ブラウザの開発者ツールに通信エラーが表示されていないか

nginxからページを閲覧できない
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

次の項目を確認します。

* nginxが起動しているか
* 公開ディレクトリに最新の ``index.html`` が配置されているか
* サーバーのIPアドレスとポートが正しいか

セキュリティ上の注意
--------------------

* Google Sheetsに個人情報や機密情報を保存しないでください。
* GASが返す項目を必要最小限にしてください。
* 公開前に、未公開の行がレスポンスへ含まれていないことを確認してください。
