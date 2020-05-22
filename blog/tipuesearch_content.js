var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"./pages/about/"},{"title":"2020 wcmj w12","text":"Author: yen","tags":"Misc","url":"./2020-MAY-w12.2 Windows.html"},{"title":"2018 Fall CP 課程 摘要","text":"Author: yen","tags":"Misc","url":"./2018-Fall-32-bit-Windows summery.html"},{"title":"2020 wcmj 課程","text":"Author: yen step 1 登入 gm 帳號後, 下載 https://drive.google.com/open?id=1SvMKQFViJ0mskt20UhSqkjzckB3noSJH 至 downloads 目錄, 然後以 7zip 解開到 C:\\wcmj2020 目錄下 step 2 解開後的目錄為 c:\\wcmj2020\\wcm2020, 其中有 start.bat 與 stop.bat, 開啟可攜系統時, 以滑鼠點擊 start.bat, 關閉可攜系統時, 以滑鼠點擊 stop.bat step 3 登入以個人學號所建立的 github 帳號, 然後建立 wcmj2020 倉儲. step 4 將遠端的 wcmj2020 以 git clone 取下. git clone https://github.com/學號/wcmj2020.git step 5 git submodule add https://github.com/mdecourse/cmsimde cmsimde step 6 進入 cmsimde 以 python wsgi.py 啟動動態系統 以瀏覽器 https://localhost:9443 可以利用 admin 為帳號登入管理 step 7 動態系統維護後, 利用 generate_pages 轉為靜態. step8 git config --global user.email your_gmail git config --global user.name your_student_no git config --global http.proxy http://[2001:288:6004:17::53]:3128 git add . git commit -m \"commit message\" git push 輸入帳號密碼???","tags":"Misc","url":"./2020-MAY-w1 Windows.html"},{"title":"2018 Fall CP 課程","text":"2018 Fall 一開始, 在一台已經 10 年的 32 位元的 Windows 7 操作系統中工作. 可攜的 Python 3.7.0 仍然可以配置, Leo Editor、PyQt5、flask、Markdown、pelican 與 bs4 的安裝, 也都沒有問題. 只有 Eric6 因為缺少必要模組與 Python 3.7.0 對應的 pyqt5-tools, 因此沒有安裝. 電腦規格 目前系上已經沒有 32 位元 Windows 操作系統的電腦, 所以先前只要有學生提到所使用的電腦是舊型 32 位元的 Windows XP 或 Windows 7, 都無法提供相應的可攜程式系統. 但是, 當您桌上就只一台早期 Sony 推出的 VGC-LM26T 電腦, 採用 Intel core 2 Duo T8100 2.1 GHz 裝載 32 位元 Windows 7, 記憶體只有 2GB 的老舊電腦. 夠用嗎? 當然可以, 使用的是特別製作的 32 位元可攜系統 , 除了不支援 Eric6 之外, 其餘功能都與 64 位元的 p37 相同. 工作流程 從 2018 Fall 開始, 前半學期希望每位計算機程課程的學員, 都能透過 2018 計算機程式教材 內容, 深入學習 Python 3 各種程式語法, 利用 CMSimfly 、 Pelican 與 Reveal.js , 熟悉如何在 Github 配置自己的網站、網誌與網際簡報系統. 使用時, 啟動隨身系統的 start.bat, 利用命令列指令, git clone https://github.com/mdecourse/2018fall, 然後將內容配置在各自的 Github 帳號下. 程式專案 早在 1999 年, 就已經開始進行所謂 網際機械設計資源中心 的構建, 想像中的資源中心是一套網際專家系統, 包含各式機械設計流程中所需的模組, 全部依附在一個相對穩定, 可以持續改進的核心架構下, 類似 docassemble 的一套系統. 將近二十年過去, 網際機械設計資源中心 始終仍只有片段系統, 其中包含 CMSimfly 、 Pygrouf 與 Pyslvs ( Pyslvs 手冊 )等相關專案. 就如同 如何寫出有用的程式? 一文中所述, \"沒有興趣不要來念資工\" 是一句非常貼切的警語, 當學生對於程式設計提不起興趣, 沒有將所學的各式語法、資料結構與演算法, 套用在自己非常有興趣的領域中, 用來解決各式問題的話, 日復一日, 我們還是寫不出任何有用的程式! 早該起頭的重要工作 計算機程式的重要性 其實已經無需爭辯, 人類未來的許多工作都是透過網路與數位運算達成, 既知趨勢如此, 每一位工程師就該越早起頭原本就該進行的重要工作, 透過計算機程式來解決問題, 構築一個值得長期投注心力的程式專案.","tags":"Misc","url":"./2018-Fall-32-bit-Windows.html"}]};