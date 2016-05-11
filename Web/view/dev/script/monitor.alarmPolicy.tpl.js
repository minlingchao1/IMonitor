webpackJsonp([10],{

/***/ 58:
/***/ function(module, exports) {

	module.exports = "<!--\n    报警策略\n    AlarmPolicyVm\n-->\n<style>\n    .component-panel {\n        border-left: none;\n        border-right: none;\n        border-radius: 0;\n        box-shadow: 0 0 4px 2px rgba(0,0,0,.1);\n    }\n    .component-panel > .panel-heading {\n        background-color: #FFFFFF;\n    }\n    .component-panel > .panel-heading .iconfont {\n        font-size: 12px;\n    }\n    .component-panel-table {\n        border-bottom: 1px solid #ddd;\n    }\n    .component-panel-table > thead > tr > th, .component-panel-table > tbody > tr > td {\n        text-align: center;\n        vertical-align: middle;\n    }\n</style>\n<div class=\"panel panel-default component-panel\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading clearfix\">\n        报警策略\n        <div class=\"pull-right\">\n            <button class=\"btn btn-sm btn-success\"><i class=\"iconfont icon-add\"></i>添加报警策略</button>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <p>报警策略管理是防止集群中的服务器某个压力值过高或者过低而造成集群性能的降低，通过报警策略的设定，管理可以及时的察觉每个服务器的故障并进行及时修正，保证集群最有效的工作状态。管理员可以根据服务器的不同应用，通过报警策略的类型、极限参数和警告内容的设置，将报警策略赋予服务器，并产生报警日志。</p>\n        <div class=\"row\">\n            <div class=\"col-md-4 form-inline\">\n                <div class=\"form-group\">\n                    <label for=\"_display_num\">显示条数</label>\n                    <select name=\"display_num\" id=\"_display_num\" class=\"form-control\">\n                        <option value=\"10\">10</option>\n                        <option value=\"20\">20</option>\n                        <option value=\"50\">50</option>\n                        <option value=\"100\">100</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-4 form-inline\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"请输入关键字\">\n                    <button class=\"btn btn-primary\">搜索</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <table class=\"table table-hover component-panel-table\">\n        <thead>\n        <tr>\n            <th>策略名称</th>\n            <th>报警组</th>\n            <th>监控项</th>\n            <th>阈值比较方法</th>\n            <th>报警条件</th>\n            <th>最大报警次数</th>\n            <th>详细</th>\n            <th>状态</th>\n            <th>操作</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"data in AlarmPolicyVm.table.data track by $index\">\n            <td>{{data.policyName}}</td>\n            <td>{{data.alarmGroup}}</td>\n            <td>{{data.monitorItem}}</td>\n            <td>{{data.compare}}</td>\n            <td>持续{{data.during}}秒</td>\n            <td>{{data.maxAlarmTime}}</td>\n            <td>\n                <a href=\"javascript:;\" ng-click=\"AlarmPolicyVm.viewDetail(data.id)\">查看</a>\n            </td>\n            <td>\n                <button class=\"btn btn-sm btn-default\" ng-click=\"AlarmPolicyVm.toggleApply(data.id)\">{{data.isApply == '1' ? '启用' : '取消' }}</button>\n            </td>\n            <td>\n                <button class=\"btn btn-sm btn-default\" ng-click=\"AlarmPolicyVm.editItem(data.id)\">编辑</button>\n                <button class=\"btn btn-sm btn-default\" ng-click=\"AlarmPolicyVm.deleteItem(data.id)\">删除</button>\n                <button class=\"btn btn-sm btn-default\" ng-click=\"AlarmPolicyVm.setException(data.id)\">设置例外</button>\n            </td>\n        </tr>\n        <!--<tr>\n            <td>测试CPU报警</td>\n            <td>Falcon_backend</td>\n            <td>CPU_IDLE</td>\n            <td>&gt;=100百分率</td>\n            <td>持续60秒</td>\n            <td>2</td>\n            <td>查看</td>\n            <td><button class=\"btn btn-sm btn-default\">启用</button></td>\n            <td>\n                <button class=\"btn btn-sm btn-default\">编辑</button>\n                <button class=\"btn btn-sm btn-default\">删除</button>\n                <button class=\"btn btn-sm btn-default\">设置例外</button>\n            </td>\n        </tr>-->\n        <!--<tr>\n            <td>测试CPU报警</td>\n            <td>Falcon_backend</td>\n            <td>CPU_IDLE</td>\n            <td>&gt;=100百分率</td>\n            <td>持续60秒</td>\n            <td>2</td>\n            <td>查看</td>\n            <td><button class=\"btn btn-sm btn-default\">启用</button></td>\n            <td>\n                <button class=\"btn btn-sm btn-default\">编辑</button>\n                <button class=\"btn btn-sm btn-default\">删除</button>\n                <button class=\"btn btn-sm btn-default\">设置例外</button>\n            </td>\n        </tr>-->\n        </tbody>\n    </table>\n    <div class=\"clearfix\">\n        <ul class=\"pagination pull-right\">\n            <li>\n                <a href=\"#\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n            <li><a href=\"#\">1</a></li>\n            <li>\n                <a href=\"#\" aria-label=\"Next\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>";

/***/ }

});