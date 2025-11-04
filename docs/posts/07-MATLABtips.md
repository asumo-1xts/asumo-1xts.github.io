---
layout: doc

emoji: 🧮
title: MATLAB小技集
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2025-10-22
permalink: "https://asumoranda.com/posts/07-MATLABtips.html"

prev: false
next: false

tags:
  - matlab

hidden: true
---

[MATLAB](../tags/matlab)

# MATLAB小技集

## はじめに

MATLABのちょっとした所作をすぐ忘れるので、思い出し次第ここに書き連ねます。

## 日付の生成

[`datestr()`](https://jp.mathworks.com/help/matlab/ref/datetime.datestr.html)が非推奨なので、[`datetime()`](https://jp.mathworks.com/help/matlab/ref/datetime.html)を使う。

```matlab
date        = datetime('now');
date.Format = 'MMdd-HHmm';      % フォーマットは適宜変更
dateStr     = string(date);
```

## プロット関連

### x軸（あるいはx軸に平行な線）を描く

```matlab
yline(0, 'k-', 'LineWidth', 1.5);
```

もちろん、y軸を描く場合は`xline()`を使う。

### 既定のカラーパレットを呼び出す

二次元プロットの`Color`を何も指定しないと独特の青、橙、黄、…みたいな色になるが、これらの色を恣意的に呼び出す。

```matlab
RGB = orderedcolors("gem");
H = rgb2hex(RGB);

% 例: H(1) = "#1171BE"
```

## Simulink関連

### 再生と録音の同時進行

コードだけで実装すると少し複雑なので、Simulinkモデルを用意してコードから実行する。

<ImageGroup
  :sources="[
    '/images/2025/07-01.webp',
  ]"
  type="big"
  caption="録音先の音声ファイル名はコード側から上書きされるので、モデル側では適当で良い。"
/>

```matlab
playFile = "play.wav";  % 再生元の音声ファイル名
recFile = "rec.wav";    % 録音先の音声ファイル名

model = 'play_and_rec'; % Simulinkモデルの指定
load_system(model);     % Simulinkモデルを読み込み
playPath = [model, '/playFile'];    % 再生ブロックへのパス
recPath = [model, '/recFile'];      % 録音ブロックへのパス
set_param(playPath, 'inputFilename', playFile);         % ファイル名を設定
set_param(recPath, 'outputFilename', recFile);          % ファイル名を設定
simOut = sim(model, 'ReturnWorkspaceOutputs', 'on');    % 実行

close_system(model, 0); % Simulinkモデルを閉じる
```

<br/>

---
