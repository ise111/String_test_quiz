let string_quiz = [
    {
      question: '文字列内の個々の文字を取得したい場合に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数に(1)を入れた場合): e',
      answers: ['charAt()'],
      correct: 'charAt()'
    },{
      question: '指定された位置のUTF-16コードの値を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "👍"',
      result: '出力結果(引数に(0),(1)を入れた場合): "5535", "56397"',
      answers: ['charCodeAt()'],
      correct: 'charCodeAt()'
    },{
      question: '指定された位置のUnicodeコードポイント値を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "👍"',
      result: '出力結果(引数に(0)を入れた場合): "128077"',
      answers: ['codePointAt()'],
      correct: 'codePointAt()'
    },{
      question: '複数の文字列を結合したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method", "Quiz"',
      result: '出力結果: "MethodQuiz"',
      answers: ['concat()'],
      correct: 'concat()'
    },{
      question: '文字列が指定された文字列で終わるか確認したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数に("od")を入れた場合): true, 出力結果(引数に("od", 3)を入れた場合): false',
      answers: ['endsWith()'],
      correct: 'endsWith()'
    },{
      question: '文字列が指定された文字列で始まるか確認したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数に("Me")を入れた場合): true, 出力結果(引数に("me")を入れた場合): false',
      answers: ['startsWith()'],
      correct: 'startsWith()'
    },{
      question: '文字列内に指定された文字列が含まれているか確認したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method_Quiz"',
      result: '出力結果(引数に("eth")を入れた場合): true, 出力結果(引数に("the")を入れた場合): false',
      answers: ['includes()'],
      correct: 'includes()'
    },{
      question: '文字列内に指定された文字列を検索し、最初の見つけた位置を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method_Quiz"',
      result: '出力結果(引数に("eth")を入れた場合): 1, 出力結果(引数に("the")を入れた場合): -1',
      answers: ['indexOf()'],
      correct: 'indexOf()'
    },{
      question: '文字列がソート順で引数の文字列より先にくるか後にくるかもしくは等しいか比較したい際に使用するのは次のうちどれ？',
      before: '文字列: str1 = "METHOD_QUIZ", str2 = "method_quiz"',
      result: '出力結果(参照文字列をstr1, 引数をstr2とした場合): 1',
      answers: ['localeCompare()'],
      correct: 'localeCompare()'
    },{
      question: '文字列が正規表現に対してマッチするか確認したい際に使用するのは次のうちどれ？',
      before: '文字列: str1 = "999-9999", str2 = "abc-defg"',
      result: '出力結果(参照文字列をstr1, 引数を(/^\d{3}-\d{4}$/)とした場合): ["999-9999", index: 0, input"999-9999", group: undefined], 出力結果(参照文字列をstr2, 引数を(/^\d{3}-\d{4}$/)とした場合): null',
      answers: ['match()'],
      correct: 'match()'
    },{
      question: 'キャプチャグループを含む正規表現に一致する文字列全てをイテレーターで返したい際に使用するのは次のうちどれ？',
      before: '文字列: "<h1>"',
      result: '出力結果1(引数を(/<(.*?)>/gi)とした場合): RegExpStringIterator{}, 出力結果2(出力結果1を配列化した場合): [0: "<h1>", 1:"h1", group: undefined, index: 0, input: "<h1>", length: 2]',
      answers: ['matchAll()'],
      correct: 'matchAll()'
    },{
      question: '文字列をUnicode正規化形式で返したい際に使用するのは次のうちどれ？',
      before: '文字列: "ﾒｿｯﾄﾞ"',
      result: '出力結果(引数として"NFKC"を入れた場合): "メソッド"',
      answers: ['normalize()'],
      correct: 'normalize()'
    },{
      question: '結果の文字列が指定した長さになるまで他の文字列で延長したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数として(15, "Quiz")を入れた場合): "MethodQuizQuizQ"',
      answers: ['padEnd()'],
      correct: 'padEnd()'
    },{
      question: '結果の文字列が指定した長さになるまで他の文字列で延長したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数として(15, "method")を入れた場合): "QuizQuizQMethod"',
      answers: ['padStart()'],
      correct: 'padStart()'
    },{
      question: '文字列を指定した回数だけ繰り返した文字列を作成したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method"',
      result: '出力結果(引数として(2)を入れた場合): "MethodMethod"',
      answers: ['repeat()'],
      correct: 'repeat()'
    },{
      question: '文字列内の指定した文字列を別の文字列に置き換えたい際に使用するのは次のうちどれ？',
      before: '文字列: "Method_Quiz"',
      result: '出力結果(引数として("Method, "Quiz")を入れた場合): "QuizQuiz"',
      answers: ['replace()'],
      correct: 'replace()'
    },{
      question: '文字列内に指定した正規表現があるかと最初に見つかった位置を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method_Quiz"',
      result: '出力結果(引数として(/[A-Z]/g)を入れた場合): 0',
      answers: ['search()'],
      correct: 'search()'
    },{
      question: '文字列から指定した部分(指定方法は引数(始まりの位置、終わりの位置))を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method_Quiz"',
      result: '出力結果(引数として(7, 10)を入れた場合): "Qui", 出力結果(引数として(10, 7)を入れた場合): ""',
      answers: ['slice()'],
      correct: 'slice()'
    },{
      question: '文字列を指定した区切り文字列で分割し配列にしたい際に使用するのは次のうちどれ？',
      before: '文字列: "Method Quiz"',
      result: "出力結果(引数として(' ')を入れた場合): ['Method', 'Quiz'] ",
      answers: ['split()'],
      correct: 'split()'
    },{
      question: '文字列から指定した部分(指定方法は引数(始まりの位置、文字数))を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method Quiz"',
      result: '出力結果(引数として(7, 3)を入れた場合): "Qui" ',
      answers: ['substr()'],
      correct: 'substr()'
    },{
      question: '文字列から指定した部分(指定方法は引数(始まりの位置、終わりの位置))を取得したい際に使用するのは次のうちどれ？',
      before: '文字列: "Method Quiz"',
      result: '出力結果(引数として(7, 10)を入れた場合): "Qui", 出力結果(引数として(10, 7)を入れた場合): "Qui"',
      answers: ['substring()'],
      correct: 'substring()'
    },{
      question: '文字列を小文字に変換したい際に使用するのは次のうちどれ？',
      before: '文字列: "METHOD_QUIZ"',
      result: '出力結果: "method_quiz"',
      answers: ['toLowerCase()'],
      correct: 'toLowerCase()'
    },{
      question: '文字列を大文字に変換したい際に使用するのは次のうちどれ？',
      before: '文字列: "method_quiz"',
      result: '出力結果: "METHOD_QUIZ"',
      answers: ['toUpperCase()'],
      correct: 'toUpperCase()'
    },{
      question: '文字列両端の空白を削除したい際に使用するのは次のうちどれ？',
      before: '文字列: "     Method_Quiz     "',
      result: '出力結果: "Method_Quiz"',
      answers: ['trim()'],
      correct: 'trim()'
    },{
      question: '文字列末尾側の空白を削除したい際に使用するのは次のうちどれ？',
      before: '文字列: "     Method_Quiz     "',
      result: '出力結果: "     Method_Quiz"',
      answers: ['trimEnd()'],
      correct: 'trimEnd()'
    },{
      question: '文字列先頭側の空白を削除したい際に使用するのは次のうちどれ？',
      before: '文字列: "     Method_Quiz     "',
      result: '出力結果: "Method_Quiz     "',
      answers: ['trimStart()'],
      correct: 'trimStart()'
    },{
      question: '文字列先頭側の空白を削除したい際に使用するのは次のうちどれ？',
      before: '文字列: "     Method_Quiz     "',
      result: '出力結果: "Method_Quiz     "',
      answers: ['trimStart()'],
      correct: 'trimStart()'
    }
];