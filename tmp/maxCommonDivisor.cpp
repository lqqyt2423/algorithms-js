// 最大公约数

#include <iostream>

int maxCommonDivisor(int x, int y) {
  if (x == y) return x;
  if (x < y) return maxCommonDivisor(y - x, x);
  return maxCommonDivisor(x - y, y);
}

int main() {
  std::cout << maxCommonDivisor(168, 64) << std::endl;
  std::cout << maxCommonDivisor(160, 64) << std::endl;
  std::cout << maxCommonDivisor(7, 64) << std::endl;
}
