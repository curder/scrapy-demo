import{_ as s,c as n,o as a,a as l}from"./app.e4c396e6.js";const C=JSON.parse('{"title":"\u4E2D\u95F4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528","slug":"\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"\u968F\u673AUser-Agent","slug":"\u968F\u673Auser-agent"},{"level":3,"title":"\u7F16\u5199\u4E2D\u95F4\u4EF6","slug":"\u7F16\u5199\u4E2D\u95F4\u4EF6"},{"level":3,"title":"\u6DFB\u52A0UA\u914D\u7F6E","slug":"\u6DFB\u52A0ua\u914D\u7F6E"},{"level":3,"title":"\u542F\u7528\u4E2D\u95F4\u4EF6","slug":"\u542F\u7528\u4E2D\u95F4\u4EF6"},{"level":2,"title":"\u968F\u673A\u4EE3\u7406IP","slug":"\u968F\u673A\u4EE3\u7406ip"},{"level":2,"title":"\u914D\u5408 Selenium","slug":"\u914D\u5408-selenium"}],"relativePath":"guide/middlewares.md","lastUpdated":1659093280000}'),p={name:"guide/middlewares.md"},e=l(`<h1 id="\u4E2D\u95F4\u4EF6" tabindex="-1">\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h1><p>\u6839\u636E scrapy \u8FD0\u884C\u6D41\u7A0B\u4E2D\u6240\u5728\u4F4D\u7F6E\u4E0D\u540C\u5206\u4E3A\uFF1A</p><ul><li><p>\u4E0B\u8F7D\u4E2D\u95F4\u4EF6</p></li><li><p>\u722C\u866B\u4E2D\u95F4\u4EF6</p></li></ul><h2 id="\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528" tabindex="-1">\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528 <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u9884\u5904\u7406 Request \u548C Response \u5BF9\u8C61</p><ul><li>\u5BF9 header \u4EE5\u53CA cookie \u8FDB\u884C\u66F4\u6362\u548C\u5904\u7406</li><li>\u4F7F\u7528\u4EE3\u7406 IP \u7B49</li><li>\u5BF9\u8BF7\u6C42\u8FDB\u884C\u5B9A\u5236\u5316\u64CD\u4F5C</li></ul><p>\u4F46\u5728 scrapy \u9ED8\u8BA4\u7684\u60C5\u51B5\u4E0B \u4E24\u79CD\u4E2D\u95F4\u4EF6\u90FD\u5728 <code>middlewares.py</code> \u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u722C\u866B\u4E2D\u95F4\u4EF6\u4F7F\u7528\u65B9\u6CD5\u548C\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u76F8\u540C\uFF0C\u4E14\u529F\u80FD\u91CD\u590D\uFF0C\u901A\u5E38\u4F7F\u7528\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u3002</p><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u7684\u9ED8\u8BA4\u65B9\u6CD5\uFF1A</p><p><code>process_request(self, request, spider)</code>\u3002\u5F53\u6BCF\u4E2A request \u901A\u8FC7\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u88AB\u8C03\u7528\u3002</p><ul><li><p>\u8FD4\u56DE None \u503C\uFF1A\u6CA1\u6709 return \u4E5F\u662F\u8FD4\u56DE None \uFF0C\u8BE5 request \u5BF9\u8C61\u4F20\u9012\u7ED9\u4E0B\u8F7D\u5668\uFF0C\u6216\u901A\u8FC7\u5F15\u64CE\u4F20\u9012\u7ED9\u5176\u4ED6\u6743\u91CD\u4F4E\u7684 process_request \u65B9\u6CD5</p></li><li><p>\u8FD4\u56DE Response \u5BF9\u8C61\uFF1A\u4E0D\u518D\u8BF7\u6C42\uFF0C\u628A response \u8FD4\u56DE\u7ED9\u5F15\u64CE</p></li><li><p>\u8FD4\u56DE Request \u5BF9\u8C61\uFF1A\u628Arequest\u5BF9\u8C61\u901A\u8FC7\u5F15\u64CE\u4EA4\u7ED9\u8C03\u5EA6\u5668\uFF0C\u6B64\u65F6\u5C06\u4E0D\u901A\u8FC7\u5176\u4ED6\u6743\u91CD\u4F4E\u7684 process_request \u65B9\u6CD5</p></li></ul><p><code>process_response(self, request, response, spider)</code>\u3002\u5F53\u4E0B\u8F7D\u5668\u5B8C\u6210 http \u8BF7\u6C42\uFF0C\u4F20\u9012\u54CD\u5E94\u7ED9\u5F15\u64CE\u7684\u65F6\u5019\u8C03\u7528</p><ul><li><p>\u8FD4\u56DE Response\uFF1A\u901A\u8FC7\u5F15\u64CE\u4EA4\u7ED9\u722C\u866B\u5904\u7406\u6216\u4EA4\u7ED9\u6743\u91CD\u66F4\u4F4E\u7684\u5176\u4ED6\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u7684 process_response \u65B9\u6CD5</p></li><li><p>\u8FD4\u56DE Request \u5BF9\u8C61\uFF1A\u901A\u8FC7\u5F15\u64CE\u4EA4\u7ED9\u8C03\u53D6\u5668\u7EE7\u7EED\u8BF7\u6C42\uFF0C\u6B64\u65F6\u5C06\u4E0D\u901A\u8FC7\u5176\u4ED6\u6743\u91CD\u4F4E\u7684 process_request \u65B9\u6CD5</p></li><li><p>\u5728 <code>settings.py</code> \u4E2D\u914D\u7F6E\u5F00\u542F\u4E2D\u95F4\u4EF6\uFF0C\u6743\u91CD\u503C\u8D8A\u5C0F\u8D8A\u4F18\u5148\u6267\u884C</p></li></ul><h2 id="\u968F\u673Auser-agent" tabindex="-1">\u968F\u673AUser-Agent <a class="header-anchor" href="#\u968F\u673Auser-agent" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u968F\u673A <code>User-Agent</code> \u8BF7\u6C42\u5934\u3002</p><ol><li>\u7F16\u5199\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u903B\u8F91</li><li>\u5728 <code>settings.py</code> \u914D\u7F6E\u4E2D\u6DFB\u52A0UA\u5217\u8868</li><li>\u5728 <code>settings.py</code> \u4E2D\u542F\u7528\u4E2D\u95F4\u4EF6</li></ol><h3 id="\u7F16\u5199\u4E2D\u95F4\u4EF6" tabindex="-1">\u7F16\u5199\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u7F16\u5199\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h3><p>\u7F16\u5199\u4E2D\u95F4\u4EF6\u7684\u903B\u8F91\u5728 <code>middlewares.py</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># Define here the models for your spider middleware</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># See documentation in:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://docs.scrapy.org/en/latest/topics/spider-middleware.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> scrapy </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> signals</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># useful for handling different item types with a single interface</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> itemadapter </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> is_item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ItemAdapter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> random</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> dushu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">settings </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> USER_AGENTS_LIST  </span><span style="color:#676E95;font-style:italic;"># \u4ECE\u914D\u7F6E\u4E2D\u5BFC\u5165UA\u5217\u8868</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserAgentMiddleware</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process_request</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spider</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u901A\u8FC7 spider.name \u5224\u65AD\u722C\u866B\u540D\u79F0\u5BF9\u7279\u5B9A\u722C\u866B\u6267\u884C\u6DFB\u52A0UA\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">        request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User-Agent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">choice</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">USER_AGENTS_LIST</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CheckUA</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process_response</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spider</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User-Agent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> response  </span><span style="color:#676E95;font-style:italic;"># \u4E0D\u80FD\u5C11\uFF01</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6DFB\u52A0ua\u914D\u7F6E" tabindex="-1">\u6DFB\u52A0UA\u914D\u7F6E <a class="header-anchor" href="#\u6DFB\u52A0ua\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u5728\u914D\u7F6E\u6587\u4EF6 <code>settings.py</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u5BF9\u5E94\u7684UA\u5217\u8868\uFF0C\u65B9\u4FBF\u7EDF\u4E00\u4FEE\u6539\u548C\u4F7F\u7528\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#A6ACCD;">USER_AGENTS_LIST </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"></span></code></pre></div><blockquote></blockquote><p>\u66F4\u591AUA\u5217\u8868\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\uFF1A<a href="https://github.com/fengzhizi715/user-agent-list/blob/master/Chrome.txt" target="_blank" rel="noopener noreferrer">fengzhizi715/user-agent-list - GitHub</a></p><h3 id="\u542F\u7528\u4E2D\u95F4\u4EF6" tabindex="-1">\u542F\u7528\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u542F\u7528\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h3><p>\u5728\u914D\u7F6E\u6587\u4EF6 <code>settings.py</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u4E0B\u8F7D\u4E2D\u95F4\u4EF6</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#A6ACCD;">DOWNLOADER_MIDDLEWARES </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dushu.middlewares.UserAgentMiddleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">543</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 543 \u662F\u6743\u91CD\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dushu.middlewares.CheckUA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u5148\u6267\u884C 543 \u6743\u91CD\u7684\u4E2D\u95F4\u4EF6\uFF0C\u518D\u6267\u884C 600 \u7684\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u968F\u673A\u4EE3\u7406ip" tabindex="-1">\u968F\u673A\u4EE3\u7406IP <a class="header-anchor" href="#\u968F\u673A\u4EE3\u7406ip" aria-hidden="true">#</a></h2><ul><li>\u4EE3\u7406\u6DFB\u52A0\u7684\u4F4D\u7F6E\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\u4E2D\u7684 <code>process_request</code> \u65B9\u6CD5\u4E2D\u4F7F\u7528 <code>request.meta</code> \u4E2D\u589E\u52A0 <code>proxy</code> \u5B57\u6BB5</li><li>\u83B7\u53D6\u4E00\u4E2A\u4EE3\u7406 IP\uFF0C\u8D4B\u503C\u7ED9 <code>request.meta[&#39;proxy&#39;]</code><ol><li>\u4EE3\u7406\u6C60\u4E2D\u968F\u673A\u9009\u62E9\u4EE3\u7406 IP</li><li>\u4EE3\u7406ip\u7684webapi\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u4E00\u4E2A\u4EE3\u7406 IP</li></ol></li></ul><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><ul><li><p>\u4E2D\u95F4\u4EF6\u5B9A\u4E49 <code>middlewares.py</code></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> random</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> dushu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">settings </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PROXY_LIST  </span><span style="color:#676E95;font-style:italic;"># \u4ECE\u914D\u7F6E\u4E2D\u5BFC\u5165UA\u5217\u8868</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RandomProxyMiddleware</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process_request</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spider</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">choice</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">PROXY_LIST</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BFB\u53D6\uFF0C\u4E5F\u53EF\u4EE5\u4ECERedis\u4E2D\u83B7\u53D6\uFF0C\u6216\u8005\u901A\u8FC7API\u83B7\u53D6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">proxy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> proxy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u53EF\u4EE5\u4E0D\u5199 return</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">process_response</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> spider</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">dont_filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u91CD\u65B0\u53D1\u9001\u7684\u8BF7\u6C42\u5BF9\u8C61\u80FD\u591F\u518D\u6B21\u8FDB\u5165\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> request</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5E94\u7528\u4E2D\u95F4\u4EF6\u548C\u4EE3\u7406IP\u6C60 <code>settings.py</code></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">DOWNLOADER_MIDDLEWARES </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dushu.middlewares.RandomProxyMiddleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4EE3\u7406IP\u6C60</span></span>
<span class="line"><span style="color:#A6ACCD;">PROXY_LIST </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://IP_ADDRESS:PORT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://ANOTHER_IP_ADDRESS:ANOTHER_PORT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div></li></ul><p>\u6269\u5C55\u9605\u8BFB\uFF1A<a href="https://ithelp.ithome.com.tw/articles/10208575" target="_blank" rel="noopener noreferrer">Scrapy \u722C\u514D\u8CBB\u4EE3\u7406(Proxy)</a> \u548C <a href="https://ithelp.ithome.com.tw/articles/10208773" target="_blank" rel="noopener noreferrer">[Day 24] Scrapy \u96A8\u6A5F\u4EE3\u7406\u5BE6\u73FE</a></p><h2 id="\u914D\u5408-selenium" tabindex="-1">\u914D\u5408 Selenium <a class="header-anchor" href="#\u914D\u5408-selenium" aria-hidden="true">#</a></h2>`,33),o=[e];function t(r,c,D,i,y,F){return a(),n("div",null,o)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};