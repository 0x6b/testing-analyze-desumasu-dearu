const { analyze, isDesumasu } = require("analyze-desumasu-dearu");
const texts = ["iOSに対応だ。", "iOSに対応です。", "iOSに対応します。"];

texts.forEach(text => {
  analyze(text).then(results => {
    console.log(text);
    console.dir(results.filter(isDesumasu));
  });
});
