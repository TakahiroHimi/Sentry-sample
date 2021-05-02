# Sentry 導入

## 設定

- ReactErrorBoundary
  無し

- リリースバージョン
  設定する
  詳しくは[こちら](https://docs.sentry.io/product/releases/)

- ソースマップのアップロード
  設定する
  デフォルトでされてる？確認
  https://docs.sentry.io/platforms/javascript/guides/react/sourcemaps/

- パフォーマンスの監視
  設定する
  要調査

## Basic Options

init()時に指定するオプション

### Common Options

- dsn
  環境変数`SENTRY_DSN`で設定する　 → 　ブラウザなので対応不可
  .env ファイルに`REACT_APP_SENTRY_DSN`を追加して読み込むように変更

- debug
  `true`にしたらどう挙動が変わるのか確認

- release
  環境変数`SENTRY_RELEASE`で設定する　 → 　ブラウザなので対応不可
  詳しくは[こちら](https://docs.sentry.io/product/releases/)

- environment
  環境変数`SENTRY_ENVIRONMENT`で設定する　 → 　ブラウザなので対応不可
  .env ファイルに`REACT_APP_SENTRY_ENVIRONMENT`を追加して読み込むように変更

- sampleRate
  デフォルトで(100%)で良いのでは

- maxBreadcrumbs
  デフォルト(100)で良さそうだけどパンクズリストが記録されるっていうのがよくわかってないので要検討

- attachStacktrace
  デフォルト(off)で良さそうだけどメッセージとかグループがよくわかってないので要検討

- sendDefaultPii
  デフォルト(off)で良さそう…？on にするとどういうデータが送られるのかよくわかってないので要検討

- denyUrls
  設定無しで OK

- allowUrls
  設定無しで OK?HTBVideos のドメインを追加すべきか

- autoSessionTracking
  true にした方が良さそう

- normalizeDepth
  デフォルト（３）で良さそう？

### Integration Configuration

- integrations
- defaultIntegrations
  要調査

### Hooks

- beforeSend
  イベント送信前に実行される関数？
  必要無さそう

- beforeBreadcrumb
  パンクズリストをカスタマイズするための関数？
  必要無さそう

### Transport Options

- transport
  設定無しで OK

### Tracing Options

- tracesSampleRate
  1 を設定で OK?

## Releases & Health

Release の設定は以下で良い？

```js
Sentry.init({
  release: "my-project-name@" + process.env.npm_package_version,
});
```
