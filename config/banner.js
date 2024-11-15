import chalk from "chalk"; 

import { ColorTheme } from "./config/colors"; 
const colors = new ColorTheme();

function displayHeader() {
    console.log(colors.style('╔════════════════════════════════════════╗', 'border'));
    console.log(colors.style('║      🚀   自动每日领取 $RWT 🚀         ║', 'header'));
    console.log(colors.style('║  👤    脚本编写：子清                  ║', 'header'));
    console.log(colors.style('║  📢  电报频道：https://t.me/ksqxszq    ║', 'link'));
    console.log(colors.style('╚════════════════════════════════════════╝', 'border'));
    console.log();  // 添加额外空行以分隔内容
}

export default displayHeader; // 使用 export 替代 module.exports
