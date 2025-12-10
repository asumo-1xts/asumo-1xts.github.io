# CONTRIBUTING

## aliases for zsh-autoenv

### `.autoenv_enter.zsh`

```shell
# 画像変換

alias png2webp='
    cd docs/public/images && \
    for f in **/*.png; do
        ffmpeg -y -i "$f" "${f%.png}.webp" && rm "$f"
    done
'

alias jpg2webp='
    cd docs/public/images && \
    for f in **/*.jpg; do
        ffmpeg -y -i "$f" "${f%.jpg}.webp" && rm "$f"
    done
'

alias jpeg2webp='
    cd docs/public/images && \
    for f in **/*.jpeg; do
        ffmpeg -y -i "$f" "${f%.jpeg}.webp" && rm "$f"
    done
'
```

### `.autoenv_leave.zsh`

```shell
# 画像変換
unalias png2webp
unalias jpg2webp
unalias jpeg2webp
```
