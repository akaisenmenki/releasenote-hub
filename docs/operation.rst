Operation
=========

このページでは、リリース情報を公開する基本的な手順を説明します。

リリース情報の公開
------------------

1. Google Sheets にリリース情報を追加します。
2. 各項目を入力します。
3. 公開するデータの ``Status`` を ``Published`` に設定します。
4. GAS が公開対象のデータを JSON 形式で返します。
5. Web ページで公開内容を確認します。

公開対象
--------

``Status`` が ``Published`` の行だけを公開対象とします。

公開前の確認
------------

* Release Date が正しいこと
* Title と Summary が入力されていること
* ``Status`` が ``Published`` になっていること
* Web ページ上で内容が正しく表示されていること

Web サーバーへの反映
--------------------

Ubuntu Server で HTML を更新する場合は、最新ファイルを nginx の公開ディレクトリへ配置します。

.. code-block:: bash

   sudo cp index.html /var/www/html/index.html

nginx の状態は次のコマンドで確認できます。

.. code-block:: bash

   systemctl status nginx