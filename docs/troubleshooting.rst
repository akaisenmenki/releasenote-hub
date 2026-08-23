Troubleshooting
===============

このページでは、Release Note Hub で発生する可能性がある基本的な問題と確認方法を説明します。

リリース情報が表示されない
--------------------------

次の項目を確認してください。

* Google Sheets の ``Status`` が ``Published`` になっているか
* GAS の Web アプリ URL が正しいか
* Web ページから GAS にアクセスできるか
* 対象データが Google Sheets に存在するか

Web ページが表示されない
------------------------------------------

nginx が起動しているか確認します。

.. code-block:: bash

   systemctl status nginx

HTML を更新したのに内容が変わらない
-------------------------------------------

最新の ``index.html`` が nginx の公開ディレクトリに配置されているか確認します。

.. code-block:: bash

   sudo cp index.html /var/www/html/index.html

その後、ブラウザを再読み込みして表示を確認します。