// 选择排序

#include <iostream>

void selectionSort(int *arr, int len) {
  for (int i = 0; i < len; i++) {
    int min = i;
    for (int j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    int tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
}

int main() {
  int arr[] = {1, 4, 5, 6, 9, 2, 3, -1, 11, 40, 32};
  int len = sizeof(arr) / sizeof(int);
  selectionSort(arr, len);

  for (int i = 0; i < len; i++) {
    std::cout << arr[i] << " ";
  }
  std::cout << std::endl;
}
