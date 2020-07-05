(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{484:function(t,e,r){t.exports=r.p+"assets/img/git常用命令.55c6a51b.png"},485:function(t,e,r){t.exports=r.p+"assets/img/Git Flow.84a33973.png"},486:function(t,e,r){t.exports=r.p+"assets/img/Github Flow.bafaef97.png"},496:function(t,e,r){"use strict";r.r(e);var v=r(4),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"git常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" Git常用命令")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("基本操作\n"),v("img",{attrs:{src:r(484)}})])]),t._v(" "),v("li",[v("p",[t._v("分支操作"),v("br"),t._v(" "),v("code",[t._v("git branch [-r|-a]")]),t._v(" 查看本地/远程/全部分支"),v("br"),t._v(" "),v("code",[t._v("git branch <name>")]),t._v(" 创建分支"),v("br"),t._v(" "),v("code",[t._v("git checkout <name>")]),t._v(" 切换到分支"),v("br"),t._v(" "),v("code",[t._v("git checkout -b <name>")]),t._v(" 创建并切换到分支"),v("br"),t._v(" "),v("code",[t._v("git checkout -b <name> <origin>/<name>")]),t._v(" 使用远程仓库的某个分支创建本地分支并切换"),v("br"),t._v(" "),v("code",[t._v("git checkout --merge <name>")]),t._v(" 切换到分支，并将当前分支修改同步到切换的分支下"),v("br"),t._v(" "),v("code",[t._v("git branch -D|--delete <name>")]),t._v(" 删除分支")])]),t._v(" "),v("li",[v("p",[t._v("文件操作"),v("br"),t._v(" "),v("code",[t._v("git checkout -- <file>")]),t._v(" 撤销文件在工作区的全部修改，若文件已被添加到暂存区，则回到添加到暂存区后的状态，否则回到和版本库一致的状态"),v("br"),t._v(" "),v("code",[t._v("git reset HEAD <file>")]),t._v(" 拉取最近一次提交到版本库的文件到暂存区，该操作不影响工作区")])]),t._v(" "),v("li",[v("p",[t._v("其它命令"),v("br"),t._v(" "),v("code",[t._v("git status")]),t._v(" 显示文件或文件夹在工作区、暂存区的状态"),v("br"),t._v(" "),v("code",[t._v("git diff <SHA1> <SHA2>")]),t._v(" 比较两个历史版本之间的差异"),v("br"),t._v(" "),v("code",[t._v("git push origin HEAD --force")]),t._v(" 强制提交，之前错误的提交就从远程仓库删除"),v("br"),t._v(" "),v("code",[t._v("git tag [-l -n]")]),t._v(" 查看标签，-l列表形式列出，-n附加说明"),v("br"),t._v(" "),v("code",[t._v("git tag -l 1.*.*")]),t._v(" 查复符合检索条件的标签"),v("br"),t._v(" "),v("code",[t._v("git tag <name>")]),t._v(" 创建tag(本地)"),v("br"),t._v(" "),v("code",[t._v('git tag -a 1.0.0 -m "desc"')]),t._v(" 创建带备注的tag"),v("br"),t._v(" "),v("code",[t._v('git tag -a 1.0.0 <commit_id> -m "desc"')]),t._v(" 针对特定的commit版本SHA创建标签"),v("br"),t._v(" "),v("code",[t._v("git tag -d 1.0.0")]),t._v(" 删除标签(本地)"),v("br"),t._v(" "),v("code",[t._v("git push origin --tags")]),t._v(" 将本地所有标签发布到远程仓库"),v("br"),t._v(" "),v("code",[t._v("git push origin --delete <name>")]),t._v(" 删除远程仓库对应标签"),v("br"),t._v(" "),v("code",[t._v("git remote -v")]),t._v(" 查看关联远程库"),v("br"),t._v(" "),v("code",[t._v("git remote add <name> <url>")]),t._v(" 关联远程库"),v("br"),t._v(" "),v("code",[t._v("git cherrypick <SHA1> [<SHA2>...]")]),t._v(" 将指定的一个或多个提交应用于当前分支，产生一个新的提交"),v("br"),t._v(" "),v("code",[t._v("git cherrypick <SHA1>..<SHA2>")]),t._v(" 将sha1(不包含)至sha2的所有提交应用于当前分支"),v("br"),t._v(" "),v("code",[t._v("git cherrypick <SHA1>^..<SHA2>")]),t._v(" 将sha1(包含)至sha2的所有提交应用于当前分支")])])]),t._v(" "),v("p",[v("font",{attrs:{color:"#aaa",size:"2"}},[t._v("<待补充...>")])],1),t._v(" "),v("h2",{attrs:{id:"常见的git协作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的git协作流程"}},[t._v("#")]),t._v(" 常见的Git协作流程")]),t._v(" "),v("h3",{attrs:{id:"一-git-flow工作流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-git-flow工作流"}},[t._v("#")]),t._v(" 一.Git Flow工作流")]),t._v(" "),v("p",[t._v("  Git Flow定义了一个项目发布的分支模型，为管理具有预定发布周期的大型项目提供了一个健壮的框架。其优点是各分支分工明确，清晰可控，使\n多人项目协作开发更加规范；缺点是相对复杂，需要同时维护两个长期分支。\n"),v("img",{attrs:{src:r(485)}})]),t._v(" "),v("ol",[v("li",[t._v("master分支"),v("br"),t._v("\n存放所有正式发布的版本，可作为项目历史版本记录分支，不直接提交代码。")]),t._v(" "),v("li",[t._v("hotfix分支"),v("br"),t._v("\n基于master创建，对线上版本的bug进行修复，完成后直接合并到master分支和develop分支，如果当前还有新功能release分支，也需要同步到release分支上。\n同一时间只有一个，生命周期较短。")]),t._v(" "),v("li",[t._v("release分支"),v("br"),t._v("\n基于develop分支创建，当新功能足够发布一个新版本（或接近新版本的发布日期），从develop分支创建一个release分支作为新版本的起点，用于测试，所有的\n测试bug在这个分支修改。测试完成后合并到master并打上版本号，同时也合并到develop分支。一旦release分支创建后，就不能从develop分支合并新的改动\n到release分支。同一时间只有一个，生命周期较短，仅用于发布。")]),t._v(" "),v("li",[t._v("develop分支"),v("br"),t._v("\n主开发分支，整合各个功能feature分支。")]),t._v(" "),v("li",[t._v("feature分支"),v("br"),t._v("\n基于develop分支创建，新功能分支，开发完成后合并入develop分支，同一时间存在多个。")])]),t._v(" "),v("h3",{attrs:{id:"二-github-flow工作流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-github-flow工作流"}},[t._v("#")]),t._v(" 二.Github Flow工作流")]),t._v(" "),v("p",[t._v("  如"),v("a",{attrs:{href:"https://guides.github.com/introduction/flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),v("OutboundLink")],1),t._v("所描述，GitHub flow是一个轻量级的，基于分支的工作流，它支持定期\n进行部署的团队和项目。"),v("br"),t._v(" "),v("img",{attrs:{src:r(486)}}),t._v("\n其主要步骤如图所示。当开发新特性时，直接从master拉取分支，内容开发完成后，提交PR并用当前分支发布做验证，如果确定不需要新增或者修改，\n就可以将内容合并到master上，此时master上就会随时包含最新的内容，随时都可以进行发布操作。\n可以看出该工作流的优点是操作简单，适合持续发布的工作流程；缺点是master是实时更新的，不适用于版本发布的工作流程。")]),t._v(" "),v("h3",{attrs:{id:"三-gitlab-flow工作流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-gitlab-flow工作流"}},[t._v("#")]),t._v(" 三.Gitlab Flow工作流")]),t._v(" "),v("p",[t._v('  Gitlab Flow遵循"上游优先"的原则，即只存在一个主分支master，它是所有其它分支的"上游"，只有上游分支采纳的代码变化，才能应用到其它分支。')]),t._v(" "),v("ul",[v("li",[t._v("持续发布使用场景"),v("br"),t._v("\n  除长期分支master外，再分别创建一个预发布分支pre-production和一个发布分支production，production分支以pre-production为上游，\n代码修改提交到master后，先合并到pre-production分支来验证内容是否具有风险和bug，如果没有问题，则直接合并到production分支上进行发布。")]),t._v(" "),v("li",[t._v("版本发布使用场景"),v("br"),t._v("\n  每一个稳定的版本都单独作为一个分支存在，从master上拉取出来，以后只有master上的bug修复才会被cherry-pick到这些单独的版本分支上，\n而对于master上的新内容是不采取合并操作的。例如创建了稳定版本stable1分支后，master可以继续接受来自其它分支的合并内容，但这些内容和stable1分支没有关系，\n因为stable1分支是某个具体的版本，只包含固定的内容。只有那些发现了存在于stable1上的Bug，才会需要从master合并到stable1上。")])]),t._v(" "),v("h3",{attrs:{id:"四-其它类型工作流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四-其它类型工作流"}},[t._v("#")]),t._v(" 四.其它类型工作流")]),t._v(" "),v("p",[t._v("  这里主要是为了记录我当前使用的工作流，是基于Github Flow的一个变种，因为Github工作不适合做版本发布，因此做了适当改进。\n在实际的工作中，不能囿于以上的工作流程，要根据实际的工作环境和开发场景选择最适合自身项目的工作流程。\n以当前的Github的基于Fork&Pull模型为例，首先fork项目主仓库(upstream)到自己的托管空间(origin)下，从origin创建分支，进行修改提交；\n特性开发完成后从upstream创建PR，之后进行代码评审及静态检查等，代码评审过程中所做的修改任然可以提交到该分支上；\n之后可以部署此分支的代码到生产环境，若功能验证无错误，则可进行merge，此处直接合并到master可能存在风险，一般的操作是在upstream创建一个develop分支，\n所有的PR都提交到该分支上，在该分支上进行功能的测试，测试无误后创建tag并将develop分支代码merge入master。\n对于已经实现类似于github的Actions的自动化构建功能的系统来说，先PR到develop分支是值得推荐的，因为自动化构建发布通常只能从主仓库选取分支。")])])}),[],!1,null,null,null);e.default=a.exports}}]);