// 二分查找

#include <iostream>
#include <vector>

using namespace std;

// 返回匹配的索引值，如为找到则返回 -1
int binarySearch(vector<int> &list, int val) {
  int start = 0;
  int end = list.size() - 1;
  while (start <= end) {
    int i = (start + end) / 2;
    if (list[i] == val) return i;
    if (list[i] > val) {
      end = i - 1;
    } else {
      start = i + 1;
    }
  }
  return -1;
}

int main() {
  vector<int> myList{1, 3, 5, 7, 9};
  int index = binarySearch(myList, 5);
  cout << "索引为: " << index << endl;

  myList = {1, 3, 5, 7, 9, 11};
  index = binarySearch(myList, 11);
  cout << "索引为: " << index << endl;

  myList = {1, 3, 5, 7, 9, 11};
  index = binarySearch(myList, 1);
  cout << "索引为: " << index << endl;
}
