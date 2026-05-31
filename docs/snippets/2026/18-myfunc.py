import json
import requests


def extract_tweet_ids(archive_path, target_year):
    """対象期間のツイートIDを抽出"""
    how_many_to_delete = 50  # X-APIが無料プランなら最大50件
    tweet_ids = []
    with open(archive_path, "r", encoding="utf-8") as file:
        data = file.read()
        # `tweets.js`冒頭の文字列を削除してJSON形式に変換
        data = data.replace("window.YTD.tweets.part0 = ", "")
        tweets_data = json.loads(data)

        for tweet_obj in tweets_data:
            tweet = tweet_obj.get("tweet", {})
            created_at_str = tweet.get(
                "created_at"
            )  # 例: "Wed Mar 04 21:01:21 +0000 2015"
            tweet_id = tweet.get("id_str")

            if created_at_str and tweet_id:
                # Xアーカイブのcreated_atの末尾4桁から年を取得
                year = int(created_at_str[-4:])

                # 対象期間のツイートIDをリストに追加
                if year == target_year:
                    tweet_ids.append(tweet_id)
                    if len(tweet_ids) >= how_many_to_delete:
                        break

    return tweet_ids


def delete_tweets(tweet_ids, auth):
    """API v2 を使用してツイートを削除"""
    base_url = "https://api.twitter.com/2/tweets/"
    deleted_count = 0

    for tweet_id in tweet_ids:
        url = f"{base_url}{tweet_id}"
        try:
            response = requests.delete(url, auth=auth, timeout=10)

            if response.status_code == 200:
                with open("delete.log", "a", encoding="utf-8") as log_file:
                    log_file.write(f"Deleted tweet ID: {tweet_id}\n")
                deleted_count += 1
            elif response.status_code == 429:
                print(
                    f"Code {response.status_code}: 回数制限または無料枠の上限に達しました"
                )
                break
            elif response.status_code == 402:
                print(f"Code {response.status_code}: X-APIのプランの上限に達しました")
                break
            else:
                print(f"Failed to delete {tweet_id}: {response.status_code}")
                break

        except Exception as e:
            print(f"Error during deletion: {e}")
            break

    return deleted_count
