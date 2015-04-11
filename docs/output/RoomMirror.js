Ext.data.JsonP.RoomMirror({"tagname":"class","name":"RoomMirror","autodetected":{},"files":[{"filename":"index.js","href":"index.html#RoomMirror"}],"params":[{"tagname":"params","type":"String","name":"qs","doc":"<p>String for querySelector</p>\n","html_type":"String"}],"return":{"type":"CodeMirror","name":"return","doc":"\n","properties":null,"html_type":"CodeMirror"},"members":[{"name":"preset","tagname":"cfg","owner":"RoomMirror","id":"cfg-preset","meta":{}},{"name":"byAnnotations","tagname":"method","owner":"RoomMirror","id":"method-byAnnotations","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-RoomMirror","short_doc":"HTML内の任意の要素にCodeMirrorを使用したシンタックスハイライトを行う\ndata-evalの文字列がevalで評価され、デフォルトの設定とマージされた後CodeMirrorに渡される\n\nhtml\n\n&lt;pre clas...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/index.html#RoomMirror' target='_blank'>index.js</a></div></pre><div class='doc-contents'><p>HTML内の任意の要素に<code>CodeMirror</code>を使用したシンタックスハイライトを行う<br>\n<code>data-eval</code>の文字列がevalで評価され、デフォルトの設定とマージされた後<code>CodeMirror</code>に渡される<br></p>\n\n<p>html</p>\n\n<pre><code>&lt;pre class=\"rm\" data-eval=\"{ mode:'javascript' }\"&gt;&lt;code&gt;\nvar test = 'test';\n&lt;/code&gt;&lt;/pre&gt;\n</code></pre>\n\n<p>javascript</p>\n\n<pre><code>var codeBlocks = RoomMirror('.rm');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>qs</span> : String<div class='sub-desc'><p>String for querySelector</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CodeMirror</span><div class='sub-desc'>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-preset' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RoomMirror'>RoomMirror</span><br/><a href='source/index.html#RoomMirror-cfg-preset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RoomMirror-cfg-preset' class='name expandable'>preset</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>コードブロックの共通の設定を指定する\nデフォルトの設定とマージされた後CodeMirrorに渡される\n\nRoomMirror.preset = {\n    mode : 'javascript',\n    theme: 'monoka...</div><div class='long'><p>コードブロックの共通の設定を指定する<br>\nデフォルトの設定とマージされた後<code>CodeMirror</code>に渡される<br></p>\n\n<pre><code><a href=\"#!/api/RoomMirror-cfg-preset\" rel=\"RoomMirror-cfg-preset\" class=\"docClass\">RoomMirror.preset</a> = {\n    mode : 'javascript',\n    theme: 'monokai'\n};\n\n// var defaultConfig = {\n//     readOnly      : true,\n//     viewportMargin: Infinity\n// };\n</code></pre>\n\n<p>シンタックスハイライトとして使う場合は言語とカラースキームの指定程度で大丈夫<br>\n下に主なオブションを挙げる。他にも<code>CodeMirror</code>の<a href=\"http://codemirror.net/doc/manual.html#config\"><strong>Configuration</strong></a>を参照</p>\n<p>Defaults to: <code>{}</code></p><ul><li><span class='pre'>readOnly</span> : Boolean (optional)<div class='sub-desc'><p>コードブロックを編集可能にしたい場合は<code>false</code>に指定<br>\n<code>false</code>を指定することでエディタとして使うことも可能</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>viewportMargin</span> : Number (optional)<div class='sub-desc'><p>コードブロックの高さを行数で指定する<br>\nこの値を<code>Infinity</code>に設定し、CSSで<code>.RoomMirror { height: auto; }</code>を指定すると<br>\nコードブロックの内容に応じて行数が調整される<br>\nデフォルトではこの設定になっている</p>\n<p>Defaults to: <code>Infinity</code></p></div></li><li><span class='pre'>tabSize</span> : Integer (optional)<div class='sub-desc'><p>タブのサイズを指定する</p>\n<p>Defaults to: <code>4</code></p></div></li><li><span class='pre'>lineWrapping</span> : Boolean (optional)<div class='sub-desc'><p>一行が長い時、はみ出た部分のコードを折り返すかどうかを指定する<br>\nデフォルトでは<code>false</code>に指定されており、はみ出た部分はスクロールで表示する</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>lineNumbers</span> : Boolean (optional)<div class='sub-desc'><p>左側に行番号を表示するかどうかを指定する</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>firstLineNumber</span> : Integer (optional)<div class='sub-desc'><p><code>lineNumbers</code>を<code>true</code>に設定した時、行番号がいくつから始まるかを指定する<br>\nデフォルトでは<code>1</code>になっている</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>lineNumberFormatter</span> : Function: (Integer) -&gt; String (optional)<div class='sub-desc'><p><code>lineNumbers</code>を<code>true</code>に設定した時、行番号の表示フォーマットを指定する<br>\n行番号を表す整数を受け取り、整形した文字列を返す関数を指定する</p>\n</div></li><li><span class='pre'>fixedGutter</span> : Boolean (optional)<div class='sub-desc'><p><code>lineNumbers</code>、<code>lineWrapping</code>が<code>true</code>に設定され、水平スクロールが発生した時<br>\n行番号がスクロールに追従するかどうかを指定する<br>\nデフォルトでは<code>true</code>に指定されており、コードブロックの左側に固定して表示される</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-byAnnotations' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RoomMirror'>RoomMirror</span><br/><a href='source/index.html#RoomMirror-method-byAnnotations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RoomMirror-method-byAnnotations' class='name expandable'>byAnnotations</a>( <span class='pre'>qs</span> ) : CodeMirror<span class=\"signature\"></span></div><div class='description'><div class='short'>HTML内の任意の要素をアノテーションとみなして、次に続く要素のシンタックスハイライトを行う\ndata-evalの文字列がevalで評価され、デフォルトの設定とマージされた後CodeMirrorに渡される\nMarkdownのコードブロ...</div><div class='long'><p>HTML内の任意の要素をアノテーションとみなして、次に続く要素のシンタックスハイライトを行う<br>\n<code>data-eval</code>の文字列がevalで評価され、デフォルトの設定とマージされた後<code>CodeMirror</code>に渡される<br>\nMarkdownのコードブロックをシンタックスハイライトする事を想定している<br></p>\n\n<p>html</p>\n\n<pre><code>&lt;p class=\"rm-a\" data-eval=\"{ mode:'javascript' }\"&gt;&lt;/p&gt;\n&lt;div&gt;\nvar test = 'test';\n&lt;/div&gt;\n</code></pre>\n\n<p>javascript</p>\n\n<pre><code>var codeBlocks = <a href=\"#!/api/RoomMirror-method-byAnnotations\" rel=\"RoomMirror-method-byAnnotations\" class=\"docClass\">RoomMirror.byAnnotations</a>('.rm-a');\n</code></pre>\n\n<p><strong>Markdownの場合</strong></p>\n\n<p>markdown</p>\n\n<pre><code>&lt;p class=\"rm-a\" data-eval=\"{ mode:'javascript' }\"&gt;&lt;/p&gt;\n```\nvar code = 'code blocks in markdown.';\n```\n</code></pre>\n\n<p>javascript</p>\n\n<pre><code>var codeBlocks = <a href=\"#!/api/RoomMirror-method-byAnnotations\" rel=\"RoomMirror-method-byAnnotations\" class=\"docClass\">RoomMirror.byAnnotations</a>('.rm-a');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>qs</span> : String<div class='sub-desc'><p>String for querySelector</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CodeMirror</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});