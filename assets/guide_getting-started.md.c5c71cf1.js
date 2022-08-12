import{_ as s,c as a,o as n,a as l}from"./app.c71ef9f6.js";const d=JSON.parse('{"title":"\u5165\u95E8\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u5F00\u53D1\u6D41\u7A0B","slug":"\u5F00\u53D1\u6D41\u7A0B"},{"level":2,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":2,"title":"\u521B\u5EFA\u722C\u866B","slug":"\u521B\u5EFA\u722C\u866B"},{"level":2,"title":"\u7F16\u5199\u903B\u8F91","slug":"\u7F16\u5199\u903B\u8F91"},{"level":3,"title":"\u5B8C\u5584\u903B\u8F91","slug":"\u5B8C\u5584\u903B\u8F91"},{"level":3,"title":"\u5B9A\u4F4D\u5143\u7D20\u4EE5\u53CA\u63D0\u53D6\u6570\u636E\u3001\u5C5E\u6027\u503C\u7684\u65B9\u6CD5","slug":"\u5B9A\u4F4D\u5143\u7D20\u4EE5\u53CA\u63D0\u53D6\u6570\u636E\u3001\u5C5E\u6027\u503C\u7684\u65B9\u6CD5"},{"level":3,"title":"Response \u54CD\u5E94\u5BF9\u8C61\u7684\u5E38\u7528\u5C5E\u6027","slug":"response-\u54CD\u5E94\u5BF9\u8C61\u7684\u5E38\u7528\u5C5E\u6027"},{"level":2,"title":"\u4FDD\u5B58\u6570\u636E","slug":"\u4FDD\u5B58\u6570\u636E"},{"level":3,"title":"\u5F00\u542F\u7BA1\u9053\u652F\u6301","slug":"\u5F00\u542F\u7BA1\u9053\u652F\u6301"},{"level":3,"title":"\u5B9A\u4E49\u5BF9\u6570\u636E\u7684\u64CD\u4F5C","slug":"\u5B9A\u4E49\u5BF9\u6570\u636E\u7684\u64CD\u4F5C"},{"level":2,"title":"\u8FD0\u884Cscrapy","slug":"\u8FD0\u884Cscrapy"}],"relativePath":"guide/getting-started.md","lastUpdated":1658917064000}'),p={name:"guide/getting-started.md"},o=l(`<h1 id="\u5165\u95E8\u4F7F\u7528" tabindex="-1">\u5165\u95E8\u4F7F\u7528 <a class="header-anchor" href="#\u5165\u95E8\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p><strong>\u6CE8\u610F\uFF1A</strong> Scrapy \u6846\u67B6\u4F9D\u8D56 Python \u7248\u672C\u9700\u8981 3.6+\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pip/pip3 install scrapy</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5EFA\u8BAE\u8FDB\u5165\u5230\u9879\u76EE\u76EE\u5F55\u4F7F\u7528 <code>python3 -m venv .</code> \u521B\u5EFA\u865A\u62DF\u73AF\u5883\u3002</p></blockquote><h2 id="\u5F00\u53D1\u6D41\u7A0B" tabindex="-1">\u5F00\u53D1\u6D41\u7A0B <a class="header-anchor" href="#\u5F00\u53D1\u6D41\u7A0B" aria-hidden="true">#</a></h2><ol><li><p>\u521B\u5EFA\u9879\u76EE</p><p><code>scrapy startproject mySpider</code></p></li><li><p>\u521B\u5EFA\u722C\u866B</p><p><code>scrapy genspider ds dushu.com</code></p></li><li><p>\u63D0\u53D6\u6570\u636E</p><p>\u6839\u636E\u7F51\u7AD9\u7ED3\u6784\u5728spider\u4E2D\u5B9E\u73B0\u6570\u636E\u91C7\u96C6\u76F8\u5173\u5185\u5BB9</p></li><li><p>\u4FDD\u5B58\u6570\u636E</p><p>\u4F7F\u7528pipeline\u8FDB\u884C\u6570\u636E\u540E\u7EED\u5904\u7406\u548C\u4FDD\u5B58</p></li></ol><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u8FC7\u547D\u4EE4\u5C06 scrapy \u9879\u76EE\u7684\u7684\u6587\u4EF6\u751F\u6210\u51FA\u6765\uFF0C\u540E\u7EED\u6B65\u9AA4\u90FD\u662F\u5728\u9879\u76EE\u6587\u4EF6\u4E2D\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u4E0B\u9762\u4EE5\u6293\u53D6<a href="https://www.dushu.com" target="_blank" rel="noopener noreferrer">\u8BFB\u4E66\u7F51</a>\u7684\u56FD\u5B66\u5165\u95E8\u56FE\u4E66\u5206\u7C7B\u4E66\u7C4D\u5217\u8868\u4E3A\u4F8B\u6765\u5B66\u4E60 scrapy \u7684\u5165\u95E8\u4F7F\u7528\uFF1A<a href="https://www.dushu.com/book/1617.html" target="_blank" rel="noopener noreferrer">https://www.dushu.com/book/1617.html</a></p></blockquote><p>\u521B\u5EFAscrapy\u9879\u76EE\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">scrapy startproject </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u9879\u76EE\u540D\u5B57</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">scrapy startproject dushu dushu.com</span></span>
<span class="line"></span></code></pre></div><p>\u751F\u6210\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u279C  tree</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 dushu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 dushu</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u251C\u2500\u2500 __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u251C\u2500\u2500 items.py       \u2500\u2500\u2500\u2500&gt; \u81EA\u5B9A\u4E49\u9700\u8981\u722C\u53D6\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u251C\u2500\u2500 middlewares.py \u2500\u2500\u2500\u2500&gt; \u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u251C\u2500\u2500 pipelines.py   \u2500\u2500\u2500\u2500&gt; \u7BA1\u9053\uFF0C\u7528\u4E8E\u4FDD\u5B58\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u251C\u2500\u2500 settings.py    \u2500\u2500\u2500\u2500&gt; \u9879\u76EE\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5934\uFF0C\u7BA1\u9053\u542F\u7528\u7B49\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u2514\u2500\u2500 spiders</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502       \u2514\u2500\u2500 __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 scrapy.cfg         \u2500\u2500\u2500\u2500&gt; \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u722C\u866B" tabindex="-1">\u521B\u5EFA\u722C\u866B <a class="header-anchor" href="#\u521B\u5EFA\u722C\u866B" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u51FA\u722C\u866B\u6587\u4EF6\uFF0C\u722C\u866B\u6587\u4EF6\u4E3A\u4E3B\u8981\u7684\u4EE3\u7801\u903B\u8F91\u6587\u4EF6\uFF0C\u901A\u5E38\u4E00\u4E2A\u7F51\u7AD9\u7684\u722C\u53D6\u52A8\u4F5C\u90FD\u4F1A\u5728\u722C\u866B\u6587\u4EF6\u4E2D\u8FDB\u884C\u7F16\u5199\u3002</p><p>\u547D\u4EE4\uFF1A \u9879\u76EE\u8DEF\u5F84\u4E0B\u6267\u884C:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">scrapy genspider </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u722C\u866B\u540D\u5B57</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u5141\u8BB8\u722C\u53D6\u7684\u57DF\u540D</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u722C\u866B\u540D\u5B57: \u4F5C\u4E3A\u722C\u866B\u8FD0\u884C\u65F6\u7684\u53C2\u6570</p><p>\u5141\u8BB8\u722C\u53D6\u7684\u57DF\u540D: \u4E3A\u5BF9\u4E8E\u722C\u866B\u8BBE\u7F6E\u7684\u722C\u53D6\u8303\u56F4\uFF0C\u8BBE\u7F6E\u4E4B\u540E\u7528\u4E8E\u8FC7\u6EE4\u8981\u722C\u53D6\u7684 URL \uFF0C\u5982\u679C\u722C\u53D6\u7684 URL \u4E0E\u5141\u8BB8\u7684\u57DF\u4E0D\u540C\u5219\u88AB\u8FC7\u6EE4\u6389\u3002</p></blockquote><p>\u793A\u4F8B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> dushu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">scrapy genspider ds dushu.com</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u5B8C\u521B\u5EFA\u722C\u866B\u6587\u4EF6\u547D\u4EE4\u540E\uFF0C\u4F1A\u751F\u6210 <code>./dushu/spiders/ds.py</code> \u6587\u4EF6\u3002</p><h2 id="\u7F16\u5199\u903B\u8F91" tabindex="-1">\u7F16\u5199\u903B\u8F91 <a class="header-anchor" href="#\u7F16\u5199\u903B\u8F91" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u4E0A\u4E00\u6B65\u751F\u6210\u51FA\u6765\u7684\u722C\u866B\u6587\u4EF6 <code>ds.py</code> \u4E2D\u7F16\u5199\u6307\u5B9A\u7F51\u7AD9\u7684\u6570\u636E\u91C7\u96C6\u64CD\u4F5C\uFF0C\u5B9E\u73B0\u6570\u636E\u63D0\u53D6\u3002</p></blockquote><h3 id="\u5B8C\u5584\u903B\u8F91" tabindex="-1">\u5B8C\u5584\u903B\u8F91 <a class="header-anchor" href="#\u5B8C\u5584\u903B\u8F91" aria-hidden="true">#</a></h3><p>\u5728 <code>./dushu/spiders/ds.py</code> \u4E2D\u4FEE\u6539\u5185\u5BB9\u5982\u4E0B:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> scrapy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DsSpider</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">scrapy</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Spider</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ds</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u722C\u866B\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    allowed_domains </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dushu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u5141\u8BB8\u722C\u53D6\u7684\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    start_urls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.dushu.com/book/1617.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u5F00\u59CB\u722C\u53D6\u7684 URL \u5730\u5740</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u6570\u636E\u63D0\u53D6\u7684\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u4F20\u9012\u7684 Response</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># \u63D0\u53D6\u4E66\u672C\u8BE6\u60C5\u94FE\u63A5\uFF0Cscrapy \u7684 Response \u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C xpath \u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">        href_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//div[@class=&quot;book-info&quot;]/div/a/@href</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> href </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> href_list</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            detail_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.dushu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> href</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#A6ACCD;"> scrapy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Request</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">detail_url</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">parse_detail</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u89E3\u6790\u8BE6\u60C5\u9875\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse_detail</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">strip</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)[-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//div[@class=&quot;book-title&quot;]/h1/text()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        image_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//div[@class=&quot;book-pic&quot;]/div[@class=&quot;pic&quot;]/img/@src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        price </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//p[@class=&quot;price&quot;]/span[@class=&quot;num&quot;]/text()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        author </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//div[@class=&quot;book-details-left&quot;]/table/tbody/tr[1]/td[2]/text()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        publishing_house </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//div[@class=&quot;book-details-left&quot;]/table/tbody/tr[2]/td[2]/text()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//div[@class=&#39;book-summary&#39;][1]//div[@class=&#39;text txtsummary&#39;]/text()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">image_url</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">image_url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">price</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">price</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">author</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">author</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">publishing_house</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">publishing_house</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">            </span><span style="color:#A6ACCD;">description</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">description</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><code>scrapy.Spider</code> \u722C\u866B\u7C7B\u4E2D\u5FC5\u987B\u5B58\u5728 <code>parse</code> \u65B9\u6CD5</li><li>\u5982\u679C\u7F51\u7AD9\u7ED3\u6784\u5C42\u6B21\u6BD4\u8F83\u590D\u6742\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5176\u4ED6\u89E3\u6790\u51FD\u6570</li><li>\u5728\u89E3\u6790\u51FD\u6570\u4E2D\u63D0\u53D6\u7684 URL \u5730\u5740\u5982\u679C\u8981\u53D1\u9001\u8BF7\u6C42\uFF0C\u5219\u5FC5\u987B\u5C5E\u4E8E <code>allowed_domains</code> \u8303\u56F4\u5185\uFF0C\u4F46\u662F <code>start_urls</code> \u4E2D\u7684 <code>URL</code> \u5730\u5740\u4E0D\u53D7\u8FD9\u4E2A\u9650\u5236</li><li>\u542F\u52A8\u722C\u866B\u7684\u65F6\u5019\u6CE8\u610F\u542F\u52A8\u7684\u4F4D\u7F6E\uFF0C\u662F\u5728\u9879\u76EE\u8DEF\u5F84\u4E0B\u542F\u52A8</li><li><code>parse()</code> \u65B9\u6CD5\u4E2D\u4F7F\u7528 <code>yield</code> \u8FD4\u56DE\u6570\u636E\uFF0C\u4E14\u51FD\u6570\u4E2D\u7684 yield \u80FD\u591F\u4F20\u9012\u7684\u5BF9\u8C61\u53EA\u80FD\u662F: <code>Request</code>, <code>items</code>, <code>dict</code>, <code>None</code></li></ul><h3 id="\u5B9A\u4F4D\u5143\u7D20\u4EE5\u53CA\u63D0\u53D6\u6570\u636E\u3001\u5C5E\u6027\u503C\u7684\u65B9\u6CD5" tabindex="-1">\u5B9A\u4F4D\u5143\u7D20\u4EE5\u53CA\u63D0\u53D6\u6570\u636E\u3001\u5C5E\u6027\u503C\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u5B9A\u4F4D\u5143\u7D20\u4EE5\u53CA\u63D0\u53D6\u6570\u636E\u3001\u5C5E\u6027\u503C\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u89E3\u6790\u5E76\u83B7\u53D6 scrapy \u722C\u866B\u4E2D\u7684\u6570\u636E: \u5229\u7528 xpath \u89C4\u5219\u5B57\u7B26\u4E32\u8FDB\u884C\u5B9A\u4F4D\u548C\u63D0\u53D6</p><ol><li><code>response.xpath</code> \u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\u662F\u4E00\u4E2A\u7C7B\u4F3C <code>list</code> \u7684\u7C7B\u578B\uFF0C\u5176\u4E2D\u5305\u542B\u7684\u662F <code>Selector</code> \u5BF9\u8C61\uFF0C\u64CD\u4F5C\u548C\u5217\u8868\u4E00\u6837\u3002\u4F46\u662F\u6709\u4E00\u4E9B\u989D\u5916\u7684\u65B9\u6CD5</li><li>\u989D\u5916\u65B9\u6CD5 <code>getall()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6709\u5B57\u7B26\u4E32\u7684\u5217\u8868</li><li>\u989D\u5916\u65B9\u6CD5 <code>get()</code>\uFF1A\u8FD4\u56DE\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5217\u8868\u4E3A\u7A7A\u6CA1\u6709\u8FD4\u56DENone</li></ol><h3 id="response-\u54CD\u5E94\u5BF9\u8C61\u7684\u5E38\u7528\u5C5E\u6027" tabindex="-1">Response \u54CD\u5E94\u5BF9\u8C61\u7684\u5E38\u7528\u5C5E\u6027 <a class="header-anchor" href="#response-\u54CD\u5E94\u5BF9\u8C61\u7684\u5E38\u7528\u5C5E\u6027" aria-hidden="true">#</a></h3><ul><li><code>response.url</code>\uFF1A\u5F53\u524D\u54CD\u5E94\u7684url\u5730\u5740</li><li><code>response.request.url</code>\uFF1A\u5F53\u524D\u54CD\u5E94\u5BF9\u5E94\u7684\u8BF7\u6C42\u7684url\u5730\u5740</li><li><code>response.headers</code>\uFF1A\u54CD\u5E94\u5934</li><li><code>response.requests.headers</code>\uFF1A\u5F53\u524D\u54CD\u5E94\u7684\u8BF7\u6C42\u5934</li><li><code>response.body</code>\uFF1A\u54CD\u5E94\u4F53\uFF0C\u4E5F\u5C31\u662Fhtml\u4EE3\u7801\uFF0Cbyte\u7C7B\u578B</li><li><code>response.status</code>\uFF1A\u54CD\u5E94\u72B6\u6001\u7801</li></ul><h2 id="\u4FDD\u5B58\u6570\u636E" tabindex="-1">\u4FDD\u5B58\u6570\u636E <a class="header-anchor" href="#\u4FDD\u5B58\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5229\u7528\u7BA1\u9053 pipelines \u6765\u5904\u7406(\u4FDD\u5B58)\u6570\u636E\u3002</p><h3 id="\u5F00\u542F\u7BA1\u9053\u652F\u6301" tabindex="-1">\u5F00\u542F\u7BA1\u9053\u652F\u6301 <a class="header-anchor" href="#\u5F00\u542F\u7BA1\u9053\u652F\u6301" aria-hidden="true">#</a></h3><p>\u9700\u8981\u4F7F\u7528\u7BA1\u9053\u9700\u8981\u5728\u9879\u76EE\u7684 <code>settings.py</code> \u6587\u4EF6\u4E2D\u5F00\u542F\u7BA1\u9053\u914D\u7F6E\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># settings.py\u6587\u4EF6\u4E2D\u542F\u7528\u7BA1\u9053\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">ITEM_PIPELINES </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dushu.pipelines.DushuPipeline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u9879\u4E2D\u952E\u4E3A\u4F7F\u7528\u7684\u7BA1\u9053\u7C7B\uFF0C\u7BA1\u9053\u7C7B\u4F7F\u7528 <code>.</code> \u8FDB\u884C\u5206\u5272\u3002</p><p>\u7B2C\u4E00\u4E2A\u4E3A\u9879\u76EE\u76EE\u5F55\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u6587\u4EF6\uFF0C\u7B2C\u4E09\u4E2A\u4E3A\u5B9A\u4E49\u7684\u7BA1\u9053\u7C7B\u3002</p><p>\u914D\u7F6E\u9879\u4E2D\u503C\u4E3A\u7BA1\u9053\u7684\u4F7F\u7528\u987A\u5E8F\uFF0C\u8BBE\u7F6E\u7684\u6570\u503C\u7EA6\u5C0F\u8D8A\u4F18\u5148\u6267\u884C\uFF0C\u8BE5\u503C\u4E00\u822C\u8BBE\u7F6E\u4E3A <code>0</code> - <code>1000</code> \u4E4B\u95F4\u3002</p><h3 id="\u5B9A\u4E49\u5BF9\u6570\u636E\u7684\u64CD\u4F5C" tabindex="-1">\u5B9A\u4E49\u5BF9\u6570\u636E\u7684\u64CD\u4F5C <a class="header-anchor" href="#\u5B9A\u4E49\u5BF9\u6570\u636E\u7684\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u4E00\u4E2A\u7BA1\u9053\u7C7B \u91CD\u5199\u7BA1\u9053\u7C7B\u7684process_item\u65B9\u6CD5 process_item\u65B9\u6CD5\u5904\u7406\u5B8Citem\u4E4B\u540E\u5FC5\u987B\u8FD4\u56DE\u7ED9\u5F15\u64CE</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DushuPipeline</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u722C\u866B\u6587\u4EF6\u4E2D\u63D0\u53D6\u6570\u636E\u7684\u65B9\u6CD5\u6BCFyield\u4E00\u6B21item\uFF0C\u5C31\u4F1A\u8FD0\u884C\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u8BE5\u65B9\u6CD5\u4E3A\u56FA\u5B9A\u540D\u79F0\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process_item</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spider</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u4EC5\u6253\u5370\u5F15\u64CE\u4F20\u9012\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> item</span></span>
<span class="line"></span></code></pre></div><ul><li><a href="https://docs.scrapy.org/en/latest/topics/item-pipeline.html#write-items-to-a-json-file" target="_blank" rel="noopener noreferrer">\u6570\u636E\u5B58\u50A8\u5230 json \u6587\u4EF6 - docs.scrapy.org</a></li><li><a href="https://docs.scrapy.org/en/latest/topics/item-pipeline.html#write-items-to-mongodb" target="_blank" rel="noopener noreferrer">\u6570\u636E\u5B58\u50A8\u5230 MongoDB - docs.scrapy.org</a></li></ul><h2 id="\u8FD0\u884Cscrapy" tabindex="-1">\u8FD0\u884Cscrapy <a class="header-anchor" href="#\u8FD0\u884Cscrapy" aria-hidden="true">#</a></h2><p>\u547D\u4EE4\uFF1A\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u6267\u884C <code>scrapy crawl &lt;\u722C\u866B\u540D\u79F0&gt;</code></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">scrapy crawl ds</span></span>
<span class="line"></span></code></pre></div>`,50),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{d as __pageData,C as default};