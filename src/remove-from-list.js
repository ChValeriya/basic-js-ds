const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function getPosition(l, k) {
  let position = 0;
  let positionsArr = [];
  while (l && l.value != null) {
    if (l.value === k) {
      positionsArr.push(position);
    }
    l = l.next;
    position++;
  }
  return positionsArr
}

function removeKFromList(l, k) {
  let positionsArr = getPosition(l, k);
  let index = 0;

  for (let position of positionsArr) {
    let list = l;

    if (position === 0) {
      l = l.next
      index++
    } else {
      let prev = null;
      
      while (index < position) {
        prev = list;
        list = list.next;
        index++;
      }
        prev.next = prev.next.next;
        index--;
    }
  }
  return l
}

module.exports = {
  removeKFromList
};
