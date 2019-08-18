// The code snippet you want to highlight, as a string
var text = "body{color: red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);
console.log(css)


var result = `
/*
 *面试官你好，我叫陈凯东
 *我将用动画的形式介绍一下我自己
 *用文字有些单调
 *那就用代码吧
 *首先需要准备一些样式
*/
*{
    transition: all 1.5s;
}
html{
    background: #dedede;
    font-size: 16px;
}
#code{
    border: 1px solid red;
    padding: 16px;
}
/*我需要一些代码来将文字点亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.taken.punctuation{
    color: #999;
}
/*加点3d效果*/
.code{
    transform: rotate(360deg);
}
/*接下来介绍一下我自己*/
/*我需要一张白纸*/
.code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: grey;
    padding: 4px;
    display: flex;
    justify-content: center;
}
#paper > .content{
    height: 100%;
    width: 100%;
    background: white;
}
`

var result2 = `
#paper{
}
    `

var md = `
# 自我介绍

我叫陈凯东
1997年8月出生
2020年于深圳大学本科毕业
自学前端半年多
希望应聘前端实习生岗位

# 技能

掌握JavaScript、html5、css3；
使用ps、pr、ae等adobe软件
掌握Word、Excel、PPT
...

# 项目经验
1. 个人简历
2. 顺序轮播、无缝轮播
3. 简易画板
...

# 联系方式
手机： 15917198755
微信： 15917198755
邮箱： 15917198755@163.com
个人博客：
GitHub：
...
`

writeCode('',result,() => {
    createPaper(() => {
        writeCode(result,result2,() => {
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function writeCode(prefix,code,fn) {
    let domCode = document.querySelector('#code')
    domCode.innerText = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 5);
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
        }
    }, 5);
}