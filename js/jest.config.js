module.exports = {
  verbose: true,// 是否输出详细的测试结果
// collectCoverage:false, // 是否应该收集测试覆盖率
  /*
  * roots决定哪些目录下的文件应该被扫描，而testMatch决定在这些目录下扫描哪些文件
  * */
  roots: ["__tests__"], //检索文件的根目录
  // testMatch: ['<rootDir>/__test__/leetcode/isPalindrome.js', '<rootDir>/__tests__/leetcode/*.js'], // 匹配测试文件的正则表达式
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // 忽略测试文件的正则表达式
// rootDir:'', // 测试根目录，包含了 jest 配置文件的根目录
}
