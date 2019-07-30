// 快速排序
// 从小到大

#include <iostream>

void printArr(int *arr, int len) {
  for (int i = 0; i < len; i++) {
    std::cout << arr[i] << " ";
  }
  std::cout << std::endl;
}

void exch(int *arr, int i, int j) {
  int tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

void quickSort(int *arr, int begin, int end) {
  if (begin >= end) return;
  if (begin + 1 == end && arr[end] < arr[begin]) {
    exch(arr, begin, end);
    return;
  }

  // 切分，目标是：左边都比 val 小，右边都比 val 大
  int i = begin + 1;
  int j = end;
  int val = arr[begin];
  while (true) {
    while (arr[i] <= val) {
      ++i;
      if (i == j) break;
    }
    if (i == j) break;
    while (arr[j] >= val) {
      --j;
      if (i == j) break;
    }
    if (i == j) break;
    exch(arr, i, j);
  }

  // 切分点
  int point = val <= arr[i] ? i - 1 : i;
  exch(arr, begin, point);

  // 递归
  quickSort(arr, begin, point - 1);
  quickSort(arr, point + 1, end);
}
// 假设传入的初始数组已经被随机打乱了
void quickSort(int *arr, int len) { quickSort(arr, 0, len - 1); }

int main() {
  int arr[] = {1, 4, 5, 6, 9, 2, 3, -1, 11, 40, 32};
  int len = sizeof(arr) / sizeof(int);

  quickSort(arr, len);
  printArr(arr, len);
}
