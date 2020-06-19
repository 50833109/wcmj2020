var tipuesearch = {"pages": [{'title': 'w1-w2', 'text': '建立一個bloger\xa0 https://www.blogger.com/blogger.g?blogID=2375246514797626273#allposts/src=sidebar 建立一個github\xa0 https://github.com/ 50833109   1 super computer 超級電腦 2 mainframe 伺服器主機 3 server 伺服器 虛擬 實體 4 pc 個人電腦 5 microcontroller 微控制器 6 mobile phone 手機 Port 戶號 Nat\xa0 DHCP動態網路位置 \n \n', 'tags': '', 'url': 'w1-w2.html'}, {'title': 'w6-7', 'text': '', 'tags': '', 'url': 'w6-7.html'}, {'title': '利用手機鏡頭當作 webcam', 'text': 'Android: \xa0 https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \xa0 iPhone: \xa0 https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \xa0 \n', 'tags': '', 'url': '利用手機鏡頭當作 webcam.html'}, {'title': '讓手機可以利用電腦熱點上網', 'text': '採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n', 'tags': '', 'url': '讓手機可以利用電腦熱點上網.html'}, {'title': '需要 clone 個人倉儲時', 'text': 'git clone --recurse-submodules 倉儲_url.git \n 例如:\xa0git clone --recurse-submodules \xa0 https://github.com/mdecourse/wcmj2020.git \n', 'tags': '', 'url': '需要 clone 個人倉儲時.html'}, {'title': '現場直播的 audio 錄音設定', 'text': '在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n \n 下載可攜程式系統 \n \n', 'tags': '', 'url': '現場直播的 audio 錄音設定.html'}, {'title': '利用 git 指令建立 cmsimde 網站', 'text': '\n', 'tags': '', 'url': '利用 git 指令建立 cmsimde 網站.html'}, {'title': 'w8-9', 'text': 'w8   meeting\xa0 \xa0 \xa0 https://meet.google.com/zen-ewrh-zfy \xa0第四組 \xa0 2001:288:6004:17::53 2001:288:6004:17::42 2001:288:6004:17::17 2001:288:6004:17::4 "虛擬主機 不耐操 可以校外連接"   可能線上上課 組員: \xa0 50833102 組長   50833103   50833105   50833109   50833121   50833124   50833135   50833136   50833137   50833139\xa0 group  4   \n \n w9 \n wcmj2020 W9 第一段影片 \n wcmj2020 W9 第二段影片 \n', 'tags': '', 'url': 'w8-9.html'}, {'title': '網路架構與設定簡介', 'text': '在正式進入主題之前，先來了解為何網路使用分層結構，而非從頭到腳一手全包的設計。由於網路需考量許多實際應用上的困難，如傳輸不同種類的資訊、不同版本以及作業系統的交流需求，甚至牽扯到更廣大的範圍，如遠距微波傳送、跨洲海底電纜等不同傳輸媒介。如果要設計能夠包山包海、全部通吃的網路架構是件吃力不討好的事，況且也無法預測未來會出現什麼需求，於是需要個具有彈性的網路架構，還要能夠兼顧未來發展 \n \n 實體層 (Physical Layer) \n \n 訂定電腦連接的電氣特定協定 \n 功能 :1.讓資料可經由傳輸媒介\xa0\xa0 2.兩個實際相連的機器間傳送的 \n 例子 :實體層介面有EIA RE-232、RS-449等，而常見區域網路則有乙太網路、記號環、分散式光纖數據介面、CCITT X.25分封網路、整體服務數位網路、同步光學網路等。 \n \n', 'tags': '', 'url': '網路架構與設定簡介.html'}, {'title': '資料鏈結層 (Data-Link Layer)', 'text': '\n 訊框 (frame) 與實體位置 (MAC) \n 分為兩個子層： \n (一)邏輯連結控制(Logical Link Control, 簡稱LLC)：訊框遞送、錯誤通知、資料流控制 \n (二)媒介存取控制(Media Access Control, 簡稱MAC)：定義傳輸媒體存取的方式，如CSMA/CD、Token Ring等 \n 例子 ：Physical Address、 OSI規定網路上各乙太網路、記號環網路、橋接器等都是在此層運作的。 \n \n', 'tags': '', 'url': '資料鏈結層 (Data-Link Layer).html'}, {'title': '網路層 (Network Layer)', 'text': '\n 邏輯定址 \n 資料封包 (packet) 的傳輸路徑(Routing)選擇 \n 功能：1.決定移動資料的最佳方式(RIP、EIGRP、OSPF) 2.資料遶送 3.錯誤控制(少用) \n 例子：IP、IPX、路由器 \n \n 傳輸層 (Transport Layer) \n \n 提供可靠或不可靠的遞送 \n 重傳之前先校正錯誤 \n 功能 ：封包順序、資料流量控制、偵測重複的封包、緊急資料的傳送、複雜的錯誤與回復處理、以及安全方面的課題。 \n 例子 ：TCP 、 UDP \n \n   交談層 (Session Layer) \xa0\xa0 \xa0 \n \n 負責建立、管理、以及終止兩個通訊主機的對話 \n 功能 ：使不同應用程式的資料與其他應用程式的資料分開 \n 例子 ：SQL 、 RPC \xa0 \n \n', 'tags': '', 'url': '網路層 (Network Layer).html'}, {'title': '表現層 (Presentation Layer', 'text': '\n 處理不同資料格式之間的字碼轉換及編碼及解碼 \n 功能：字元碼轉換\xa0 資料形態轉換\xa0 對資料進行壓縮和加密﹐以提高速度和增加安全性 \n 例子：ASCII 碼和 EDCDIC 碼之間的轉換 \n \n', 'tags': '', 'url': '表現層 (Presentation Layer.html'}, {'title': '應用層 (Application Layer)', 'text': '\n 提供使用者介面 \n 功能：檔案、印表、訊息、資料庫、應用服務 \n 例子：HTTP 、 Telnet 、 SMTP 、 POP3 、 FTP 、 SNMP \n \n', 'tags': '', 'url': '應用層 (Application Layer).html'}, {'title': '電腦軟硬體簡介', 'text': '', 'tags': '', 'url': '電腦軟硬體簡介.html'}, {'title': '機殼：容納和保護主機營體的主機殼', 'text': '', 'tags': '', 'url': '機殼：容納和保護主機營體的主機殼.html'}, {'title': '電源(Power)：是提供內接式元件電力來源的組件，他將市電轉換為直流電供給其他元件使用', 'text': '', 'tags': '', 'url': '電源(Power)：是提供內接式元件電力來源的組件，他將市電轉換為直流電供給其他元件使用.html'}, {'title': '顯示卡(VGA )：顯示卡在電腦中主要作用就是程式運行時根據CPU提共的指令和有關數據', 'text': '', 'tags': '', 'url': '顯示卡(VGA )：顯示卡在電腦中主要作用就是程式運行時根據CPU提共的指令和有關數據.html'}, {'title': '網路卡：網路卡是電腦與纜線的介面，有依各專門處裡網路介面的處裡器，會依照記憶體內程式動作。', 'text': '', 'tags': '', 'url': '網路卡：網路卡是電腦與纜線的介面，有依各專門處裡網路介面的處裡器，會依照記憶體內程式動作。.html'}, {'title': '硬碟：硬碟就是電腦中負責儲存資料的工具，它就像是一各資料庫依樣，電腦中的大小資料均可以在此找到', 'text': '', 'tags': '', 'url': '硬碟：硬碟就是電腦中負責儲存資料的工具，它就像是一各資料庫依樣，電腦中的大小資料均可以在此找到.html'}, {'title': '軟碟機：軟碟機又叫磁碟機，是一種儲存資料的工具，當拰要儲存檔案大小在1.44MB以下的資料時，磁碟片畢竟是一項蠻方便操作且攜帶的設備，所以軟碟機也可稱為磁片機。', 'text': '', 'tags': '', 'url': '軟碟機：軟碟機又叫磁碟機，是一種儲存資料的工具，當拰要儲存檔案大小在1.44MB以下的資料時，磁碟片畢竟是一項蠻方便操作且攜帶的設備，所以軟碟機也可稱為磁片機。.html'}, {'title': 'w10', 'text': 'ssh===secure share putty 權限軟體 prtvate key public key ssh-keygen -t rsa -b 4096 -C "50833109" pwd=== print working directory \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12-13', 'text': "基本概念: \n 1. 這裡所指的 Blogger API 為: \xa0 https://developers.google.com/blogger/docs/3.0/using \n 2. 將 CMSiMDE 中的 Pelican Blog 內容同步到 Google Blogger 的目的, 在讓網際內容管理系統中的網誌原始資料修改過程具備版次, 而且可同時將網誌出版在 Github Pages 與 Google Blogger 中, 讓網際內容的保存較具有永續性. \n 3. Google Blogger 中的網誌系統各有獨立 ID, 這裡稱為 blog_id, 而網誌中的每一篇文章各有獨立 ID, 這裡稱為 post_id. \n 4. Google Blogger 管理者登入後, 在 Settings - Permissions 項下, 允許 invite more authors, 而且在 Settings - Permissions - Blog admins and Authors 項下, 允許將所邀請共同寫作的 Author 提升為 Admin 管理者. \n 5. Google 的每一個 API 都允許使用者建立以 Oauth2 為基礎的登入使用授權憑證, 配合所啟動的各種 API 程式庫, 一旦啟用並登入後, 可以透過程式方法, 呼叫程式庫功能, 對各種 Google 所提供的服務 (Blogger, Drive, Gmail, Calendar 等) 新增內容. 以 Blogger 而言, 只要使用者被設為某一網誌的共同作者, 即擁有在該網誌新增或編輯自己所發布的網誌文章權限. \n 6. 使用者登入 Google 帳號後, 在 \xa0 https://console.developers.google.com \xa0 中所建立的 Oauth2 client ID, 可以下載存為 client_secrets.json 檔案. \n 7. client_secrets.json 檔案則可以透過下列程式, 轉換為 credential_token.dat, 使用者針對特定啟用的 API 程式庫, 可以在讀取 credential_token.dat 的情況下, 取得與登入 Gmail 帳號相同的使用授權, 直接在擁有權限的 blog_id 中新增特定的文章 (並以特定的 post_id 辨識). \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language   python \n # https://developers.google.com/blogger/docs/3.0/using \n # under Mac command + b to execute \n import   pickle \n import   os \n from   googleapiclient.discovery  import   build \n from   google_auth_oauthlib.flow  import   InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES  =   [ 'https://www.googleapis.com/auth/blogger' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if   not   os.path.exists( './../../yen_gm_blogger_token.dat' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow  =   InstalledAppFlow.from_client_secrets_file( './../../yen_gm_blogger_secrets.json' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials  =   flow.run_local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with  open ( './../../yen_gm_blogger_token.dat' ,  'wb' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump(credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with  open ( './../../yen_gm_blogger_token.dat' ,  'rb' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( 'blogger' ,  'v3' , credentials = credentials) \n g.es(service) \n \n \n \n \n \n", 'tags': '', 'url': 'w12-13.html'}, {'title': '以 SSH 維護倉儲', 'text': '由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從\xa0 https://www.chiark.greenend.org.uk/~sgtatham/putty/ \xa0 下載一般版, 或從 \xa0 http://jakub.kotrla.net/putty/ \xa0 下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n W10 以 ssh 對倉儲連線設定說明影片 \xa0(登入 @gm 帳號後觀看) \n', 'tags': '', 'url': '以 SSH 維護倉儲.html'}]};