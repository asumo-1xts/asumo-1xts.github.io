from dotenv import load_dotenv
from requests_oauthlib import OAuth1
import os
import time
import myfunc

# 環境変数の読み込み
load_dotenv()
CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
ACCESS_TOKEN = os.getenv("ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = os.getenv("ACCESS_TOKEN_SECRET")
ARCHIVE_FILE_PATH = os.getenv("archive_file_path")

# OAuth1.0認証
auth = OAuth1(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

# 手動での設定事項
TARGET_YEAR = 2020  # この年のツイートが削除される
ATTEMPTS = 10  # 処理の試行回数
INTERVAL_MIN = 15  # 処理のインターバル（分）


# 実行処理
if __name__ == "__main__":
    for i in range(ATTEMPTS):
        print(f"[試行{i + 1}回目]")
        print(f"アーカイブから{TARGET_YEAR}年のツイートを抽出します...")
        target_ids = myfunc.extract_tweet_ids(ARCHIVE_FILE_PATH, TARGET_YEAR)
        print(f"削除対象のツイートが{len(target_ids)}件見つかりました")

        if target_ids:
            print("削除処理を開始します...")
            count = myfunc.delete_tweets(target_ids, auth)
            print(f"次の試行まで{INTERVAL_MIN}分待機します")

            for j in range(INTERVAL_MIN):
                time.sleep(60)  # 1分待機
                print(".", end="", flush=True)

            print("\n")
            continue
        else:
            print("削除対象のツイートが見つかりませんでした")
            exit(0)
